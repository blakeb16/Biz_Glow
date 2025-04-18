// src/components/ui/dialog.tsx
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils"; // or replace with string template

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 z-50" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white p-6 rounded-lg w-full max-w-lg shadow-lg",
        className
      )}
      {...props}
    />
  </DialogPrimitive.Portal>
));
DialogContent.displayName = "DialogContent";

export const DialogHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">{children}</div>
);

// ✅ THE FIXED PART
interface DialogTitleProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {
  className?: string;
  children: React.ReactNode;
}

export const DialogTitle = ({ children, className, ...props }: DialogTitleProps) => (
  <DialogPrimitive.Title
    className={cn("text-xl font-semibold", className)}
    {...props}
  >
    {children}
  </DialogPrimitive.Title>
);
