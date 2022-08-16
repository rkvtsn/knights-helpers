import { CardActionProps } from "./CardAction/types";
import { CardPlaceProps } from "./CardPlace/types";

export interface CardLocationProps {
  id: number;
  title: string;
  description: string;
  actions: CardActionProps[];
  places: (CardPlaceProps | null)[];
}
