export interface OpenCageApiResponse {
  documentation: string;
  licenses: License[];
  rate: Rate;
  results: Result[];
  status: Status;
  stay_informed: StayInformed;
  thanks: string;
  timestamp: Timestamp;
  total_results: number;
}


export interface License {
  name: string;
  url: string;
}

export interface Rate {
  limit: number;
  remaining: number;
  reset: number;
}

export interface Northeast {
  lat: number;
  lng: number;
}

export interface Southwest {
  lat: number;
  lng: number;
}

export interface Bounds {
  northeast: Northeast;
  southwest: Southwest;
}

export interface Components {
  'ISO_3166-1_alpha-2': string;
  'ISO_3166-1_alpha-3': string;
  _type: string;
  city: string;
  city_district: string;
  continent: string;
  country: string;
  country_code: string;
  county: string;
  house_number: string;
  neighbourhood: string;
  political_union: string;
  postcode: string;
  road: string;
  state: string;
  state_district: string;
  suburb: string;
}

export interface Geometry {
  lat: number;
  lng: number;
}

export interface Result {
  bounds: Bounds;
  components: Components;
  confidence: number;
  formatted: string;
  geometry: Geometry;
}

export interface Status {
  code: number;
  message: string;
}

export interface StayInformed {
  blog: string;
  twitter: string;
}

export interface Timestamp {
  created_http: string;
  created_unix: number;
}
