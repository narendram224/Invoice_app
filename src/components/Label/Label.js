import styles from "./Label.module.css"

const Label = ({ children, className, id }) => {
  return (
    <label htmlFor={id} className={`${className} ${styles.inputField}`}>
      {children}
    </label>
  )
}

export default Label
