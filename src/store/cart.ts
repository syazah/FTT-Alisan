import { atom } from "recoil";

export interface CartType {
  id: string;
  name: string;
  img: string[];
  description: string;
  cost: number;
  count: number;
  price: number;
}
export const cartState = atom<CartType[]>({
  key: "appCart",
  default: [],
});
