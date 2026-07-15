"use client"

import * as React from "react"

import { CallbackDialog } from "@/components/callback/callback-dialog"
// import { FloatingActions } from "@/components/layout/floating-actions"

type CallbackContextValue = {
  openCallback: () => void
}

const CallbackContext = React.createContext<CallbackContextValue | null>(null)

/** Access the shared "request a callback" modal from anywhere on the page. */
export function useCallback() {
  const ctx = React.useContext(CallbackContext)
  if (!ctx) {
    throw new Error("useCallback must be used within <CallbackProvider>")
  }
  return ctx
}

/**
 * Wraps the page so the hero, CTA strip, and floating phone button all open a
 * single shared callback modal. Also renders the floating action buttons.
 */
export function CallbackProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)

  const value = React.useMemo<CallbackContextValue>(
    () => ({ openCallback: () => setOpen(true) }),
    []
  )

  return (
    <CallbackContext.Provider value={value}>
      {children}
      {/* <FloatingActions /> */}
      <CallbackDialog open={open} onOpenChange={setOpen} />
    </CallbackContext.Provider>
  )
}
