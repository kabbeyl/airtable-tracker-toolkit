import { boundingBox } from "../toolkit.config";

/**
 * 
 * @param {*} address 
 */
export async function geocodeAddress(address='123 Main Street') {

  let urlAddress = encodeURIComponent(address)
  let urlBbox = encodeURIComponent(boundingBox.join(","))

  let geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${urlAddress}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}&bbox=${urlBbox}`
  let response = await fetch(geocodeUrl)

  let parsed = await response.json()

  return parsed.features[0].geometry

}