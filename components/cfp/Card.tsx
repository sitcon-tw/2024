'use client'
import { useLayoutEffect, useState } from 'react'

type Card = {
    title: string
    content: string
}

type CardsProps = {
    data: Card[]
}

export default function Cards({ data }: CardsProps) {
    const [isDesktop, setIsDesktop] = useState(false)

    const varients = ['pink', 'purple', 'blue'] as const
    useLayoutEffect(() => {
        function update() {
            setIsDesktop(window.innerWidth > 1024)
        }

        window.addEventListener('resize', update)
        update()

        return () => {
            window.removeEventListener('resize', update)
        }
    }, [])

    // TODO: style
    return (
        <div className="grid grid-rows-3 gap-3 lg:grid-cols-3 lg:grid-rows-1 lg:gap-[14px] my-10">
            {data.map((item, index) =>
                isDesktop ? (
                    <CardDesktop
                        key={index}
                        {...item}
                        varient={varients[index % 3]}
                    />
                ) : (
                    <Card key={index} {...item} varient={varients[index % 3]} />
                )
            )}
        </div>
    )
}

const varients = {
    pink: {
        bg: 'bg-pink',
        text: 'text-pink',
        border: 'border-pink',
        shadow: 'shadow-[0px_4px_4px_0px_#FF349580]',
    },
    purple: {
        bg: 'bg-purple',
        text: 'text-purple',
        border: 'border-purple',
        shadow: 'shadow-[0px_4px_4px_0px_#AC24FF80]',
    },
    blue: {
        bg: 'bg-blue',
        text: 'text-blue',
        border: 'border-blue',
        shadow: 'shadow-[0px_4px_4px_0px_#0CE29580]',
    },
}

export function Card({
    title,
    content,
    varient,
}: Card & {
    varient: 'pink' | 'purple' | 'blue'
}) {
    const [open, setOpen] = useState(false)

    return (
        <div
            className="h-[200px] relative flex justify-center"
            onMouseOver={() => setOpen(true)}
            onMouseOut={() => setOpen(false)}
        >
            <div
                className={`h-[200px] rounded-r-lg border ${varients[varient].border
                    } ${open
                        ? `w-[400px] translate-x-[100px] py-[10px] px-[40px] ${varients[varient].shadow}`
                        : 'w-[300px] translate-x-[24px]'
                    } ${!open && varients[varient].bg} transition-all`}
            >
                <p className={`text-[14px] mt-4 ${varients[varient].text}`}>
                    {open && content}
                </p>
            </div>
            <div
                className={`h-[200px] absolute z-10 ${open
                    ? `${varients[varient].bg} ${varients[varient].shadow}`
                    : 'bg-gold'
                    } ${open
                        ? '-translate-x-[198px] w-[200px] rounded-l-lg'
                        : 'w-[300px] rounded-lg'
                    } transition-all flex justify-center items-center`}
            >
                <h1
                    className={`text-white font-bold ${open ? 'text-2xl' : 'text-[64px]'
                        } transition-all leading-[93px]`}
                >
                    {title}
                </h1>
            </div>
        </div>
    )
}

export function CardDesktop({
    title,
    content,
    varient,
}: Card & {
    varient: 'pink' | 'purple' | 'blue'
}) {
    const [open, setOpen] = useState(false)
    return (
        <div
            className="h-[410px] relative overflow-y-hidden"
            onMouseOver={() => setOpen(true)}
            onMouseOut={() => setOpen(false)}
        >
            <div
                className={`h-[400px] w-full absolute z-0 top-0 border rounded-lg py-5 px-10 ${varients[varient].text} ${varients[varient].border} ${varients[varient].shadow} `}
            >
                <h1 className="text-2xl text-center font-bold my-4">{title}</h1>
                {content.split('\n').map((item, index) => (
                    <p className="text-[15px]" key={index}>
                        {item}
                    </p>
                ))}
            </div>
            <div
                className={`h-[400px] w-full p-12 rounded-lg absolute z-10 bg-gold ${open && '-translate-y-[400px]'
                    } transition-all flex justify-center items-center shadow-[0px_4px_16px_0px_#E5C366CC]`}
            >
                <h1 className="text-white text-center font-bold text-[64px] leading-[93px]">
                    {title}
                </h1>
            </div>
        </div>
    )
}
