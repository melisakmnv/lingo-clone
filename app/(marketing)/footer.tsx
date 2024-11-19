import Image from 'next/image'

import { Button } from '@/components/ui/button'


const FLAGS = [
    {
        flag: "/flags/hr.svg",
        language: "Croatian"
    },
    {
        flag: "/flags/es.svg",
        language: "Spanish"
    },
    {
        flag: "/flags/fr.svg",
        language: "French"
    },
    {
        flag: "/flags/it.svg",
        language: "Italian"
    },
    {
        flag: "/flags/jp.svg",
        language: "Japanese"
    },
]


export const Footer = () => {
    return (
        <footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
            <div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
                {
                    FLAGS.map((item, index) => (
                        <Button
                            size={"lg"}
                            variant={"ghost"}
                            className='w-full'
                            key={index}
                        >
                            <Image
                                src={item.flag}
                                alt={item.language}
                                height={32}
                                width={40}
                                className='mr-4 rounded-md'
                            />
                            {item.language}
                        </Button>
                    ))
                }
            </div>
        </footer>
    )
}
 