
# HqO Map Demo

Resource/Building focused demo, using MapBox and a mock/dummy local api to simulate existing building response data.

## Getting Started

First install dependencies with yarn:

```bash
yarn
```

Then, create a MapBox account and generate a public mapbox access token. create a .env.local file in the root of the project and add the following variable:

```env
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN="enter_your_mapbox_token_here"
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
* I also use a design system utilizing Panda-CSS for zero-runtime css-in-js, and a blend of headless components that tap into the pandacss design system tokens. Here in the demo, I have ArkUI components installed, but the primitives (Flex, Box, VStack, etc. are all just coming from the default PandaCSS patterns).
  * PandaCSS: <https://panda-css.com/>
  * ArkUI: <https://ark-ui.com/>
  * ParkUI (some pre-built helpers blending Panda + Ark): <https://park-ui.com/>
