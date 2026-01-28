import { Coordinate } from "./Apartment";

export type OtherFilter = {
  types: (
    | "apartment"
    | "studio"
    | "duplex"
    | "penthouse"
    | "country_house"
    | "house"
    | "palace"
    | "townhouse"
    | "villa"
    | "country_estate"
    | "chalet"
    | "bungalow"
    | "retail"
    | "office"
    | "industrial"
    | "warehouse"
    | "hotel"
    | "building"
    | "other_commercial"
    | "plot"
    | "room"
    | "parking"
    | "garage"
    | "other"
    | "apartment_building"
    | "office_building"
    | "mix_use_building"
  )[];
  custom_locations: Array<Coordinate[]>;
  location_ids: number[];
  conditions: ("used" | "ruin" | "very-good" | "new" | "other")[];
  statuses: ("active" | "reserved" | "hold" | "sold" | "rented")[];
  alert_date_from: string;
  alert_date_to: string;
  price_from: number;
  price_to: number;
  price_per_sqm_from: number;
  price_per_sqm_to: number;
  bedrooms_from: number;
  bedrooms_to: number;
  total_area_from: number;
  total_area_to: number;
  construction_year_from: number;
  floors: ("no_floor" | "ground" | "middle" | "top")[];
  views: ("water" | "landscape" | "city" | "golf" | "park")[];
  directions: ("north" | "south" | "east" | "west")[];
  characteristics: (
    | "balcony"
    | "elevator"
    | "no_elevator"
    | "garage"
    | "garden"
    | "parking"
    | "storage"
    | "swimming_pool"
    | "terrace"
    | "rental_license"
    | "furniture"
    | "rented_out"
    | "life_annuity"
  )[];
  private: boolean;
  auction: boolean;
  bank: boolean;
  new_development: boolean;
  without_agencies: string[];
  with_agencies: string[];
  listing_agents: string[];
  exclusive: boolean;
  ref_numbers: string[];
  has_phone: boolean;
  bathrooms_from: number;
  bathrooms_to: number;
};

export type Operation =
  | "sale"
  | "sold"
  | "sale_hold"
  | "rent"
  | "rented"
  | "rent_hold";

export type OperationPayload = {
  search_operations: Operation;
};

export type Filter = {
  operation: Operation;
} & Partial<OtherFilter>;

export type FeedPayload = {
  name: string;
  filter: Filter;
};

export type Feed = { id: number; user: string; name: string };

export type FeedResponseOnCreate = Feed & { filter: Filter };

export type QueryFilter = {
  limit: number;
  offset: number;
  order_by: "alert_id" | " created_at" | "updated_at";
  alert_date_from: string;
  alert_date_to: string;
  alert_subtype:
    | "new"
    | "price_up"
    | "price_down"
    | "reserved"
    | "delisted"
    | "sold";
  created_at_from: string;
  created_at_to: string;
};
