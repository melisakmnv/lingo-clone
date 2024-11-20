import { WrapperProps } from "@/interfaces/wrapper"


export const FeedWrapper = ({ children }: WrapperProps) => {
    return (
        <div className="flex-1 relative top-0 pb-10">
            {children}
        </div>
    )
}
