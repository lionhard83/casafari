import { Coordinate } from "./Apartment";

type OtherFilter = {
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
  custom_location: Coordinate[];
  locationIds: number[];
  conditions: ("used" | "ruin" | "very-good" | "new" | "other")[];
  statuses: ("active" | "reserved")[];
  alert_date_from: string;
  alert_date_to: string;
  priceFrom: number;
  priceTo: number;
  pricePerSqMFrom: number;
  pricePerSqMTo: number;
  bedroomsFrom: number;
  bedroomsTo: number;
  totalAreaFrom: number;
  totalAreaTo: number;
  constructionYearFrom: number;
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
  newDevelopment: boolean;
  withoutAgencies: string[];
  with_agencies: string[];
  listing_agents: string[];
  exclusive: boolean;
  ref_numbers: string[];
  has_phone: boolean;
};

type Filter = {
  operation: "sale" | "rent";
} & Partial<OtherFilter>;

export type FeedPayload = {
  name: string;
  filter: Filter;
};

export type Feed = { id: number; user: string; name: string };

export type FeedResponseOnCreate = Feed & { filter: Filter };
