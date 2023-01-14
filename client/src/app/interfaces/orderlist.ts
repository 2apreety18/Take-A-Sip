import { Food } from "./food";
import { User } from "./user";

// id: {
//     type: Number,
// },
// user: {
//     type: Object,
// },
// foods: [foodSchema],
// status: {
//   type: String,
//   default: 'created'
// },
// createdAt: {  
//   type: Date,
//   default: new Date
// },
// updatedAt: {
//   type: Date,
//   default: new Date
// },
// deletedAt: {
//     type: Date,
// },

export interface OrderList {
    _id: string;
    user : User;
    foods : Food[];
    status?: String;
    orderfor: String;
}