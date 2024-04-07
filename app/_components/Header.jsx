"use client";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/",
    },
    {
      id: 3,
      name: "Contact us",
      path: "/",
    },
  ];

  const { user } = useKindeBrowserClient();

  useEffect(() => {
    // console.log(user);
  }, [user]);
  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo" width={150} height={80}/>

        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link key={index} href={item.path}>
              <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {user ? (
        <Popover>
          <PopoverTrigger>
            {" "}
            <Image
              src={user?.picture}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full"
            />
          </PopoverTrigger>
          <PopoverContent className='w-44'>
            <ul className="flex flex-col gap-2">
            <li className="cursor-pointer rounded-md hover:bg-slate-100 p-2">Profile</li>
            <Link href={'/my-booking'} className="cursor-pointer rounded-md hover:bg-slate-100 p-2">My bookings</Link>
              <li className="cursor-pointer rounded-md hover:bg-slate-100 p-2">
              <LogoutLink>Log Out</LogoutLink>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        // 
        <LoginLink>
          <Button>Get Started</Button>
        </LoginLink>
      )}

      {/* //2:54:25 */}
    </div>
  );
}

export default Header;
