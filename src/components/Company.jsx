// components/Company.jsx
import React from 'react';
import styles from '../app/page.module.css';
const Company=({titulo,descripcion,caracteristicas,imagen})=>{
    return(
        <div className={styles.card}>
            <img src={imagen} alt={titulo} className={styles.image}/>
            <h2 className={styles.info}>{titulo}</h2>
            <p className={styles.info}>{descripcion}</p>
            <p className={styles.info}><strong>Caracteristicas: </strong> {caracteristicas}</p>
        </div>

    );
};

export default Company;