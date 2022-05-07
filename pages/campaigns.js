// Next.js Imports
import Link from 'next/link'

// Components
import Title from "../components/Title.js"

// Styles
import styles from '../styles/Common.module.css'


export default function Campaigns() {
    return (
        <div className={styles.container}>            
            <Title title="Campaigns" />
            <main className={styles.main}>  
                <div className={styles.grid}>
                </div>
            </main>
        </div>
    )
}