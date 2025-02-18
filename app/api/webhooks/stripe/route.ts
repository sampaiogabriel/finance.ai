/* eslint-disable @typescript-eslint/no-unused-vars */
import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request: Request) => {
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.error();
  }

  const secret = process.env.STRIPE_SECRET_KEY;

  if (!secret) {
    return NextResponse.error();
  }

  const text = await request.text();

  const stripe = new Stripe(secret, {
    apiVersion: "2024-10-28.acacia",
  });

  const webhook_secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhook_secret) {
    return NextResponse.error();
  }

  const event = stripe.webhooks.constructEvent(text, signature, webhook_secret);

  switch (event.type) {
    case "invoice.paid": {
      const { customer, subscription, subscription_details } =
        event.data.object;
      const clerkUserId = subscription_details?.metadata?.clerk_user_id;

      if (!clerkUserId) {
        return NextResponse.error();
      }

      await clerkClient().users.updateUser(clerkUserId, {
        publicMetadata: {
          subscriptionPlan: "premium",
        },
        privateMetadata: {
          stripeCustomerId: customer,
          stripeSubscriptionId: subscription,
        },
      });
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = await stripe.subscriptions.retrieve(
        event.data.object.id,
      );

      const clerkUserId = subscription.metadata.clerk_user_id;

      if (!clerkUserId) {
        return NextResponse.error();
      }

      await clerkClient().users.updateUser(clerkUserId, {
        privateMetadata: {
          stripeCustomerId: null,
          stripeSubscriptionId: null,
        },
        publicMetadata: {
          subscriptionPlan: null,
        },
      });
    }
  }

  return NextResponse.json({ received: true });
};
