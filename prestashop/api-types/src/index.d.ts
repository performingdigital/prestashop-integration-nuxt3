import { PrestashopResponse } from "./types";
export * from './product';
export * from './cart';

export type TODO = any

/**
 * Bootstrap method types
 */
export type BootstrapResponse = PrestashopResponse<{
  banner: any
  currencies: any
  featuredProductsList: any[]
  languages: any
  logo_url: string
  menuItems: MenuItem[]
  numberOfFeaturedProd: number
  slides: any[]
}>

export interface BootstrapRequest {
  menu_with_images: 'single' | 'all';
  iso_currency?: string;
  with_all_images?: 1 | 0;
}

export interface MenuItem {
  id: string
  slug: string
  type: string
  label: string
  url: string
  children: any[]
  image_urls: any[]
  page_identifier: string
  current: boolean
}


/**
 * Login method types
 */
export type LoginResponse = PrestashopResponse<string | {
  cart_count: 0;
  customer_id: '27060';
  message: string;
  session_data: 102629;
  status: 'success';
  user: any
}>

export interface LoginRequest {
  username: string
  password: string
}

/**
 * Register method types
 */
export type RegisterResponse = PrestashopResponse<string | {
  customer_id: string
  message: string
  registered: boolean
  session_data: number
}>

export interface RegisterRequest {
  firstName: string
  lastName: string
  email: string
  password: string
}

/**
 * Register method types
 */
export type GetCategoryResponse = PrestashopResponse<string | {
  categorySlug: string
  filters: {
    [key: string]: string[]
  },
  page: string
}>

export interface GetCategoryRequest {
  firstName: string
  lastName: string
  email: string
  password: string
}

/**
 * Search method types
 */
export type SearchResponse = PrestashopResponse<{
  products: Product[]
}>

export interface Product {
  id_product: string
  id_supplier: string
  id_manufacturer: string
  id_category_default: string
  id_shop_default: string
  id_tax_rules_group: string
  on_sale: string
  online_only: string
  ean13: string
  isbn: string
  upc: string
  mpn: string
  ecotax: string
  quantity: number
  minimal_quantity: string
  low_stock_threshold: any
  low_stock_alert: string
  price: string
  wholesale_price: string
  unity: string
  unit_price_ratio: string
  additional_shipping_cost: string
  reference: string
  supplier_reference: string
  location: string
  width: string
  height: string
  depth: string
  weight: string
  out_of_stock: string
  additional_delivery_times: string
  quantity_discount: string
  customizable: string
  uploadable_files: string
  text_fields: string
  active: string
  redirect_type: string
  id_type_redirected: string
  available_for_order: string
  available_date: any
  show_condition: string
  condition: string
  show_price: string
  indexed: string
  visibility: string
  cache_is_pack: string
  cache_has_attachments: string
  is_virtual: string
  cache_default_attribute: string
  date_add: string
  date_upd: string
  advanced_stock_management: string
  pack_stock_type: string
  state: string
  product_type: string
  id_shop: string
  id_lang: string
  description: string
  description_short: string
  link_rewrite: string
  meta_description: string
  meta_keywords: string
  meta_title: string
  name: string
  available_now: string
  available_later: string
  delivery_in_stock: string
  delivery_out_stock: string
  new: string
  id_image: string
  legend: string
  manufacturer_name: string
  position: string
  product_attribute_minimal_quantity: string
  id_product_attribute: number
  allow_oosp: number
  cover_image_id: string
  category: string
  category_name: string
  link: string
  attribute_price: number
  price_tax_exc: number
  price_without_reduction_without_tax: number
  price_without_reduction: number
  reduction: number
  reduction_without_tax: number
  specific_prices: SpecificPrices
  quantity_all_versions: number
  features: Feature[]
  attachments: any[]
  virtual: number
  pack: number
  packItems: any[]
  nopackprice: number
  customization_required: boolean
  attributes: Attributes
  rate: number
  tax_name: string
  ecotax_rate: number
  unit_price: string
  default_image: DefaultImage
  cover: Cover
  has_discount: boolean
  discount_type: string
  discount_percentage: string
  discount_percentage_absolute: string
  discount_amount: string
  discount_amount_to_display: string
  price_amount: number
  regular_price_amount: number
  regular_price: string
  discount_to_display: string
  unit_price_full: string
  show_availability: boolean
  availability_date: any
  availability_message: string
  availability: string
}

export interface SpecificPrices {
  id_specific_price: string
  id_specific_price_rule: string
  id_cart: string
  id_product: string
  id_shop: string
  id_shop_group: string
  id_currency: string
  id_country: string
  id_group: string
  id_customer: string
  id_product_attribute: string
  price: string
  from_quantity: string
  reduction: string
  reduction_tax: string
  reduction_type: string
  from: string
  to: string
  score: string
}

export interface Feature {
  name: string
  value: string
  id_feature: string
  position: string
}

export interface Attributes {
  "1": N1
  "2": N2
}

export interface N1 {
  id_attribute: string
  id_attribute_group: string
  name: string
  group: string
  reference: string
  ean13: string
  isbn: string
  upc: string
  mpn: string
}

export interface N2 {
  id_attribute: string
  id_attribute_group: string
  name: string
  group: string
  reference: string
  ean13: string
  isbn: string
  upc: string
  mpn: string
}

export interface DefaultImage {
  url: string
  width: number
  height: number
}

export interface Cover {
  url: string
  width: number
  height: number
}
export interface SearchRequest {
  query: string
}

export interface SearchParams {
  input: {
    term: string
    type: 'instant-search'|string,
    categorySlug: string
    filters: {
      [key: string]: string[]
    },
    page: string
  }
}

/**
 * GetProduct method types
 */
export type UpdateCartResponse = PrestashopResponse<{
  
}>
export type UpdateCartRequest = {
  id_product: string|number,
  id_product_attribute: string|number,
  quantity?: string|number,
}