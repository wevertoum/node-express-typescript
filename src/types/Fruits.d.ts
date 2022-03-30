export namespace Models {
  interface DaySale {
    day: string;
    products: Product[];
  }

  interface Product {
    name: string;
    price: number;
    quantity: number;
  }
} 