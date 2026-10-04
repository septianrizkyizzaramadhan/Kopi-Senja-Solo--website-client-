import { siteConfig } from '../data/site.js'

export function waLink(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
}

export function mapsEmbed(query = siteConfig.mapsQuery) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
}

export function mapsLink(query = siteConfig.mapsQuery) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}