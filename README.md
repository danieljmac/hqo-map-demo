
# HqO Map Demo

Resource/Building focused demo, using MapBox and a mock/dummy local api to simulate existing building response data.

## Getting Started

First install dependencies with yarn:

```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Where to find the relevant code?

/src/app/page.tsx loads the main page/demo component, which is located in /src/components/pages/HomePage. Inside this pages components dir, is the main page index.tsx, and also grouped here are the pages subcomponents inside .../pageComponents. Inside the .../pageComponents, you can find the MapView.tsx file, which has all the code to render the map

## Other relevant info

* This uses MapBox to generate the map. IMO, way better than google maps.
* Also uses react-map-gl, for convenience React focused implementation + usage of Mapbox GL (<https://github.com/visgl/react-map-gl>)
