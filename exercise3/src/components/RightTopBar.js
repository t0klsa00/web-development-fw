import React from "react";
import styles from './RightTopBar.module.css';

export default function RightTopBar() {

    return (
        <div className={styles.main}>
        <div className={ styles.header }>
                <div className={styles.signin}>
                <div>Sign In</div></div>Returns and orders
                <div className={styles.objects}><div className={ styles.cartlogo }></div>cart
                </div>
            </div>
            </div>
    )
}