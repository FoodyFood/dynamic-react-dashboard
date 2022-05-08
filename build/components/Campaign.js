// Styles
import styles from '../styles/Common.module.css'


export default function Campaign(props) {
  return(
    <div className={styles.card}>
      <h1>
        {props.CampaignName}
      </h1>
      <p>
        {props.CampaignDescription}
      </p>
    </div>
  )
}
