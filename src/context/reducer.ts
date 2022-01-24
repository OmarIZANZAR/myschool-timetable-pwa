import * as Actions from './actions'
import { initialState } from './store';
import { ActionInterface, StateInterface } from '../utils/interfaces'

function reducer ( state: StateInterface = initialState, action: ActionInterface) : any {
    switch(action.type){
        case Actions.INITIATE_STATE : return action.payload;

        case Actions.NEXT_WEEK:
            return {
                ...state,
                current_week: state.current_week + 1,
                // current_week_start: '03 january',
                // current_week_end: '07 january',
            };

        case Actions.PREV_WEEK:
            return {
                ...state,
                current_week: state.current_week > 1 ? state.current_week - 1 : state.current_week,
                // current_week_start: '03 january',
                // current_week_end: '07 january',
            };

        case Actions.SET_DAYS_PLANS: 
            return {
                ...state,
                days_plans: action.payload
            };

        case Actions.SET_CURRENT_WEEK_ENDS: 
            return {
                ...state,
                current_week_start: action.payload.current_week_start,
                current_week_end: action.payload.current_week_end,
            };

        default: return state;
    }
}

export default reducer;