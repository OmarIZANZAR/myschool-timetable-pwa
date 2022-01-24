import styles from '../styles/ClassCard.module.css';
import React from 'react'

import { ElementInterface } from '../utils/interfaces';

interface Props {
    session?: any,
}

const ClassCard = ({ session } : Props) => {

    let start: number = 1;
    switch(session.time_start){
        case 8: start = 1; break;
        case 10: start = 2; break;
        case 14: start = 3; break;
        case 16: start = 4; break;
    }

    let end: number = 2;
    switch(session.time_end){
        case 10: end = 2; break;
        case 12: end = 3; break;
        case 16: end = 4; break;
        case 18: end = 5; break;
    }

    return (
        <div className={styles.container} style={{
            gridColumnStart: start,
            gridColumnEnd: end,
            gridRowStart: 1,
            gridRowEnd: 1,
        }}>
            <div className={styles.title}>
                <p>{session.name}</p>
            </div>
            <div className={styles.details}>
                <div className={styles.badge} style={{ 
                    backgroundColor: session.class_type == 1 ? "#94B8FF" : "orange"  
                }}>
                    <p>Pr.{session.prof}</p>
                </div>
                <div className={styles.time}>
                    <p>{ session.time_end - session.time_start }h</p>
                </div>
            </div>
        </div>
    )
}

export default ClassCard
