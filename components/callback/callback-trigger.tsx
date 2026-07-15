"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { useCallback } from "@/components/callback/callback-provider"

/**
 * Client-leaf button that opens the shared callback modal. Lets server-rendered
 * sections trigger the modal without becoming client components themselves.
 */
export function CallbackTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  const { openCallback } = useCallback()

  return (
    <button
      type="button"
      onClick={openCallback}
      className={cn(className)}
      {...props}
    >
      {children}
    </button>
  )
}
