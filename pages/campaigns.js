// Next.js Imports
import Link from 'next/link'

// Components
import Title from "../components/Title.js"
import Campaign from "../components/Campaign.js"
import Bubble from "../components/Bubble.js"

// Styles
import styles from '../styles/Common.module.css'


export default function Campaigns() {
    return (
        <div className={styles.container}>            
            <Title title="Campaigns" Style="background: white"/>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <div className={styles.grid}>
                        <Title title="All" />
                    </div>
                    <div className={styles.grid}>
                        <Bubble title="Campaign One" description="The Discription" />
                        <Bubble title="Campaign Two" description="The 2nd Discription" />
                    </div>
                </div>
                <div>
                    <div className={styles.grid}>
                        <Title title="Selected" />
                    </div>
                    <div className={styles.grid}>
                        <Campaign />
                    </div>
                </div>
                <div>
                    <div className={styles.grid}>
                        <Title title="Preview" />
                    </div>
                    <div className={styles.grid}>
                        <Campaign />
                    </div>
                </div>
            </div>
        </div>
    )
}