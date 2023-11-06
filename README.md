
# HqO Map Demo

Resource/Building focused demo, using MapBox and a mock/dummy local api to simulate existing building response data.

**NOTE TO TEAM:**
Like 99% of relevant code is in the [/src/components/pages/HomePage/pageComponents/MapView.tsx](src/components/pages/HomePage/pageComponents/MapView.tsx) file. That's where you'll see the demo implementation of Mapbox + plotting building/resource json data as map pin Markers + implementing a customized Map Popup on MARKER click.

Additionally, in the [/src/components](/src/components) directory, as well as in the [/src/components/pages/HomePage/index.tsx](/src/components/pages/HomePage/index.tsx) file, you'll see some basic implementation of the design-system/UI/UX patterns I tend to use. Notes below in the "Other relevant info" section of this readme, but tldr = I use a design system architecture of zero-runtime css-in-jss tokens, then build a collection of headless components that use those tokens. PandaCSS is awesome here, and all the primitives in these demo files are just stock/default Panda "Patterns" (Flex, Box, VStack, etc).

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

The demo app's root [page.tsx](/src/app/page.tsx) renders the main page file and components, which are located in the [/src/components/pages/HomePage](/src/components/pages/HomePage/) directory. This bundled page component directory holds the main [index.tsx](/src/components/pages/HomePage/index.tsx) file which builds the HomePage element. Also grouped here are the page's subcomponents, which are located inside [.../pageComponents](src/components/pages/HomePage/pageComponents). Inside this [.../pageComponents](src/components/pages/HomePage/pageComponents) directory, you can find the [MapView.tsx](src/components/pages/HomePage/pageComponents/MapView.tsx) file, which has all the code to render the map

## Other relevant info

* This uses MapBox to generate the map. IMO, way better than google maps.
* Also uses react-map-gl, for convenience React focused implementation + usage of Mapbox GL (<https://github.com/visgl/react-map-gl>)
* I also use a design system utilizing Panda-CSS for zero-runtime css-in-js, and a blend of headless components that tap into the pandacss design system tokens. Here in the demo, I have ArkUI components installed, but the primitives (Flex, Box, VStack, etc. are all just coming from the default PandaCSS patterns).

## Dependencies (Map Related)

* [mapbox-gl](https://docs.mapbox.com/mapbox-gl-js/guides/): Main mapbox js repo
* [react-map-gl](https://github.com/visgl/react-map-gl): Lib that already has a lot of mapbox wrappers for react built and ready to use.

## Dependencies (Design System & Styling)

* [PandaCSS](https://panda-css.com/): Zero Runtime css-in-js. I use Panda to build all the style tokens of a project's "design system". The style tokens can be used anywhere, and the zero-runtime ensures usability and design consistency inside NextJS 13's new App Directory architecture and React Server Components.
* [ArkUI](https://ark-ui.com/): I use these for now as some of the UI components. But the real power and beauty of the design system architecture I use is that this "components" piece is totally headless. The ArkUI components I use are function as headless functional UI components, and are styled 100% by the tokens and "recipes" that get defined with PandaCSS. So as more component libraries eventually adapt to the new NextJS 13 + RSC arch, the "components" piece of the design system can super easily get swapped out for other libs, with minimal work to just style new libs using the PandaCSS tokens + recipes.
* [ParkUI](https://park-ui.com/): I also use this lib to make some of the headless Ark abstractions more fluid. ParkUI is basically a version of ArkUI that provides some streamline helpers to more easily style everything with Panda tokens & recipes. It's maintained by the actual Chakra UI folks whole built/maintain both Panda and Ark.
* [Radix Primitives](https://www.radix-ui.com/primitives): I don't use any Radix components in this demo project, but I do in most of the actual projects I'm working on. And because this overall design-system architecture is headless, it's super easy to pick & choose/blend componets from both ArkUI and Radix, and have ALL styling coming from PandaCSS as the single source of design truth. And with the help of [Shadow Panda](https://shadow-panda.dev/), you don't even need to install central Radix as a proj dependency... I just add specific individual components I want/need to use.
