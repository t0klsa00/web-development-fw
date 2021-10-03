import React from "react";
import styles from './MainSection.module.css'


export default function MainSection(props) {
    console.log(props.image);
    return (
        <div className={'MainClass'}>
            <div className={styles.container}><img src={`/images/${props.data.image}`}/>
            <div className={styles.newstopic}>
            <span style={{color:'rgb(0, 81, 141)', fontWeight:'700'}}>{props.data.maintopic} </span>| {props.data.news}</div> 
            </div>
            </div>
    )
}