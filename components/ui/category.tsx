"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function Category({ name, icon, children }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Collapsible open={isOpen} onOpenChange={setIsOpen}>
			<CollapsibleTrigger>
				<Badge
					className="hover:cursor-pointer select-none text-nowrap h-7"
					variant={isOpen ? "default" : "secondary"}
				>
					{icon}
					{name}
				</Badge>
				<CollapsibleContent>
					{children && <div className="flex flex-wrap gap-2">
						{...children}
					</div>}
				</CollapsibleContent>
			</CollapsibleTrigger>
		</Collapsible>
	);
}
