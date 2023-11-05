import { getDummyFileContents } from '@/app/api/_dummydata/dummydata'

export async function GET() {
  const data = await getDummyFileContents('/buildings.json')

  return Response.json({ ...data })
}
