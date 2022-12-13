import { useDispatch } from "react-redux"
import { activeInvoiceList, toggleInvoice } from "../../redux/invoice"
import Button from "../Button/Button"
import Spacer from "../Spacer/Spacer"
import styles from "./Sidemenu.module.css"
const SideMenu = () => {
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
    <aside className={styles.sideMenuContainer}>
      <Button
        type="button"
        className={styles.downloadPdf}
        onClick={openCreateInvoice}
      >
        Create Invoice
      </Button>
      <Spacer size={20} />
      <Button
        type="button"
        className={styles.downloadPdf}
        onClick={openInvoiceList}
      >
        Invoice list
      </Button>
      <Spacer size={20} />
      <Button className={styles.downloadPdf} onClick={toggleViewInvoice}>
        Toggle Preview
      </Button>
    </aside>
  )
}

export default SideMenu
