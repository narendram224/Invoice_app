import { useDispatch } from "react-redux"
import { activeInvoiceList, toggleInvoice } from "../../redux/invoice"
import Button from "../Button/Button"
import styles from "./Header.module.css"

const Header = () => {
  const dispatch = useDispatch()

  const openInvoiceList = () => {
    dispatch(activeInvoiceList(true))
  }
  const openCreateInvoice = () => {
    dispatch(activeInvoiceList(false))
  }
  const toggleViewInvoice = () => {
    dispatch(toggleInvoice())
  }
  return (
    <header className={styles.headerContainer}>
      <img
        src="https://photos.angel.co/startups/i/4389578-24c1052ecf295e077aff861887dd0c72-medium_jpg.jpg"
        width="32"
        height="32"
        alt="logo"
        border="0"
      />
      <div className={styles.right}>
        <Button
          type="button"
          className={styles.downloadPdf}
          onClick={openCreateInvoice}
        >
          Create invoice
        </Button>
        <Button
          type="button"
          className={styles.downloadPdf}
          onClick={openInvoiceList}
        >
          Invoice List
        </Button>
        <Button
          type="button"
          className={styles.downloadPdf}
          onClick={toggleViewInvoice}
        >
          toggle view
        </Button>
      </div>
    </header>
  )
}

export default Header
