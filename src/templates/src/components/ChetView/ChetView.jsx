import React from 'react';
import styles from './ChetView.module.css'
import classnames from 'classnames'

const ChetView = ({ChetTitle, ChetBalance, ...props}) => {
    return (
        <div className={styles.ChetView} {...props}>
            <h5 className={styles.ChetTitle}>
                {ChetTitle}
                <button className={classnames(styles.button, styles.change)}>&#9998;</button>
            </h5>
            <h2 className={styles.ChetBalance}>{ChetBalance}</h2>
            <div className={styles.buttons}>
                <button className={classnames(styles.button, styles.increment)}>+</button>
                <button className={classnames(styles.button, styles.decrement)}>-</button>
            </div>
        </div>
    );
};

export default ChetView;