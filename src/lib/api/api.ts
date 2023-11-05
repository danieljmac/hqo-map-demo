import { z } from 'zod'
import {
  BuildingsApiResponse,
  ResourceApiResponse,
} from '../schema'

//--------------------------------------
//* RESOURCES
//--------------------------------------
export async function fetchAllResources() {
  const url = 'http://localhost:3000/api/resources'
  const res = await fetch(url, { next: { revalidate: 10 } })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const json = await res.json()
  const zResponse = ResourceApiResponse.parse(json)
  const resources = zResponse.data.resources
  return resources
}

//--------------------------------------
//* BUILDINGS
//--------------------------------------
export async function fetchAllBuildings() {
  const url = 'http://localhost:3000/api/network/buildings'
  const res = await fetch(url, { next: { revalidate: 10 } })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const json = await res.json()
  const zResponse = await BuildingsApiResponse.parseAsync(json)
  const buildings = zResponse.data.buildings
  return buildings
}

export async function fetchBuilding(slug: string) {
  const allBuildings = await fetchAllBuildings()
  return allBuildings.find((i) => i.slug === slug)
}
