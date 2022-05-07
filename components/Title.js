// Styles
import styles from '../styles/Common.module.css'


export default function Title(props) {
  return(
    <h1 className={styles.title}>
      {props.title}
    </h1>
  )
}
