import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect('/login');
  }

  return (
    <div className="flex items-center justify-center w-screen dark">
      <h1 className="text-red-500 p-5">
        Teste
      </h1>

      <UserButton showName />

    </div>
  );
}

export default Home;
