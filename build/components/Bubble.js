// Next.js Imports
import Link from 'next/link'

// Styles
import styles from '../styles/Common.module.css'

export default function Bubble(props) {
  return(
        <div className={styles.card}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
  )
}