import { z } from 'zod'

//--------------------------------------
//* Building
//--------------------------------------
export const BuildingFeature = z.object({
  id: z.string(),
  uuid: z.coerce.string(),
  name: z.string(),
  description: z.nullable(z.string()),
  icon: z.string(),
})
export type BuildingFeature = z.infer<typeof BuildingFeature>

export const BuildingPhoto = z.object({
  id: z.string(),
  image_url: z.string(),
  layout_pref: z.string(),
})
export type BuildingPhoto = z.infer<typeof BuildingPhoto>

export const BuildingPhotoFeature = z.object({
  id: z.string(),
  uuid: z.coerce.string(),
  name: z.string(),
  description: z.nullable(z.string()),
  icon: z.string(),
  images: z.array(BuildingPhoto),
})
export type BuildingPhotoFeature = z.infer<typeof BuildingPhotoFeature>

export const Building = z.object({
  id: z.string(),
  uuid: z.coerce.string(),
  slug: z.string(),
  name: z.string(),
  display_title: z.string(),
  display_subtitle: z.string(),
  description: z.string(),
  type: z.coerce.string(),
  image_url: z.string(),
  images: z.array(z.string()),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zipcode: z.string(),
  street_number: z.string(),
  country: z.string(),
  country_code: z.string(),
  capacity: z.coerce.number(),
  square_foot: z.coerce.number(),
  manager_name: z.string(),
  manager_logo: z.string(),
  manager_email: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  features: z.array(BuildingFeature),
  photo_features: z.array(BuildingPhotoFeature),
  href: z.optional(z.string()),
})
export type Building = z.infer<typeof Building>

export const BuildingsApiResponse = z.object({
  data: z.object({
    buildings: z.array(Building),
  }),
})

//--------------------------------------
//* ResourceFeature
//--------------------------------------
const ResourceFeature = z.object({
  id: z.coerce.string(),
  uuid: z.string(),
  resource_id: z.coerce.string(),
  default_type: z.nullable(z.string()),
  name: z.string(),
  description: z.nullable(z.string()),
  icon: z.string(),
})
export type ResourceFeature = z.infer<typeof ResourceFeature>

//--------------------------------------
//* ResourceBuilding
//--------------------------------------
const ResourceBuilding = z.object({
  id: z.coerce.string(),
  resource_id: z.coerce.string(),
  building_uuid: z.string(),
  building: z.object({
    address_1: z.coerce.string(),
    address_2: z.nullable(z.string()),
    city: z.string(),
    state: z.string(),
    zipcode: z.string(),
    street_number: z.string(),
    route: z.string(),
    locality: z.string(),
    administrative_area_1: z.string(),
    administrative_area_2: z.string(),
    postal_code: z.string(),
    country: z.string(),
    country_code: z.string(),
    formatted_address: z.nullable(z.string()),
    latitude: z.string(),
    longitude: z.string(),
    id: z.coerce.string(),
    uuid: z.string(),
    slug: z.string(),
    name: z.string(),
    description: z.string(),
    image_url: z.string(),
    hero_image_url: z.nullable(z.string()),
    square_foot: z.nullable(z.number()),
    region_id: z.nullable(z.number()),
    timezone: z.string(),
    acs_manager_email: z.string(),
    created_at: z.nullable(z.string()),
    updated_at: z.nullable(z.string()),
    deleted_at: z.nullable(z.string()),
    building_population: z.nullable(z.number()),
    test: z.nullable(z.boolean()),
    parent_building_uuid: z.nullable(z.string()),
    portfolio_id: z.nullable(z.number()),
  }),
})
export type ResourceBuilding = z.infer<typeof ResourceBuilding>

//--------------------------------------
//* Resource
//--------------------------------------
export const Resource = z.object({
  id: z.coerce.string(),
  uuid: z.string(),
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  type: z.string(),
  image_url: z.string(),
  hero_image_url: z.nullable(z.string()),
  capacity: z.coerce.number(),
  manager_email: z.string(),
  subtitle: z.string(),
  amenity_description: z.nullable(z.string()),
  supports_multi_day_bookings: z.boolean(),
  created_at: z.nullable(z.string()),
  updated_at: z.nullable(z.string()),
  deleted_at: z.nullable(z.string()),
  resourcesBuildings: z.array(ResourceBuilding),
  features: z.array(ResourceFeature),
})
export type Resource = z.infer<typeof Resource>

export const ResourceApiResponse = z.object({
  data: z.object({
    resources: z.array(Resource),
  }),
})
