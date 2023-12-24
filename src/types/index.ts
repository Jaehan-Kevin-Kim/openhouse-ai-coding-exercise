// export enum HomeType {
//     House = "House",
//     Townhome = "Townhome",
//     Duplex = "Duplex",
//     Condo = "Condo"
// }

export type HomeType = "House" | "Townhouse" | "Duplex" | "Conde";

export interface Community {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
}

export interface Home {
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: HomeType;
}
