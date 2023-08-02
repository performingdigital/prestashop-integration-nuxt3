export type PsProduct = {
  id: string;
  name: string;
  slug: string;
  regularPrice: number;
  discountPrice: number;
  coverImageSmall: string;
  coverImageMedium: string;
  coverImageLarge: string;
  images: any[];
  quantity: number;
  description: any;
  shortDescription: any;
  brand: string;
  category: string;
  breadcrumb: Array<any>;
  productInfo: any;
}
