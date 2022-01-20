import { ActionType } from "../action-types/action-types"
import { Action } from "../actions/actions"

interface PackageState {
    data : string[];
    loading : boolean;
    error : string | null
}

const initialState = {
    data : [],
    loading : false,
    error : null
}

const reducer = (state : PackageState = initialState, action : Action) : PackageState=>{
    switch(action.type){
        case ActionType.SEARCH_PACKAGES :
            return {
                data : [],
                loading: true,
                error : null
            }

            case ActionType.SEARCH_PACKAGES_SUCCESS :
                return {
                    data : action.payload,
                    loading: false,
                    error : null
                }

            case ActionType.SEARCH_PACKAGES_FAILURE :
                return {
                    data : [],
                    loading: false,
                    error : action.payload
                }

            default:
                return state
    }
}

export default reducer