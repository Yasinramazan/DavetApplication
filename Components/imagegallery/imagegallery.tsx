"use client"

import GetImage from "../image/image";
import styles from "./imagegallery.module.css"
import { useEffect } from 'react';


export default function ImageGallery({ images }: { images: string[] }) {



    return (
        <div id="myDiv" className={styles.div}>
            {images.map((item, index) =>
                <div key={index} >
                    <img
                        src={item}  // Harici URL
                        alt="Picture of the author"
                    />
                </div>)}

        </div>
    );
}