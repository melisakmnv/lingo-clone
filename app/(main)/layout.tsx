import { MobileHeader } from "@/components/MobileHeader"
import { Sidebar } from "@/components/ui/sidebar"
import { LayoutProps } from "@/interfaces/layout"


const MainLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <MobileHeader />
            <Sidebar className="hidden lg:flex" />
            <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
                <div className="bg-red-500 h-full">
                    {children}
                </div>
            </main>
        </>
    )
}

export default MainLayout