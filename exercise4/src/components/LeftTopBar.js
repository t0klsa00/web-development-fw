import React from "react";
import styles from './LeftTopBar.module.css';

export default function LeftTopBar() {

    const mainStyle = { paddingLeft: '1%', paddingRight: '1%' };

    return (
        <div className={ styles.header }>
            <div className={ styles.container }>
            <div className={styles.brand}>amazon</div>
                <div style={mainStyle}>Deliver to Finland</div>
            </div></div>
    )
}