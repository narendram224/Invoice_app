import styles from "./Button.module.css"

const Button = ({ children, className, ...props }) => {
  return (
    <button className={` ${className} ${styles.btn}`} {...props}>
      {children}
    </button>
  )
}

export default Button
