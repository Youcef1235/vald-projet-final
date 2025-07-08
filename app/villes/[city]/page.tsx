import Image from "next/image"

const cityData = {
  paris: {
    name: "Paris",
    concerts: [
      { venue: "Opéra GARNIER", date: "12/11/2025" },
      { venue: "La BOULE NOIRE", date: "13/11/2025" },
      { venue: "Opéra GARNIER", date: "13/04/2026" },
      { venue: "ZENITH Paris", date: "14/04/2026" },
    ],
    description: [
      "Retrouver VALD et son album PANDEMONIUM dans une tournée à travers l'Europe.",
      "De Londres à Amsterdam en passant par Paris et Bruxelles, vous retrouverez alors Valentin sur 4 dates dans chaques villes.",
    ],
    program: [
      "Un pré-show de Folie",
      "Des invités exclusif à certaines dates",
      "Des remixs de la version RELOADED en live",
    ],
    mainImage: "/images/cities/paris-skulls.png",
  },
  // On peut ajouter d'autres villes ici plus tard
}

// Composant pour la bordure custom des dates
function ConcertDate({ venue, date }: { venue: string; date: string }) {
  return (
    <div className="relative p-4 font-serif">
      {/* Bordures custom */}
      <div className="absolute top-0 left-0 h-1/2 w-px bg-white/50" />
      <div className="absolute top-0 left-0 w-1/4 h-px bg-white/50" />
      <div className="absolute top-0 right-0 h-1/2 w-px bg-white/50" />
      <div className="absolute top-0 right-0 w-1/4 h-px bg-white/50" />
      <div className="absolute bottom-0 left-0 h-1/2 w-px bg-white/50" />
      <div className="absolute bottom-0 left-0 w-1/4 h-px bg-white/50" />
      <div className="absolute bottom-0 right-0 h-1/2 w-px bg-white/50" />
      <div className="absolute bottom-0 right-0 w-1/4 h-px bg-white/50" />

      <div className="flex justify-between items-center text-sm">
        <span className="tracking-wider">{venue}</span>
        <span className="font-mono text-xs">{date}</span>
      </div>
    </div>
  )
}

export default function CityPage({ params }: { params: { city: string } }) {
  // @ts-ignore
  const data = cityData[params.city]

  if (!data) {
    return <div className="text-white text-center py-20">Ville non trouvée</div>
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex flex-row">
        {/* Colonne de gauche : Contenu texte */}
        <div className="w-1/2 pl-4 pr-2 py-12 space-y-12">
          {/* Section 1: Liste des concerts */}
          <div className="space-y-4">
            {data.concerts.map((concert, index) => (
              <ConcertDate key={index} venue={concert.venue} date={concert.date} />
            ))}
          </div>

          {/* Section 2: Texte descriptif */}
          <div className="space-y-4 text-sm font-serif text-gray-300 leading-relaxed">
            {data.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div>
              <p className="mb-2">Avec au programme :</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                {data.program.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Colonne de droite : Illustration */}
        <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center">
          <div className="w-full h-full relative">
            <Image
              src={data.mainImage || "/placeholder.svg"}
              alt={`Illustration pour ${data.name}`}
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
