"use client"

import * as React from "react"
import { ArrowRight, ShieldCheck } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

type CallbackDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

/** Shared "Request a callback" modal with an inline success state (no backend). */
export function CallbackDialog({ open, onOpenChange }: CallbackDialogProps) {
  const [sent, setSent] = React.useState(false)

  // Reset the success state whenever the dialog is fully closed.
  function handleOpenChange(next: boolean) {
    onOpenChange(next)
    if (!next) {
      // Delay so the reset isn't visible during the close animation.
      window.setTimeout(() => setSent(false), 200)
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {sent ? (
          <div className="flex flex-col items-center py-6 text-center">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-teal text-brand-teal-foreground">
              <ShieldCheck className="size-7" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-foreground">
              Request received
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Our team will call you back shortly. Thank you.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-extrabold">
                Request a callback
              </DialogTitle>
              <DialogDescription>
                Tell us how to reach you and we&apos;ll call within minutes.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="mt-1 grid gap-3">
              <Input className="h-11" placeholder="Your name" required />
              <Input
                className="h-11"
                placeholder="Mobile number"
                type="tel"
                required
              />
              <NativeSelect className="w-full [&>select]:h-11" defaultValue="">
                <NativeSelectOption value="" disabled>
                  Service — Know more
                </NativeSelectOption>
                <NativeSelectOption>Book appointment</NativeSelectOption>
                <NativeSelectOption>Order medicine</NativeSelectOption>
                <NativeSelectOption>Corporate plan</NativeSelectOption>
              </NativeSelect>
              <NativeSelect className="w-full [&>select]:h-11" defaultValue="">
                <NativeSelectOption value="" disabled>
                  Preferred time — 9AM–12PM
                </NativeSelectOption>
                <NativeSelectOption>12PM–3PM</NativeSelectOption>
                <NativeSelectOption>3PM–6PM</NativeSelectOption>
              </NativeSelect>
              <Button
                type="submit"
                className="mt-1 h-11 w-full gap-2 bg-brand text-brand-foreground hover:bg-brand/90"
              >
                Arrange callback
                <ArrowRight className="size-4" />
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
