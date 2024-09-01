import styles from "../discovercard/discovercard.module.css"
import DiscoverContent from "../discovercontent/discovercontent";

export default function DiscoverCard() {

    const people = [
        { name: 'Ali', age: "30", occupation: 'Mühendis' },
        { name: 'Ayşe', age: "25", occupation: 'Doktor' },
        { name: 'Ahmet', age: "40", occupation: 'Öğretmen' },
        { name: 'Fatma', age: "35", occupation: 'Hemşire' },
        { name: 'Mehmet', age: "50", occupation: 'Yazılımcı' },
        { name: 'Elif', age: "28", occupation: 'Grafik Tasarımcı' },
        { name: 'Ahmet', age: "45", occupation: 'Müdür' },
        { name: 'Zeynep', age: "32", occupation: 'Psikolog' },
        { name: 'Oğuz', age: "27", occupation: 'Avukat' },
        { name: 'Deniz', age: "22", occupation: 'Stajyer' }
    ];

    return (
        <div className={styles.outerdiv}>
            <h2 className={styles.h2}>İlgini çekebilecek gündemler</h2>
            <div className={styles.outernewsdiv} >
                {people.map((item,index)=>
                <div key={index}>
                    <DiscoverContent title={item.occupation} name={item.name} total={item.age}/>
                </div>
                    
                )}
                
            </div>
        </div>
    );
}