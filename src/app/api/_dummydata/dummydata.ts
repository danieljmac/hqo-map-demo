import path from 'path'
import { promises as fs } from 'fs'

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'lib/dummydata')
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + '/dummy-resources.json',
    'utf8'
  )
  //Return the content of the data file in json format
  res.status(200).json(fileContents)
}

export async function getDummyFileContents(fileName: string) {
  const jsonDirectory = path.join(process.cwd(), 'src/app/api/_dummydata')
  const fileContents = await fs.readFile(jsonDirectory + '/' + fileName, 'utf8')
  //Return the content of the data file in json format
  // res.status(200).json(fileContents)
  return JSON.parse(fileContents)
}

export async function fetchResources() {
  const jsonDirectory = path.join(process.cwd(), 'src/lib/dummydata')
  const fileContents = await fs.readFile(
    jsonDirectory + '/dummy-resources.json',
    'utf8'
  )
  //Return the content of the data file in json format
  // res.status(200).json(fileContents)
  return JSON.parse(fileContents)
}

export async function fetchDummyResources() {
  // const url =
  //   'https://my-json-server.typicode.com/danieljmac/dummyapi1/resources'

  const url =
    'https://f55707d3-3c23-43fa-8dd7-a9b7e3fbc3c1.mock.pstmn.io/resources'

  // const res = await fetch(url)
  const res = await fetch(url, { next: { revalidate: 10 } })

  // console.log('poop:------------------')
  // console.log(res)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // console.dir('wooof: ' + res.json())

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  // console.log('dump:------------------: ')
  // console.dir(res.text)
  return res.json()
  const json = await res.json()
  return json
}

export const dummyResourceFeatureTags = [
  {
    label: 'Wifi',
  },
  {
    label: 'Projector',
  },
  {
    label: 'Web Cam',
  },
  {
    label: 'Landline',
  },
  {
    label: 'Sound Proof',
  },
  {
    label: 'Ethernet Port',
  },
  {
    label: 'Wifi',
  },
  {
    label: 'Projector',
  },
]
