"use client"

import { useState } from "react"
import Image from "next/image"
import { Lock } from "lucide-react"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Fond de fumée fixé à l'écran pour couvrir aussi le footer */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src="/images/checkout-smoke-background.png"
          alt="Fond de fumée"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Contenu du formulaire */}
      <div className="relative z-10 max-w-sm mx-auto px-4 py-12 font-serif">
        <div className="space-y-8">
          {/* Prix */}
          <div className="border border-white rounded-lg text-center py-3">
            <span className="text-xl tracking-widest">PRIX</span>
          </div>

          {/* Sélecteur de paiement */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <span>Choisir le mode de paiement</span>
              <Lock className="h-4 w-4" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setPaymentMethod("credit-card")}
                className={`py-3 border rounded-lg transition-colors ${
                  paymentMethod === "credit-card" ? "border-white text-white" : "border-gray-600 text-gray-400"
                }`}
              >
                Carte de crédit
              </button>
              <button
                onClick={() => setPaymentMethod("paypal")}
                className={`py-3 border rounded-lg transition-colors ${
                  paymentMethod === "paypal" ? "border-white text-white" : "border-gray-600 text-gray-400"
                }`}
              >
                Paypal
              </button>
            </div>
          </div>

          {/* Formulaire de carte de crédit */}
          {paymentMethod === "credit-card" && (
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="card-number" className="text-sm text-gray-400">
                  Numéro de carte
                </label>
                <input
                  id="card-number"
                  type="text"
                  className="w-full bg-transparent border border-white rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="expiry-date" className="text-sm text-gray-400">
                    Date d'expiration
                  </label>
                  <input
                    id="expiry-date"
                    type="text"
                    placeholder="MM/AA"
                    className="w-full bg-transparent border border-white rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="cvv" className="text-sm text-gray-400">
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="text"
                    className="w-full bg-transparent border border-white rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-gray-400">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full bg-transparent border border-white rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>
            </form>
          )}

          {/* Message pour Paypal */}
          {paymentMethod === "paypal" && (
            <div className="text-center border border-dashed border-gray-600 rounded-lg py-12">
              <p>Vous serez redirigé vers Paypal.</p>
            </div>
          )}

          {/* Boutons d'action */}
          <div className="grid grid-cols-2 gap-4">
            <button className="py-3 border border-white rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
              PAYER
            </button>
            <button className="py-3 border border-gray-600 text-gray-400 rounded-lg hover:border-white hover:text-white transition-colors">
              ANNULER
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
