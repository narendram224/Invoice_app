import styles from "./TextField.module.css"

const TextField = ({ className, ...props }) => {
  return <input {...props} className={`${className} ${styles.inputField}`} />
}

export default TextField
