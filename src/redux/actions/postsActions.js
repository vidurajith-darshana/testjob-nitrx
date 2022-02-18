import {httpGet} from "../../services/httpServices";
import {postsUrl} from "../../configurations/urlConfigurations";
import {postsActionTypes} from "../actionTypes/actionTypes";

//network requests here

export const getAllPosts = () => {
    return httpGet({
        isAuth: true,
        url: postsUrl,
        actionTypes: postsActionTypes
    })
}
