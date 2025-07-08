"use client"

import Image from "next/image"
import { Instagram, Youtube, XIcon } from "lucide-react"
import { TiktokIcon } from "@/components/icons/tiktok-icon"

export function Footer() {
  return (
    <footer className="relative overflow-hidden w-full border-t border-gray-800 py-12 mt-16">
      <Image src="/images/footer-background.jpeg" alt="Footer background" fill className="object-cover z-0" />
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <h3 className="font-bold text-white uppercase tracking-wider mb-4">VALD</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Qui est Vald
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Nos services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-bold text-white uppercase tracking-wider mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Cinémas
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <a
            href="https://www.youtube.com/channel/UC4__f_3-i_i0G3gS5B-bBwA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-white transition-transform hover:scale-110 hover:text-gray-300"
          >
            <Youtube className="h-7 w-7" />
          </a>
          <a
            href="https://www.tiktok.com/@valdsued"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-white transition-transform hover:scale-110 hover:text-gray-300"
          >
            <TiktokIcon className="h-7 w-7" />
          </a>
          <a
            href="https://twitter.com/vald_ld"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-white transition-transform hover:scale-110 hover:text-gray-300"
          >
            <XIcon className="h-7 w-7" />
          </a>
          <a
            href="https://www.instagram.com/valdsued/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white transition-transform hover:scale-110 hover:text-gray-300"
          >
            <Instagram className="h-7 w-7" />
          </a>
        </div>
      </div>
    </footer>
  )
}
