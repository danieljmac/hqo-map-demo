import path from 'path'
import { promises as fs } from 'fs'

export async function getDummyFileContents(fileName: string) {
  const jsonDirectory = path.join(process.cwd(), 'src/app/api/_dummydata')
  const fileContents = await fs.readFile(jsonDirectory + '/' + fileName, 'utf8')
  //Return the content of the data file in json format
  // res.status(200).json(fileContents)
  return JSON.parse(fileContents)
}
