type Locate = {
  location_id: number;
  name: string;
  administrative_level: string;
  zip_codes: string[];
};

export type Coordinate = {
  latitude: number;
  longitude: number;
};

type ContactsInfo = {
  name: string | null;
  email: string | null;
  phone: string;
};

type Features = {
  floor: string;
  orientation: string | null;
  views: string[];
  directions: string[];
  characteristics: string[];
};

type Result = {
  alert_id: number;
  listing_id: number;
  ref: string;
  alert_type: string;
  alert_subtype: string;
  old_value: string;
  new_value: string;
  alert_date: string;
  property_url: string;
  listing_url: string;
  property_id: number;
  type: string;
  type_group: string;
  location: Locate;
  locations_structure: Locate[];
  address: string;
  coordinates: Coordinate;
  condition: string;
  contacts_info: ContactsInfo;
  total_area: number;
  living_area: number;
  plot_area: number;
  terrace_area: number;
  bedrooms: number;
  rooms: number;
  bathrooms: number;
  features: Features;
  construction_year: number;
  operations: string[];
  is_bank_property: boolean;
  is_auction_property: boolean;
  is_new_development_property: boolean;
  is_private_property: boolean;
  sale_status: string;
  sale_currency: string;
  sale_price_base: number;
  sale_price: number;
  sale_price_per_sqm: number;
  rent_status: string;
  rent_currency: string;
  rent_price_base: number;
  rent_price: number;
  rent_price_per_sqm: number;
  rent_period: string;
  agency: string;
  agent: string;
  source_name: string;
  description: string;
  thumbnails: string[];
  pictures: string[];
  energy_certificate: string;
};

export type Data = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
};
