"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";


interface SidebarItemProps {
    label: string;
    iconSrc: string;
    href: string;
}
export const SidebarItem = ({ label, iconSrc, href }: SidebarItemProps) => {

    const pathname = usePathname();
    const active = pathname === href

    return (
        <Button
            variant={active ? "sidebarOutline" : "sidebar"}
            className="justify-start h-[52px]"
            asChild
        >
            <Link href={href}>
                <Image
                    src={iconSrc}
                    alt={label}
                    height={32}
                    width={32}
                    className="mr-5"
                />
                {label}
            </Link>
        </Button>
    )
}
