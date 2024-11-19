import { LayoutProps } from '@/interfaces/layout';

import { Header } from './hearder';
import { Footer } from './footer';



const MarketingLayout = ({ children }: LayoutProps) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header/>
            <main className='flex-1 flex flex-col items-center justify-center'>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default MarketingLayout