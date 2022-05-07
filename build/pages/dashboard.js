// Next.js Imports
import Link from 'next/link'

// Components
import Title from "../components/Title.js"
import Card from "../components/Card.js"

// Styles
import styles from '../styles/Common.module.css'


export default function Dashboard() {
    return (
        <div className={styles.container}>

            <Title title="Dashboard" />
            
            <main className={styles.main}>
                <CardStack />
            </main>

        </div>
    )
}


function CardStack() {
    return(
        <div className={styles.grid}>
            <Card title="One" link="/one" description="One"/>
            <Card title="Two" link="/two" description="Two"/>
            <Card title="Three" link="/three" description="Three"/>
            <Card title="Four" link="/four" description="Four"/>
            <Card title="One" link="/one" description="One"/>
            <Card title="Two" link="/two" description="Two"/>
            <Card title="Three" link="/three" description="Three"/>
            <Card title="Four" link="/four" description="Four"/>
            <Card title="One" link="/one" description="One"/>
            <Card title="Two" link="/two" description="Two"/>
            <Card title="Three" link="/three" description="Three"/>
            <Card title="Four" link="/four" description="Four"/>
        </div>
    )
}