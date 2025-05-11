// Base types
interface BaseEntity {
  id: number;
  created_at: number;
  updated_at?: number;
}

interface City {
  id: number;
  name: string;
  lat: string;
  long: string;
  country_id: number;
}

interface District {
  id: number;
  city_id: number;
  name: string;
  lat: string;
  long: string;
}

// User related types
interface User extends BaseEntity {
  tckn: string | null;
  name: string;
  surname: string;
  email: string;
  phone: string | null;
  type: number;
  type_value: string;
  status: number;
  status_value: string;
  phone_verified_at: number | null;
  email_verified_at: number | null;
  avatar: string | null;
  creator: null;
}

// Address related types
interface Address extends BaseEntity {
  name: string;
  type: number;
  type_value: string;
  city: City;
  district: District;
  neighborhood: null;
  address: string;
  building_number: null;
  for_directions: null;
  lat: string;
  lng: string;
  responsible: string;
  responsible_phone: string;
  responsible_title: string;
  delivery_address: boolean;
}

// Shipper related types
interface ShipperSettings {
  type: number;
  tag: null;
  billing_cycle: number;
  monthly_transport: null;
  use_balance: boolean;
  use_negative_balance: boolean;
  negative_balance: null;
  settings: null;
  tax_office: {
    id: number;
    code: number;
    name: string;
    city: City;
    created_at: Date;
    updated_at: Date;
  };
  head_office_city: null;
  region_fuel_price: string;
  region_fuel_price_currency: string;
  creator: User;
  profit_margin: string;
  created_at: number;
}

interface Shipper extends BaseEntity {
  name: string;
  tax_number: string;
  tax_office: string | null;
  sector: {
    id: number;
    name: string;
  };
  settings: ShipperSettings;
  phone: string;
}

// Shipment detail types
interface ShipmentDetail extends BaseEntity {
  shipment_id: number;
  vehicle_type: number;
  vehicle_type_value: string;
  group_type: number;
  group_type_value: string;
  trailer_type: number;
  trailer_type_value: string;
  base_type: number;
  base_type_value: string;
  tonnage: {
    min: number;
    max: number;
  };
  type_of_goods: string;
  way_of_loading: number;
  way_of_loading_value: string;
  commodity_avg_value: string;
  package_type: number;
  package_type_value: string;
  distance: number;
  toll: string;
  fuel_liter: string;
  departure_km: null;
  delivery_km: null;
  empty_km: null;
}

// Status related types
interface ShipmentStatus extends BaseEntity {
  /**
   * 0: pending
   * 1: in_progress
   * 2: completed
   * 3: cancelled
   */
  type: number;
  type_value: string;
}

// Main Shipment interface
export interface Shipment extends BaseEntity {
  shipper: Shipper;
  carrier: null;
  driver: User | null;
  vehicle: null;
  code: string;
  trailer: null;
  departure_address: Address;
  delivery_address: Address;
  pick_up_date: number;
  time_interval: {
    start: string;
    end: string;
  };
  delivery_date: null;
  delivery_time: null;
  invoice_ready: boolean;
  type: number;
  type_value: string;
  status: number;
  is_invoice_created: boolean;
  latest_status: ShipmentStatus;
  planned_transport: null;
  payment_type: null;
  payment_status: null;
  carrier_invoice_upload: boolean;
  carrier_payment: boolean;
  carrier_payment_status: number;
  carrier_payment_status_value: string;
  shipment_detail: ShipmentDetail;
  creator: User;
  driver_last_location: null;
  price: number | null;
  view_count: number | null;
  viewer_count: number | null;
  carrier_payment_receipt_upload: boolean;
  load_reception: number | null;
  load_reception_value: number | null;
  boosted: boolean;
}
