// Next.js Imports
import Image from 'next/image'

// Components
import Card from "../components/Card.js"

// Styles
import styles from '../styles/Common.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={"/images/logo.png"} // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={400} // Desired size with correct aspect ratio
          alt="Picture"
        />
      </div>
      <Main />
    </div>
  )
}


function Main() {
  return(
    <main className={styles.main}>
      <Card title="Get Started" link="/getstarted" description="Get started with infra-push!"/>
      <Card title="Your Dashboard" link="/dashboard" description="Go to your dashboard"/>
      <Card title="Support" link="/support" description="Need a hand? Reach out!"/>
      <br />
      <br />
    </main>
  )
}