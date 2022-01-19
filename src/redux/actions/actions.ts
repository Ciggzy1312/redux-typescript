import { ActionType } from "../action-types/action-types"

interface SearchPackageAction {
    type : ActionType.SEARCH_PACKAGES
}

interface SearchPackageSuccessAction {
    type : ActionType.SEARCH_PACKAGES_SUCCESS;
    payload : string[]
}

interface SearchPackageFailureAction {
    type : ActionType.SEARCH_PACKAGES_FAILURE;
    payload : string
}

export type Action = SearchPackageAction | SearchPackageSuccessAction | SearchPackageFailureAction