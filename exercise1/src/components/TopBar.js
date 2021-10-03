import React from "react";
import styles from './TopBar.module.css';

export default function TopBar() {

    const mainStyle = { paddingLeft: '1%', paddingRight: '1%' };

    return (
        <div className={ styles.header }>
            <div className={ styles.container }>
                <div className={styles.brand}>HELSINGIN SANOMAT</div>
                <div style={mainStyle}>Etusivu</div>
                <div style={mainStyle}>Uutiset</div>
                <div style={mainStyle}>Lehdet</div>
                <div style={mainStyle}>Asiakaspalvelu</div>
                <div style={{paddingLeft:'8%', paddingRight:'1%'}}>
                <div style={{alignItems:'center', display: 'flex', flexDirection:'row', float:'inlineEnd'}}>
                <div className={styles.subscribe}>
                <div style={mainStyle}>Tilaa</div></div>
                <div style={mainStyle,{paddingLeft:'20px', paddingRight:'20px'}}>Kirjaudu</div>
                <div style={{paddingLeft:'1%', paddingRight:'0%'}}>Valikko</div>
                <div className={styles.objects}><div className={ styles.menu }></div><div className={ styles.menu }></div><div className={ styles.menu }></div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}