import { Food } from "./food";
import { User } from "./user";

export interface OrderList {
    _id: string;
    user : User;
    foods : Food[];
    status?: String;
    orderfor: String;
    room: String;
}