import { Context, PrestashopResponse } from '../../types';

export type BootstrapRequest = {
  menu_with_images: 'single' | 'all'
}

export type BootstrapResponse = PrestashopResponse<{
  menuItems:            MenuItem[];
  featuredProductsList: FeaturedProductsList[];
  numberOfFeaturedProd: number;
  banner:               Banner;
  slides:               Slide[];
  currencies:           Currencies;
  languages:            Languages;
  logo_url:             string;
  contact_info:         ContactInfo;
}>

export async function bootstrap(
  context: Context,
  params: BootstrapRequest
): Promise<BootstrapResponse> {
  const { data } = await context.client.get<BootstrapResponse>(
    '/rest/bootstrap',
    { params }
  );

  return data;
}


export interface Banner {
  image_url:   string;
  banner_link: string;
  banner_desc: string;
}

export interface ContactInfo {
  company: string;
  address: Address;
  phone:   boolean;
  fax:     boolean;
  email:   string;
  details: boolean;
}

export interface Address {
  formatted: string;
  address1:  boolean;
  address2:  boolean;
  postcode:  boolean;
  city:      boolean;
  state:     null;
  country:   string;
}

export interface Currencies {
  currencies:       Currencurrency[];
  current_currency: Currencurrency;
}

export interface Currencurrency {
  iso_code:         string;
  numeric_iso_code: string;
  precision:        string;
  conversion_rate:  string;
  unofficial:       string;
  modified:         string;
  name:             string;
  symbol:           string;
  pattern:          { [key: string]: string };
  id:               number;
  sign:             string;
  url:              string;
  current:          boolean;
}

export interface FeaturedProductsList {
  id_product:                          string;
  id_supplier:                         string;
  id_manufacturer:                     string;
  id_category_default:                 string;
  id_shop_default:                     string;
  id_tax_rules_group:                  string;
  on_sale:                             string;
  online_only:                         string;
  ean13:                               string;
  isbn:                                string;
  upc:                                 string;
  mpn:                                 string;
  ecotax:                              string;
  quantity:                            number;
  minimal_quantity:                    string;
  low_stock_threshold:                 null;
  low_stock_alert:                     string;
  price:                               string;
  wholesale_price:                     string;
  unity:                               string;
  unit_price_ratio:                    string;
  additional_shipping_cost:            string;
  reference:                           string;
  supplier_reference:                  string;
  location:                            string;
  width:                               string;
  height:                              string;
  depth:                               string;
  weight:                              string;
  out_of_stock:                        string;
  additional_delivery_times:           string;
  quantity_discount:                   string;
  customizable:                        string;
  uploadable_files:                    string;
  text_fields:                         string;
  active:                              string;
  redirect_type:                       string;
  id_type_redirected:                  string;
  available_for_order:                 string;
  available_date:                      null | string;
  show_condition:                      string;
  condition:                           string;
  show_price:                          string;
  indexed:                             string;
  visibility:                          string;
  cache_is_pack:                       string;
  cache_has_attachments:               string;
  is_virtual:                          string;
  cache_default_attribute:             string;
  date_add:                            Date;
  date_upd:                            Date;
  advanced_stock_management:           string;
  pack_stock_type:                     string;
  state:                               string;
  product_type:                        string;
  id_shop:                             string;
  id_lang:                             string;
  description:                         string;
  description_short:                   string;
  link_rewrite:                        string;
  meta_description:                    string;
  meta_keywords:                       string;
  meta_title:                          string;
  name:                                string;
  available_now:                       string;
  available_later:                     string;
  delivery_in_stock:                   string;
  delivery_out_stock:                  string;
  new:                                 string;
  id_product_attribute:                number | string;
  product_attribute_minimal_quantity:  null | string;
  id_image:                            string;
  legend:                              string;
  manufacturer_name:                   string;
  category_default:                    string;
  orderprice:                          string;
  allow_oosp:                          number;
  cover_image_id:                      string;
  category:                            string;
  category_name:                       string;
  link:                                string;
  attribute_price:                     number;
  price_tax_exc:                       number;
  price_without_reduction_without_tax: number;
  price_without_reduction:             number;
  reduction:                           number;
  reduction_without_tax:               number;
  specific_prices:                     any[] | SpecificPricesClass;
  quantity_all_versions:               number;
  features:                            Feature[];
  attachments:                         any[];
  virtual:                             number;
  pack:                                number;
  packItems:                           any[];
  nopackprice:                         number;
  customization_required:              boolean;
  attributes?:                         { [key: string]: Attribute };
  rate:                                number;
  tax_name:                            string;
  ecotax_rate:                         number;
  unit_price:                          string;
  default_image:                       Cover;
  cover:                               Cover;
  has_discount:                        boolean;
  discount_type:                       null | string;
  discount_percentage:                 null | string;
  discount_percentage_absolute:        null | string;
  discount_amount:                     null | string;
  discount_amount_to_display:          null | string;
  price_amount:                        number;
  regular_price_amount:                number;
  regular_price:                       string;
  discount_to_display:                 null | string;
  unit_price_full:                     string;
  show_availability:                   boolean;
  availability_date:                   null;
  availability_message:                string;
  availability:                        string;
}

export interface Attribute {
  id_attribute:       string;
  id_attribute_group: string;
  name:               string;
  group:              string;
  reference:          string;
  ean13:              string;
  isbn:               string;
  upc:                string;
  mpn:                string;
}

export interface Cover {
  url:    string;
  width:  number;
  height: number;
}

export interface Feature {
  name:       Name;
  value:      string;
  id_feature: string;
  position:   string;
}

export enum Name {
  Composition = "Composition",
  Property = "Property",
}

export interface SpecificPricesClass {
  id_specific_price:      string;
  id_specific_price_rule: string;
  id_cart:                string;
  id_product:             string;
  id_shop:                string;
  id_shop_group:          string;
  id_currency:            string;
  id_country:             string;
  id_group:               string;
  id_customer:            string;
  id_product_attribute:   string;
  price:                  string;
  from_quantity:          string;
  reduction:              string;
  reduction_tax:          string;
  reduction_type:         string;
  from:                   string;
  to:                     string;
  score:                  string;
}

export interface Languages {
  languages:        Language[];
  current_language: CurrentLanguage;
}

export interface CurrentLanguage {
  id_lang:     number;
  name:        string;
  name_simple: string;
  iso_code:    string;
}

export interface Language {
  id_lang:          string;
  name:             string;
  active:           string;
  iso_code:         string;
  language_code:    string;
  locale:           string;
  date_format_lite: string;
  date_format_full: string;
  is_rtl:           string;
  id_shop:          string;
  shops:            Shops;
  name_simple:      string;
}

export interface Shops {
  "1": boolean;
}

export interface MenuItem {
  id:              string;
  slug:            string;
  type:            string;
  label:           string;
  url:             string;
  children:        MenuItem[];
  image_urls:      any[];
  page_identifier: string;
  current:         boolean;
  depth:           number;
  image?:          Image;
}

export interface Image {
  src: string;
}

export interface Slide {
  id_slide:    string;
  position:    string;
  active:      string;
  title:       string;
  url:         string;
  legend:      string;
  description: string;
  image:       string;
  image_url:   string;
  sizes:       Sizes;
  size:        string;
}

export interface Sizes {
  "0":      number;
  "1":      number;
  "2":      number;
  "3":      string;
  bits:     number;
  channels: number;
  mime:     string;
}
