import React from "react";
import styles from './NewsNotification.module.css'

export default function NewsNotification(props) {
    return (
            <div className={styles.container}>
            <span className={styles.header}>{props.data.topic}</span>{props.data.body}
            <span className={styles.header}>{props.data.adtopic}</span>{props.data.adbody}
            </div>
    )
}