import React from 'react';
import styles from './Loader.module.css'
import classNames from 'classnames';

const Loader = ({active}) => {
    return (
        <div className={active?classNames(styles.loader, styles.active):styles.loader}></div>
    );
};

export default Loader;