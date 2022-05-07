// Components
import Title from "../components/Title.js"
import Blurb from "../components/Blurb.js"

// Styles
import styles from '../styles/Common.module.css'


export default function Settings () {
    return (
        <div className={styles.container}>
            <Title title="Account Settings"/>
        </div>
    )
}