import {UserTypesActions} from './user.types'

export const setCurrentUser = user =>({
    type : UserTypesActions.SET_CURRENT_USER,
    payload : user
})