import { CityCard } from "@/components/city-card"
import Image from "next/image"

export default function VillesPage() {
  const cities = [
    {
      name: "Paris",
      image: "/images/villes/paris-crane.png",
      href: "/villes/paris",
    },
    {
      name: "Amsterdam",
      image: "/images/villes/amsterdam-crane.png",
      href: "/villes/amsterdam",
    },
    {
      name: "Bruxelles",
      image: "/images/villes/bruxelles-crane.png",
      href: "/villes/bruxelles",
    },
    {
      name: "Londres",
      image: "/images/villes/londres-crane.png",
      href: "/villes/londres",
    },
  ]

  return (
    // On enlève bg-black ici, car le body l'a déjà.
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* On met l'image à z-0, au niveau de base du conteneur */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/villes/red-smoke-background.png"
          alt="Fond de fumée rouge"
          fill
          className="object-cover opacity-40 blur-md"
        />
      </div>

      {/* Le contenu reste au-dessus avec z-10 */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {cities.map((city) => (
            <CityCard key={city.name} cityName={city.name} imageSrc={city.image} href={city.href} />
          ))}
        </div>
      </div>
    </div>
  )
}
