import { cn } from "@/lib/utils";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {

    return (
        <div className={cn("bg-blue-400 flex flex-col h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2", className )}>
            sidebar
        </div>
    )
}
