import React from 'react';
import styles from './SearchResult.module.css';

let o;

export default function SearchResult(props) {
  if (props.rating >= 5 && props.rating < 6){o="fivestars.png"}else if (props.rating >= 4 && props.rating < 5) {o = "fourstars.png"}
  else if (props.rating >= 3 && props.rating < 4) {o = "threestars.png"} else if (props.rating >= 2 && props.rating < 3) {o = "twostars.png"}
  else {o="onestar.png"}
  return (
    <div className={ styles.product }>
        <div>
          <div><img src={`/images/${props.image}`} /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div className={styles.manufacturer}><div>by  { props.manufacturer }</div></div>
          <div className={ styles.price }><div>${ props.price }</div></div>
          <div className={styles.rating}><img src={`/images/${o}`}/><div>{ props.rating }</div></div>
        </div>
    </div>
  )
}
