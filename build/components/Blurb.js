// Styles
import styles from '../styles/Common.module.css'


export default function Blurb(props) {
  return(
    <p className={styles.blurb}>
      {props.text}
    </p>
  )
}
