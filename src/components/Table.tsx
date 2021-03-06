import styles from '../styles/Table.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DayRow from './DayRow';
import TableHead from './TableHead';

import { ElementInterface } from '../utils/interfaces';
import { getDaysPlans } from '../utils/hooks';
import { Actions } from '../context';

const Table = () => {
    const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
    const state: any = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        let daysPlans = getDaysPlans(state.current_week)
        dispatch({ type: Actions.SET_DAYS_PLANS, payload: daysPlans })
    }, [state.current_week])

    return (
        <div className={styles.container}>
            <TableHead />
            { state.days_plans.map(( day_sessions: ElementInterface[], i: number ) => (
                <DayRow 
                    daySessions={day_sessions} 
                    dayName={days[i]} 
                    today={state.today} 
                    key={i} 
                />
            ))}
        </div>
    )
}

export default Table
