import { httpPost } from "../../services/httpServices";
import {
  signInUrl
} from "../../configurations/urlConfigurations";
import {
  signInActionTypes
} from "../actionTypes/actionTypes";

//network requests here

export const signInAction = (data) => {
  return httpPost({
    url: signInUrl,
    actionTypes: signInActionTypes,
    data
  })
}
