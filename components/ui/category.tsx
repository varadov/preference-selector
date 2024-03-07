"use client";

import { useState, ReactNode, Children } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type TProps = {
  name: string;
  icon: ReactNode;
  children?: ReactNode | ReactNode[];
};

export function Category({ name, icon, children }: TProps) {
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
          {Children.count(children) > 0 && (
            <div className="flex flex-wrap gap-2">{children}</div>
          )}
        </CollapsibleContent>
      </CollapsibleTrigger>
    </Collapsible>
  );
}
