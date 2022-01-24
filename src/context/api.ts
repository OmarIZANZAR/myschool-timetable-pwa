import { Actions } from '../context';

import { StateInterface } from '../utils/interfaces';
import { getDaysPlans, getWeeksStart } from '../utils/hooks';

export const initiateState = (state: any) => (dispatch: any) : void => {
    let today = new Date()
    let counting_start_day = new Date( getWeeksStart() );
    let dt = today.getTime() - counting_start_day.getTime();

    const initiatedState: StateInterface = {
      ...state,
      current_week: Math.floor( ( dt / ( 1000*3600*24 ) ) / 7 ) + 1,
      days_plans: [],
    };

    initiatedState.today = today.toLocaleDateString(undefined, { weekday: 'long' })
    initiatedState.days_plans = getDaysPlans(initiatedState.current_week);

    dispatch({ type: Actions.INITIATE_STATE, payload: initiatedState })
}

export const prevWeek = () => (dispatch: any) : void => {
  dispatch({ type: Actions.PREV_WEEK })
}

export const nextWeek = () => (dispatch: any) : void => {
  dispatch({ type: Actions.NEXT_WEEK })
}

export const setCurrentWeekEnds = (currentWeek: number) => (dispatch: any) : void => {
  const options : any = { month: 'long', day: 'numeric'  }

  let initMS = new Date( getWeeksStart() ).getTime()
  let firstMS = ( ( currentWeek - 1 ) * 7 * 24 * 3600 * 1000 ) + initMS
  let lastMS = firstMS + ( 4 * 24 * 3600 * 1000 )

  let current_week_start = new Date(firstMS).toLocaleDateString(undefined, options )
  let current_week_end = new Date(lastMS).toLocaleDateString(undefined, options )

  dispatch({ 
    type: Actions.SET_CURRENT_WEEK_ENDS,
    payload: { current_week_start, current_week_end }
  })
}