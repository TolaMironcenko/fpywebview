import React from 'react';
import styles from './TransactionView.module.css'

const TransactionView = ({sum, category, datetime, ...props}) => {
    return (
        <div className={styles.TransactionView}>
            <div className={styles.sum} style={sum>0?{color: 'green'}:{color: 'red'}}>{sum}</div>
            <div className={styles.category}>
                {category}
                {
                    category === 'Food' || category === 'Еда'
                    ? <h2 style={{paddingLeft: '10px'}}>&#127822;</h2>
                    : category === 'Transport' || category === 'Транспорт'
                    ? <h2 style={{paddingLeft: '10px'}}>&#128652;</h2>
                    : category === 'No category' || category === 'Без категории'
                    ? <h2 style={{paddingLeft: '10px'}}>&#128176;</h2>
                    : <></>
                }
            </div>
            <div className={styles.datetime}>{datetime}</div>
        </div>
    );
};

export default TransactionView;