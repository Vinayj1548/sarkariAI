import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to SarkariAI</h1>
      <Link href="/login">
        <Button className="m-4 p-6">Login</Button>
      </Link>
      <Link href="/signup">
        <Button className="m-4 p-6">Sign Up</Button>
      </Link>
    </div>
  );
}
