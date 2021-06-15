import * as Actions from 'modules/users/actions';
import {initialState} from 're-ducks/store/initialState';

export const UsersReducer = (state = initialState.users, action)  => {
    switch (action.type) {
        case Actions.FETCH_USERS:
            return {
                ...state,
                users: action.payload
            };

        // 中略

        default:
            return state
    }
};
