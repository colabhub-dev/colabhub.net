import React from 'react'
import { card } from "@/lib/type"
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

const Card = (props: card) => {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-card p-4 transition-all hover:shadow-lg">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image 
                    src={props.img} 
                    alt={props.title} 
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="mt-4 space-y-3">
                <h2 className="text-xl font-semibold tracking-tight">{props.title}</h2>
                <p className="text-sm text-muted-foreground line-clamp-2">{props.description}</p>
                <div className="flex flex-wrap gap-2">
                    {props.tags.map((tag, index) => (
                        <span 
                            key={index} 
                            className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center">
                    <Button asChild variant="secondary" size="sm" className="w-full">
                        <Link href={props.link}>詳細を見る</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Card