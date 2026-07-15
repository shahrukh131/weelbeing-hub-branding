"use client"

import { MessageCircle, Phone } from "lucide-react"

import { useCallback } from "@/components/callback/callback-provider"

const WHATSAPP_NUMBER = "8801700000000"

/** Fixed bottom-right WhatsApp link + callback phone button. */
export function FloatingActions() {
  const { openCallback } = useCallback()

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 sm:right-6 sm:bottom-6">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
        className="flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="size-6" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
      <button
        type="button"
        onClick={openCallback}
        title="Request a callback"
        className="flex size-13 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg shadow-brand/30 transition-transform hover:-translate-y-0.5"
      >
        <Phone className="size-5.5" />
        <span className="sr-only">Request a callback</span>
      </button>
    </div>
  )
}
