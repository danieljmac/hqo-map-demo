import { Box, Flex, VStack } from "@./styled-system/jsx"
import { Text } from "@/components/Text"
import { Building } from "@/lib/schema"
import { MapView } from "./pageComponents/MapView"
import build from "next/dist/build"

export type HomePageProps = {
    buildings: Building[]
  }

  export async function HomePage({ buildings }: HomePageProps) {
    return (
      <Flex
        direction={'column'}
        w={'full'}
        pt={'50px'}
        px={{base: '15px', md: '20px', lg: '0px'}}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'20px'}
      >
        <VStack gap={'0px'}>
          <Text textStyle={'xl'} fontWeight={'700'} w={'fit-content'} flex={0}>
            MapBox Demo
          </Text>
          <Text textStyle={'lg'} fontWeight={'300'} w={'fit-content'} flex={0}>
            With Building Resource data from local mock api
          </Text>
        </VStack>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          w={{base: 'full', md: 'full', lg: 'fit-content'}}
        >
          <MapView buildings={buildings} />
        </Flex>
      </Flex>
    )
  }