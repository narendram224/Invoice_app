import styles from "./MainLayout.module.css"

const MainLayout = ({ children, className }) => {
  return (
    <main className={`${className} ${styles.mainContainer}`}>{children}</main>
  )
}

export default MainLayout
