import { StaticImageData } from "next/image";

export interface INavOptions {
  id: string;
  icon?: any;
  name: string;
  path: string;
  submenu?: INavOptions[];
}

export interface IGallery {
  id: number;
  label: string;
  img: StaticImageData | string;
}
