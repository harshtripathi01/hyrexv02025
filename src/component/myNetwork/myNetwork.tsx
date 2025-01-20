
"use client";

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

const users: User[] = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com"
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com"
  }
  // Add more users as needed
];





import { Card,CardFooter } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { PROFILE } from '@/component/utils/constant'
import Link from "next/link";

interface MyNetworkProps {
  users: User[];
}

  
export default function MyNetwork({users}: MyNetworkProps) {
  return (
    <div className="flex flex-col items-start justify-start m-10">
    <div className="flex items-start justify-start w-full max-w-4xl mb-6">
      <h1 className="text-2xl font-bold">Network</h1>
    </div>

    {users.map((item) => (
        <div className="w-[665px] h-auto shadow-sm rounded-[15px] mb-4">
        <div className="flex items-center p-4">
        <img
                    src={PROFILE}
                    alt="Profile"
                    className="w-[55px] h-[55px] rounded-full"
                  
                />
          <div className="ml-4  w-full">
            <div>
            <div className="font-bold text-[20px]">{item.firstName} {item.lastName} <span className="font-bold text-[20px]">@</span>  <span className="text-muted-foreground text-[16px]">CTO / IBM</span></div>
            <div className="text-muted-foreground text-[14px]">{item.email}</div>
          
          </div>
          </div>
          <div>
        <Link href="/chats" className="text-[#3C23B5] text-[16px] font-bold">
            Message
        </Link>
        </div>
        
        </div>
      
       
      </div> 
    ))}
   
    </div>
  )
}


