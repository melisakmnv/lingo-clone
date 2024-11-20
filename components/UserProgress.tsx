import Link from "next/link";
import Image from "next/image";

import { InfinityIcon } from "lucide-react";

import { Button } from "@/components/ui/button"; 

interface UserProgressProps {
    activeCourse: {
        title: string;
        imageSrc: string;
    };
    hearts: number;
    points: number;
    hasActiveSubscription: boolean
}

export const UserProgress = ({ activeCourse, hearts, points, hasActiveSubscription }: UserProgressProps) => {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href={"/courses"}>
                <Button variant={"ghost"}>
                    <Image
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        width={32}
                        height={32}
                        className="rounded-md border"
                    />
                </Button>
            </Link>

            <Link href={"/shop"}>
                <Button variant={"ghost"} className="text-orange-500">
                    <Image
                        src={"/assets/points.svg"}
                        alt={"Points"}
                        width={28}
                        height={28}
                        className="mr-2"
                    />
                    {points}
                </Button>
            </Link>

            <Link href={"/shop"}>
                <Button variant={"ghost"} className="text-rose-500">
                    <Image
                        src={"/assets/heart.svg"}
                        alt={"Hearts"}
                        width={22}
                        height={22}
                        className="mr-2"
                    />
                    {hasActiveSubscription ? <InfinityIcon className="size-4 stroke-[3]" /> : hearts}
                </Button>
            </Link>
        </div>
    )
}
