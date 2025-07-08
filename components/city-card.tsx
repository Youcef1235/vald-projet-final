import Image from "next/image"
import Link from "next/link"

type CityCardProps = {
  cityName: string
  imageSrc: string
  href: string
}

export function CityCard({ cityName, imageSrc, href }: CityCardProps) {
  return (
    <Link href={href} className="block relative aspect-[9/16] group">
      <div className="absolute inset-0 bg-black border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-white group-hover:scale-105">
        <div className="relative w-full h-full">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={`Image for ${cityName}`}
            fill
            className="object-contain object-bottom opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <h2
            className="absolute top-0 right-0 bottom-0 flex items-center justify-center text-white font-black text-5xl uppercase tracking-widest"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
          >
            {cityName}
          </h2>
        </div>
      </div>
    </Link>
  )
}
