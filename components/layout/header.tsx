"use client"

import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="relative z-20">
      <div className="h-16 w-full relative">
        <Image
          src="/images/skull-border.jpeg"
          alt="Skull border decoration"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-end items-center px-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800/50">
            <Menu className="h-6 w-6" />
          </Button>
          <Link
            href="/"
            className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full text-sm font-bold"
          >
            LOGO
          </Link>
        </div>
      </div>
    </header>
  )
}
