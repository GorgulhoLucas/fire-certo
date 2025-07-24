"use client"

import { useEffect, useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

interface Revenda {
  id: number
  nome: string
  endereco: string
  cidade: string
  estado: string
  tipo: string
  telefone: string
  lat: number
  lng: number
}

interface MapaRevendasProps {
  revendas: Revenda[]
}

export default function MapaRevendas({ revendas }: MapaRevendasProps) {
  const mapRef = useRef<any>(null)

  // Centralizar no primeiro resultado ou fallback
  const center: [number, number] = revendas.length > 0 ? [revendas[0].lat, revendas[0].lng] : [-22.5, -45.5]

  useEffect(() => {
    if (mapRef.current && revendas.length > 0) {
      const map = mapRef.current
      const bounds = L.latLngBounds(revendas.map((r) => [r.lat, r.lng]))
      map.fitBounds(bounds, { padding: [20, 20] })
    }
  }, [revendas])

  return (
    <div className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
      <MapContainer center={center} zoom={10} style={{ height: "100%", width: "100%" }} ref={mapRef} className="z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {revendas.map((revenda) => (
          <Marker key={revenda.id} position={[revenda.lat, revenda.lng]}>
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-gray-900 mb-2">{revenda.nome}</h3>
                <p className="text-sm text-gray-600 mb-1">{revenda.endereco}</p>
                <p className="text-sm text-gray-600 mb-1">
                  {revenda.cidade} - {revenda.estado}
                </p>
                <p className="text-sm font-medium text-red-600 mb-2">Tipo: {revenda.tipo}</p>
                <a href={`tel:${revenda.telefone}`} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  {revenda.telefone}
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
