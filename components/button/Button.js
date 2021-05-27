import Link from 'next/link'
import styles from './Button.module.css'

export const Button = ({ text, target }) => {
  let link = target || '/'
  return (
    <Link href={link}>
      <a>{text}</a>
    </Link>

  )
}