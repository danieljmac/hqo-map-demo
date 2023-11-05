'use client'

import { Flex, Box, VStack  } from '@./styled-system/jsx'
import { Text } from '@/components/Text'
import { Building, NetworkCityZone } from '@/lib/schema'
import * as React from 'react'
import { Map, MapRef, Marker, Popup } from 'react-map-gl'
import { useMemo, useRef, useCallback, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { MapPin1 } from '@/components/pages/HomePage/pageComponents/MapPin'
import 'mapbox-gl/dist/mapbox-gl.css'
import './map.css'

export type ZoneMapProps = {
  buildings: Building[]
}
type MapViewStateProps = {
  center: {
    longitude: number
    latitude: number
  }
  zoom: number
}

export function MapView({ buildings }: ZoneMapProps) {
  // const buildings = zone.buildings

  // if (buildings.length == 0) return <></>

  //--------------------------------------
  //* DEFAULT VALUES
  //--------------------------------------
  const defaultZoom = 13
  const defaultMapProps: MapViewStateProps = {
    center: {
      longitude: Number(buildings.at(0)?.longitude),
      latitude: Number(buildings.at(0)?.latitude),
    },
    zoom: defaultZoom,
  }

  //--------------------------------------
  //* STATE VARS & REFS
  //--------------------------------------
  const [viewState, setViewState] = React.useState({
    longitude: defaultMapProps.center.longitude,
    latitude: defaultMapProps.center.latitude,
    zoom: defaultMapProps.zoom,
  })

  const markerRef = useRef<mapboxgl.Marker>(null)
  const mapRef = useRef<MapRef>(null)
  const [popupInfo, setPopupInfo] = useState<Building | null>(null)

  //--------------------------------------
  //* MAP HOOKS
  //--------------------------------------
  const onMove = React.useCallback(({ viewState }) => {
    setViewState(viewState)
  }, [])

  const onMapLoad = useCallback(() => {
    // mapRef.current?.resize()
  }, [])

  //--------------------------------------
  //* MAP MARKERS
  //--------------------------------------
  const organizedMapMarkers = () => {
    const markers = buildings.map((item) => {
      return (
        <Marker
          key={item.id}
          longitude={Number(item.longitude)}
          latitude={Number(item.latitude)}
          ref={markerRef}
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation()
            setPopupInfo(item)
          }}
        >
          <MapPin1 size={10} />
        </Marker>
      )
    })
    return markers
  }

  //--------------------------------------
  //* POPUPS
  //--------------------------------------
  function PopupElement({ popupInfo }) {
    return (
      <Popup
        longitude={Number(popupInfo.longitude)}
        latitude={Number(popupInfo.latitude)}
        onClose={() => setPopupInfo(null)}
        anchor="bottom"
        maxWidth="full"
        offset={20}
        closeButton={false}
      >
        <VStack gap={0} w="300px" bg="white" p={0}>
          <Text>{popupInfo.name}</Text>
          <Text>{popupInfo.address}</Text>
        </VStack>
      </Popup>
    )
  }

  //--------------------------------------
  //* THE COMPONENT
  //--------------------------------------
  return (
    <Box w={'700px'} borderRadius={'20px'} overflow={'hidden'}>
      <Map
        {...viewState}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        ref={mapRef}
        onMove={onMove}
        onDragEnd={onMapLoad}
        onLoad={onMapLoad}
        style={{
          display: 'inline-block',
          width: '100%',
          // borderRadius: '10px',
          // WebkitBorderRadius: '10px',
          borderCollapse: 'separate',
          overflow: 'hidden',
          WebkitMaskImage:
            'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)',
        }}
      >
        {organizedMapMarkers()}
        {popupInfo && <PopupElement popupInfo={popupInfo} />}
      </Map>
    </Box>
  )
}
