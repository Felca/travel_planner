"use client";

import { useRouter } from "next/navigation";
import { login } from "@/lib/auth-actions";

interface AuthButtonProps {
  isLoggedIn: boolean;
  children?: React.ReactNode;
}

export default function AuthButton({
  isLoggedIn,
  children,
}: AuthButtonProps) {
  const router = useRouter();

  const handleClick = async () => {
    if (isLoggedIn) {
      router.push("/trips");
    } else {
      await login();
    }
  };

  return (
    <button onClick={handleClick} className="mt-6 w-full sm:w-auto bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center">
      {children}
    </button>
  );
}
