import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { SidebarItem } from "./SidebarItem";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";


const SIDEBAR_ITEMS = [
    {
        label: "Learn",
        href: "/learn",
        iconSrc: "/assets/learn.svg"
    },
    {
        label: "Leaderboard",
        href: "/leaderboard",
        iconSrc: "/assets/leaderboard.svg"
    },
    {
        label: "Quests",
        href: "/quests",
        iconSrc: "/assets/quests.svg"
    },
    {
        label: "Shop",
        href: "/shop",
        iconSrc: "/assets/shop.svg"
    },
]



interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {

    return (
        <div className={cn("flex flex-col h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2", className)}>
            <Link href={"/learn"}>
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image
                        src={"/assets/mascot.svg"}
                        alt={"Mascot"}
                        width={40}
                        height={40}
                    />
                    <h1 className='text-2xl font-extrabold text-green-600 tracking-wide'>Dodoooo</h1>
                </div>
            </Link>

            <div className="flex flex-col gap-y-2 flex-1">
                {SIDEBAR_ITEMS.map((item, index) => (
                    <SidebarItem
                        key={index}
                        label={item.label}
                        href={item.href}
                        iconSrc={item.iconSrc}
                    />
                ))}
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="size-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton></UserButton>
                </ClerkLoaded>
            </div>
        </div>
    )
}
