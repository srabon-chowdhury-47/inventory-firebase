export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  description: string;
  quantity: number;
  minStock: number;
  price: number;
  supplier: string;
  category: string;
  tags: string[];
  lastUpdated: string;
  salesData?: { month: string; sales: number }[];
}

export interface Category {
  name: string;
  itemCount: number;
}
