import { HomePage } from '@/components/pages/HomePage'
import { fetchAllBuildings, fetchAllResources } from '@/lib/api/api'

export default async function Home() {
  const buildings = await fetchAllBuildings()
  // const resources = await fetchAllResources()

  return (
    <HomePage buildings={buildings} />
    // <HomePage resources={resources} />
  )
}
