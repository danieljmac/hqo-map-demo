'use client'

import { Flex, Box, VStack  } from '@./styled-system/jsx'
import { Text } from '@/components/Text'
import { Building } from '@/lib/schema'
import * as React from 'react'
import { Map, MapRef, Marker, Popup } from 'react-map-gl'
import { useMemo, useRef, useCallback, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { MapPin1 } from '@/components/pages/HomePage/pageComponents/MapPin'
import 'mapbox-gl/dist/mapbox-gl.css'
import './map.css'

export type MapViewProps = {
  buildings: Building[]
}
type MapViewStateProps = {
  center: {
    longitude: number
    latitude: number
  }
  zoom: number
}

export function MapView({ buildings }: MapViewProps) {

  //--------------------------------------
  //* DEFAULT VALUES
  // Basically just set the lat+long center
  // & defaultMapZoom to load the initial
  // map state
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
  // Setup your state vars for the view, plus
  // refs to the Map, as well as refs to keep
  // track of any selected/active markers/pins
  // or popups.
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
  // react-map-gl exposes a bunch more, but here
  // are a couple funcs that we connect to some
  // map hooks
  //--------------------------------------
  const onMove = React.useCallback(({ viewState }) => {
    setViewState(viewState)
  }, [])

  const onMapLoad = useCallback(() => {
    // mapRef.current?.resize()
  }, [])

  //--------------------------------------
  //* MAP MARKERS
  // Iterate through building/resource json data
  // and add a <Marker> for each to the map (i.e. the red Pins)
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
  // Create the custom Popup UI template we'll
  // use to show the card when a location marker/pin
  // is tapped
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
  //* THE ACTUAL COMPONENT
  // Finally we create + render/return the
  // actual Map component
  //--------------------------------------
  return (
    <Box
        w={{ base: '100%', md: '100%', lg: '700px' }}
        h={{ base: '400px', md: '700px', lg: '700px' }}
        borderRadius={'20px'}
        overflow={'hidden'}
        boxShadow={'md'}
      >
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
            height: '100%',
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
