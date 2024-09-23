'use client'

import { cn } from "@/lib/utils";
import { Button } from "./ui/button"
import { Copy } from 'lucide-react'

export const CopyButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <Button
      className={cn(className, 'size-6')}
      onClick={() => {
        navigator.clipboard.writeText(text);
        alert("copied!");
      }}
      size="icon"
    >
      <Copy size={14} />
      <span className="sr-only">copy</span>
    </Button>
  );
}