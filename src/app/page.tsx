import { HomePage } from '@/components/pages/HomePage'
import { fetchAllBuildings } from '@/lib/api/api'

export default async function Home() {
  const buildings = await fetchAllBuildings()
  return (
    <HomePage buildings={buildings} />
  )
}