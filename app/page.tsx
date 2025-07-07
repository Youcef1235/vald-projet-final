"use client"

import Image from "next/image"
import { Menu, Instagram, Youtube, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TiktokIcon } from "@/components/icons/tiktok-icon"

export default function HomePage() {
  const concerts = [
    {
      venue: "ZÉNITH de Paris",
      date: "14/04/2026",
      description:
        "Concert de fin de tournée en grande pompe dans une salle mythique de Paris. Clôture de l'auditorium avec l'orchestre symphonique !",
    },
    {
      venue: "WEMBLEY ARENA",
      location: "Londres",
      date: "15/09/2025",
      description: "Une ambiance jamais vu, l'objectif dans cette mythique salle de Londres.",
    },
    {
      venue: "Opéra GARNIER",
      location: "Paris",
      date: "12/11/2025",
      description: "1er Concert de Rap au sein de cet Opéra Légendaire de la ville Lumière.",
    },
    {
      venue: "ZIGGO DOME",
      date: "08/01/2026",
      description: "",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Skull border at top */}
      <div className="h-16 w-full relative">
        <Image
          src="/images/skull-border.jpeg"
          alt="Skull border decoration"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Header */}
      <header className="flex justify-between items-center p-4 relative z-20">
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
          <Menu className="h-6 w-6" />
        </Button>
        <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold">LOGO</div>
      </header>

      {/* Main content */}
      <main className="px-4 py-8 relative z-10">
        <div className="flex flex-row gap-4 items-start">
          {/* Artist section */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-64">
              {/* Red neon outline effect */}
              <div className="absolute inset-0 border-2 border-red-500 rounded-full blur-sm opacity-80"></div>
              <div className="absolute inset-1 border border-red-400 rounded-full"></div>

              {/* Artist placeholder - will be replaced with real photo */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-b from-gray-800 to-black overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  {/* Placeholder for artist photo */}
                  <div className="w-24 h-32 bg-gray-700 rounded-t-full mx-auto mb-2 relative">
                    <div className="w-12 h-12 bg-gray-600 rounded-full mx-auto mb-1"></div>
                    <div className="w-8 h-2 bg-black rounded-full mx-auto absolute top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="w-16 h-20 bg-gray-800 mx-auto rounded-t-lg"></div>
                  </div>
                  {/* Microphone */}
                  <div className="w-2 h-8 bg-gray-400 mx-auto rounded-full"></div>
                  <div className="w-4 h-4 bg-gray-500 mx-auto rounded-full -mt-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Concerts list */}
          <div className="flex-1 space-y-2">
            {concerts.map((concert, index) => (
              <div
                key={index}
                className="border border-gray-600 rounded-lg p-2 bg-black/80 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Smoke effect inside each concert card */}
                <div className="absolute top-0 right-0 w-16 h-full pointer-events-none z-0">
                  <Image
                    src="/images/smoke-effect.png"
                    alt="Smoke effect in concert card"
                    fill
                    className="object-cover opacity-25"
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-sm font-bold text-white">{concert.venue}</h3>
                      {concert.location && <div className="text-xs text-gray-300">{concert.location}</div>}
                    </div>
                    <div className="text-white font-mono text-xs whitespace-nowrap ml-2">{concert.date}</div>
                  </div>
                  {concert.description && <p className="text-gray-400 text-xs leading-tight">{concert.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket section */}
        <div className="mt-12 flex justify-center">
          <div className="relative">
            <Image
              src="/images/hell-ticket.png"
              alt="Hell Admit One Ticket"
              width={320}
              height={180}
              className="object-contain"
            />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="text-white font-bold text-xl tracking-wider" style={{ fontFamily: "serif" }}>
                Pandemonium Way
              </div>
            </div>
          </div>
        </div>

        {/* Tracklist section */}
        <div className="mt-24 pt-12">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider" style={{ fontFamily: "serif" }}>
              PANDEMONIUM
            </h1>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.3em] text-gray-300">TRACKLIST</h2>
          </div>

          {/* Tracks grid - 2 columns with horizontal rectangles */}
          <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { title: "DIEU MERCI", image: "/images/tracks/dieu-merci.jpeg", available: true },
              { title: "REGULATION", image: "/images/tracks/regulation.jpeg", available: true },
              { title: "LETHARGIE", image: "/images/tracks/lethargie.jpeg", available: true },
              { title: "PANDEMONIUM", image: "/images/tracks/pandemonium.jpeg", available: true },
              { title: "FLPVCOF", image: "/images/tracks/flpvcof.jpeg", available: true },
              { title: "GAUCHE DROITE", image: "/images/tracks/gauche-droite.jpeg", available: true },
              { title: "ROCHE NOIRE", image: "/images/tracks/roche-noire.jpeg", available: true },
              { title: "DARKNET", image: "/images/tracks/darknet.jpeg", available: true },
              { title: "FUMÉE", image: "/images/tracks/fumee.jpeg", available: true },
              { title: "QUE DES PROBLÈMES", image: "/images/tracks/que-des-problemes.png", available: true },
              { title: "UFOV", image: "/images/tracks/ufov.jpeg", available: true },
              { title: "SUPERMAN", image: "/images/tracks/superman.jpeg", available: true },
              { title: "PROZACZOPIXAN", image: "/images/tracks/prozaczopixan.jpeg", available: true },
              { title: "INTERLUDE", image: "/images/tracks/interlude.jpeg", available: true },
              { title: "93 MILLIARDS", image: "/images/tracks/93-milliards.jpeg", available: true },
              { title: "LES ECHAPPES", image: "/images/tracks/les-echappes.jpeg", available: true },
            ].map((track, index) => (
              <div key={index} className="relative group cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-900">
                  <Image
                    src={track.image || "/placeholder.svg"}
                    alt={`${track.title} cover`}
                    fill
                    className="object-cover transition-all duration-300 group-hover:brightness-75"
                  />

                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/50" />

                  {/* Title overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white font-bold text-xl md:text-2xl text-center px-4 drop-shadow-lg">
                      {track.title}
                    </h3>
                  </div>

                  {/* Play button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* PARADIS PERDU - Full width */}
            <div className="col-span-2 relative group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="relative aspect-[4/1] overflow-hidden rounded-lg bg-gray-900">
                <Image
                  src="/images/tracks/paradis-perdu.jpeg"
                  alt="PARADIS PERDU cover"
                  fill
                  className="object-cover transition-all duration-300 group-hover:brightness-75"
                />

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Title overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-bold text-2xl md:text-3xl text-center px-4 drop-shadow-lg">
                    PARADIS PERDU
                  </h3>
                </div>

                {/* Play button on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-red-600 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Merch/Vinyl Section */}
        <div className="mt-24 pt-12 border-t border-gray-800">
          <div className="flex flex-row items-center justify-center gap-4 max-w-4xl mx-auto px-4">
            {/* Vinyl Image - Larger container */}
            <div className="w-3/5 flex-shrink-0 flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bDS9UQkrLqw4twzwfZYQ5WItPHkG70.png"
                alt="Pandemonium Vinyl/CD"
                width={300}
                height={300}
                className="object-contain rounded-lg"
              />
            </div>

            {/* Text and Buy Button - Smaller container */}
            <div className="w-2/5 text-left">
              <h2 className="text-base font-bold uppercase tracking-wider text-white">Un Super Vinyle Exclusif</h2>
              <p className="mt-2 text-xs text-gray-400">
                de l'album Pandemonium et tout un blabla sur pourquoi l'acheter. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mt-4">
                <a href="#" className="inline-block transition-transform hover:scale-110">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QoMPcnVTMXdVf22TnF3MWV754q2YGX.png"
                    alt="Buy It button"
                    width={90}
                    height={45}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
          <div className="flex justify-center gap-6">
            <a
              href="https://www.youtube.com/channel/UC4__f_3-i_i0G3gS5B-bBwA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a
              href="https://www.tiktok.com/@valdsued"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition-colors"
            >
              <TiktokIcon className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/vald_ld"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition-colors"
            >
              <X className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/valdsued/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
