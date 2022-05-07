// Styles
import styles from '../styles/Common.module.css'


export default function Footer() {
    return (
      <footer 
        className={styles.footer} 
      >
        INFRA-PUSH {new Date().getFullYear()}
      </footer>
    )
  }