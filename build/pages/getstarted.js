// Components
import Title from "../components/Title.js"
import Blurb from "../components/Blurb.js"

// Styles
import styles from '../styles/Common.module.css'


export default function GetStarted () {
    return (
        <div className={styles.container}>
            <Title title="Get Started"/>
            <Blurb text="Welcome to infra-push, this get started video should help!" />
            <div className={styles.image}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/S5rvJOcff_I?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <Blurb text="This second video is all about the features!" />
            <div className={styles.image}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/X2cl6_DVpFI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <Blurb text="Good luck using our platform, reach out if you need help!" />
            <br />
        </div>
    )
}