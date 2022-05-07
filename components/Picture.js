// Next.js Imports
import Image from 'next/image'

// Styles
import styles from '../styles/Common.module.css'


export default function Picture(props) {
    return(
        <div className={styles.image}>
            <Image
            src={"/images" + props.image} // Route of the image file
            height={props.size} // Desired size with correct aspect ratio
            width={props.size * 1.25} // Desired size with correct aspect ratio
            alt="Picture"
            />
        </div>
    )
}