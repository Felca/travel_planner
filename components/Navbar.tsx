"use client"

import Link from "next/link";
import Image from "next/image";
import { login, logout } from "@/lib/auth-actions";
import { Session } from "next-auth";

export default function Navbar({session}: {session: Session | null}){

    return <nav className="bg-white shadow-md py-4 border-gray-200">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-8">
            <Link href={"/"} className="flex items-center">
            <Image src={'/window.svg'} alt="logo" width={50} height={50}></Image>
            <span className="text-2xl font-bold text-gray-800">Travel Planner</span>
            </Link>

            {/* if session doesnt exist then dont show the links and signout button */}
            {session ? (
                <>
                <div className="flex items-center space-x-4">
                    <Link href={"/trips"} className="text-slate-900 hover:text-sky-500">My Trip</Link>
                    <Link href={"/globe"} className="text-slate-900 hover:text-sky-500">Globe</Link>
                </div>

                <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-sm cursor-pointer"
                    onClick={logout}>
                    Sign Out
                </button>
                </>
            ) : (
                <button className="flex items-center justify-center border-2 border-black hover:bg-gray-400  p-2 rounded-sm cursor-pointer"
                    onClick={login}>
                    Sign In
                </button>
            )}
            
        </div>
    </nav>
}