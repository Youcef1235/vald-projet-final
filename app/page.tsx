"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "./firebase"

interface Concert {
  id: string
  date: string
  city: string
  country: string
  venue: string
  status: "disponible" | "sold out"
}

export default function HomePage() {
  const [concerts, setConcerts] = useState<Concert[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "concerts"))
        const concertsData: Concert[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          date: doc.data().date,
          city: doc.data().city,
          country: doc.data().country,
          venue: doc.data().venue,
          status: doc.data().status
        }))
        setConcerts(concertsData)
      } catch (error) {
        console.error("Error fetching concerts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchConcerts()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  const handleBuyTicket = (concertId: string) => {
    // This is just for demonstration - no actual functionality
    console.log(`Buy ticket clicked for concert ${concertId}`)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="px-4 pb-8">
        {/* Upper section: Artist + Concerts */}
        <div className="flex flex-row items-start gap-3">
          {/* Artist column */}
          <div className="w-7/12 flex-shrink-0 relative z-30 -mt-10">
            <Image
              src="/images/artist-vald-color.png"
              alt="Photo de l'artiste Vald"
              width={400}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Concerts column */}
          <div className="w-5/12 h-[75vh] overflow-y-auto custom-scrollbar pt-6">
            {concerts.length === 0 ? (
              <div className="text-white text-center py-4">Aucun concert disponible</div>
            ) : (
              concerts.map((concert) => (
                <div key={concert.id} className="block mb-3">
                  <div className={`border rounded-lg p-2 bg-black/50 backdrop-blur-sm relative overflow-hidden transition-colors ${
                    concert.status === "sold out" 
                      ? "border-red-500/50 hover:border-red-500/80" 
                      : "border-green-500/50 hover:border-green-500/80"
                  }`}>
                    <div className="absolute top-0 right-0 w-16 h-full pointer-events-none z-0">
                      <Image src="/images/smoke-effect.png" alt="Smoke effect" fill className="object-cover opacity-10" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-sm font-bold text-white uppercase leading-tight">
                        {concert.venue}
                      </h3>
                      <div className="text-white font-mono text-xs mt-1">
                        {formatDate(concert.date)}
                      </div>
                      <div className="text-white font-mono text-xs mt-1">
                        {concert.city}, {concert.country}
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className={`text-xs font-bold ${
                          concert.status === "sold out" ? "text-red-500" : "text-green-500"
                        }`}>
                          {concert.status.toUpperCase()}
                        </div>
                        <button
                          onClick={() => handleBuyTicket(concert.id)}
                          disabled={concert.status === "sold out"}
                          className={`px-3 py-1 text-xs rounded-md transition-colors ${
                            concert.status === "sold out"
                              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                              : "bg-red-600 hover:bg-red-700 text-white"
                          }`}
                        >
                          {concert.status === "sold out" ? "COMPLET" : "BILLETTERIE"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Ticket section */}
        <div className="mt-8 flex justify-center">
          <Link href="/villes" className="block">
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
          </Link>
        </div>

        {/* Tracklist section */}
        <div className="relative mt-24 pt-12 overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-20">
            <Image
              src="/images/checkout-smoke-background.png"
              alt="Smoke background for tracklist"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4 tracking-wider" style={{ fontFamily: "serif" }}>
              PANDEMONIUM
            </h1>
            <h2 className="text-2xl font-light tracking-[0.3em] text-gray-300">TRACKLIST</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-w-xl mx-auto">
            {[
              { title: "DIEU MERCI", image: "/images/tracks/dieu-merci.jpeg" },
              { title: "REGULATION", image: "/images/tracks/regulation.jpeg" },
              { title: "LETHARGIE", image: "/images/tracks/lethargie.jpeg" },
              { title: "PANDEMONIUM", image: "/images/tracks/pandemonium.jpeg" },
              { title: "FLPVCOF", image: "/images/tracks/flpvcof.jpeg" },
              { title: "GAUCHE DROITE", image: "/images/tracks/gauche-droite.jpeg" },
              { title: "ROCHE NOIRE", image: "/images/tracks/roche-noire.jpeg" },
              { title: "DARKNET", image: "/images/tracks/darknet.jpeg" },
              { title: "FUMÉE", image: "/images/tracks/fumee.jpeg" },
              { title: "QUE DES PROBLÈMES", image: "/images/tracks/que-des-problemes.png" },
              { title: "UFOV", image: "/images/tracks/ufov.jpeg" },
              { title: "SUPERMAN", image: "/images/tracks/superman.jpeg" },
              { title: "PROZACZOPIXAN", image: "/images/tracks/prozaczopixan.jpeg" },
              { title: "INTERLUDE", image: "/images/tracks/interlude.jpeg" },
              { title: "93 MILLIARDS", image: "/images/tracks/93-milliards.jpeg" },
              { title: "LES ECHAPPES", image: "/images/tracks/les-echappes.jpeg" },
            ].map((track, index) => (
              <div key={index} className="relative group cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="relative aspect-[2.5/1] overflow-hidden rounded-md bg-gray-900">
                  <Image
                    src={track.image || "/placeholder.svg"}
                    alt={`${track.title} cover`}
                    fill
                    className="object-cover transition-all duration-300 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white font-bold text-sm text-center px-2 drop-shadow-lg">{track.title}</h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-span-2 relative group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="relative aspect-[5/1] overflow-hidden rounded-md bg-gray-900">
                <Image
                  src="/images/tracks/paradis-perdu.jpeg"
                  alt="PARADIS PERDU cover"
                  fill
                  className="object-cover transition-all duration-300 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-bold text-base text-center px-4 drop-shadow-lg">PARADIS PERDU</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-red-600 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Merch/Vinyl Section */}
        <div className="mt-24 pt-12 border-t border-gray-800">
          <div className="flex flex-row items-center justify-center gap-4 max-w-4xl mx-auto px-4">
            <div className="w-3/5 flex-shrink-0 flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bDS9UQkrLqw4twzwfZYQ5WItPHkG70.png"
                alt="Pandemonium Vinyl/CD"
                width={300}
                height={300}
                className="object-contain rounded-lg"
              />
            </div>
            <div className="w-2/5 text-left">
              <h2 className="text-base font-bold uppercase tracking-wider text-white">Un Super Vinyle Exclusif</h2>
              <p className="mt-2 text-xs text-gray-400">
                de l'album Pandemonium et tout un blabla sur pourquoi l'acheter. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mt-4">
                <a href="/checkout" className="inline-block transition-transform hover:scale-110">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QoMPcnVTMXdVf22TnF3MWV754q2YGX.png"
                    alt="Buy It button"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
