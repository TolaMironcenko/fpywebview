import classNames from 'classnames';
import React from 'react';
import styles from './ModalView.module.css'

const ModalView = ({active, setActive, params, setParams, ...props}) => {
    return (
        <div className={active?classNames(styles.ModalView, styles.active):styles.ModalView}>
            {
                params.map(param => {
                    return(
                        <input 
                            type="text" 
                            key={param.id}
                            value={param.value}
                            onChange={(e)=>{setParams[param.id](e.target.value)}}
                            className={styles.input} 
                            placeholder={param.placeholder}
                        />
                    )
                })
            }
        </div>
    );
};

export default ModalView;