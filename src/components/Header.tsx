import styles from '../styles/Header.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { API } from '../context';

const Header = () => {
    const state: any = useSelector(state => state);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(API.setCurrentWeekEnds(state.current_week))
    }, [state.current_week])
 
    return (
        <header className={styles.container}>
            <div className={styles.details}>
                <div>
                    <h2>S{ state.current_week }</h2>
                </div>
                <p>de { state.current_week_start } à {state.current_week_end}</p>
            </div>

            <div className={styles.controls}>
                <button onClick={() => dispatch(API.prevWeek())}>Prev</button>
                <button onClick={() => dispatch(API.nextWeek())}>Next</button>
            </div>
        </header>
    )
}

export default Header;
