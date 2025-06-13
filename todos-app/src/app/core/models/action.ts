import { ActionTypes } from "../enums/action-types";

export interface Action {
    type:ActionTypes,
    payload?:any

}
