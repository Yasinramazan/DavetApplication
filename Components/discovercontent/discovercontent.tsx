import styles from "../discovercontent/discovercontent.module.css"
import React from 'react';

interface DiscoverContentProps {
    title: string;
    name: string;
    total: string;
  }

const DiscoverContent: React.FC<DiscoverContentProps> = ({ title, name, total }) =>{
    return(
        <div className={styles.newsdiv}>
                <div className={styles.topdiv}>
                    <label className={styles.label}>{title}</label>
                    <span className={styles.roundbutton}>···</span>
                </div>
                <h3 className={styles.h3}>{name}</h3>
                <label className={styles.label}>{total} posts</label>
            </div>
    );
}

export default DiscoverContent;