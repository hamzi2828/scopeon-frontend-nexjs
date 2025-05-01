export interface Listing {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  highlights?: string;
  amenities?: string[];
  photos?: string[];
  isFeature?: boolean;
  createdAt?: string;
  updatedAt?: string;
  openStatus?: string;
  closeStatus?: string;
  address?: string;
  website?: string;
  phone?: string;
  rating?: number;
  imageUrl?: string;
}
