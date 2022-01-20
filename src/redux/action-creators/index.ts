import axios from "axios"
import { Dispatch } from "redux"
import { Action } from "../actions"
import { ActionType } from "../action-types"

export const searchPackage = (packageName : string) => {
    return async (dispatch : Dispatch<Action>) => {
        dispatch({type: ActionType.SEARCH_PACKAGES })

        try {
            const { data } = await axios.get("https://registry.npmjs.org/-/v1/search",{
                params : {
                    text : packageName
                }
            })

            const names = data.objects.map((result:any)=>(
                result.package.name
            ))

            dispatch({ 
                type: ActionType.SEARCH_PACKAGES_SUCCESS,
                payload : names
            })
        } catch (error:any) {
            dispatch({ 
                type: ActionType.SEARCH_PACKAGES_FAILURE,
                payload : error.message
            })
        }
    }
}