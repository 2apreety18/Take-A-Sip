import { SelectedFoodAttribute } from "./selectedFoodAttribute";
import { Flavor } from "./flavor";

export interface Food {
    id: number;
    name: string;
    imageUrls: string[];
    flavors: Flavor[];
    selectedFlavor: string | undefined;
    qty: number;
    note?: string;
}
