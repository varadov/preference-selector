'use client'

import {useState, ReactNode, Children, KeyboardEvent, MouseEvent} from 'react'
import {Badge} from '@/components/ui/badge'
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@/components/ui/collapsible'

type TProps = {
    name: string
    icon?: ReactNode
    tabIndex?: number
    children?: ReactNode | ReactNode[]
}

export function Category({name, icon, tabIndex, children}: TProps) {
    const [isOpen, setIsOpen] = useState(false)

    const handleChildrenClick = (event: MouseEvent) => {
        event.stopPropagation()
    }

    const handleChildrenKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            event.stopPropagation()
        }
    }

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} tabIndex={tabIndex}>
            <CollapsibleTrigger>
                <Badge
                    className="hover:cursor-pointer select-none text-nowrap h-7"
                    variant={isOpen ? 'default' : 'secondary'}
                >
                    {icon}
                    {name}
                </Badge>
                <CollapsibleContent>
                    {Children.count(children) > 0 && (
                        <div
                            className="flex flex-wrap gap-2 pointer-events-auto"
                            onClick={handleChildrenClick}
                            onKeyDown={handleChildrenKeyDown}
                        >
                            {children}
                        </div>
                    )}
                </CollapsibleContent>
            </CollapsibleTrigger>
        </Collapsible>
    )
}
