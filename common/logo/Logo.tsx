import styles from './Logo.module.scss'
import Link from 'next/link'

interface Props{
    size: number
}

const Logo = (props: Props) => {
    return(
        <Link href="/">
            <a style={{fontSize: `${props.size}px`}} className={styles.logo}>Best<span className={styles.underlinedText}>IT</span>Learn</a>
        </Link>
    )
}

export default Logo;