'use client'

import * as React from 'react'
import { Circle } from '@./styled-system/jsx'
import { Box, VStack } from '@./styled-system/jsx'
import { Icon } from '@/components/Icon'

type MapPinProps = {
  size: number
}
export function MapPin1({ size }: MapPinProps) {
  const bottomOffset = -(size + size * 0.17)
  const bottomOffsetInPx = `${bottomOffset}px`
  return (
    <VStack gap={0}>
      <Icon
        icon="location-dot"
        iconStyle="solid"
        fontSize={'28px'}
        color="red"
        zIndex={100}
      />
      <Circle
        size={'22px'}
        transform="scale(1, 0.3)"
        bg={'black.a6'}
        filter="blur(6px)"
        zIndex={90}
        position="absolute"
        bottom={'-12px'}
      />
    </VStack>
  )
}
