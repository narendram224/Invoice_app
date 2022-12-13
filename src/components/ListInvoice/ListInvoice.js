import { useDispatch } from "react-redux"
import {
  saveInvoiceData,
  saveSelectedInvoice,
  toggleInvoice,
} from "../../redux/invoice"
import Button from "../Button/Button"
import Typography from "../Typography/Typography"
import styles from "./ListInvoice.module.css"

const YellowStatus = () => {
  return (
    <Typography className={styles.invoiceStatus}>
      <div className={`${styles.circle} ${styles.yellow}`} />
      outstanding
    </Typography>
  )
}
const RedStatus = () => {
  return (
    <Typography className={styles.invoiceStatus}>
      <div className={`${styles.circle} ${styles.red}`} />
      Late
    </Typography>
  )
}
const GreenStatus = () => {
  return (
    <Typography className={styles.invoiceStatus}>
      <div className={`${styles.circle} ${styles.green}`} />
      Paid
    </Typography>
  )
}
const invoiceStatus = {
  paid: <GreenStatus />,
  outstanding: <YellowStatus />,
  late: <RedStatus />,
}

const ListInvoice = (invoice) => {
  const dispatch = useDispatch()
  const selectInvoice = (info) => {
    dispatch(saveSelectedInvoice(info))
    dispatch(toggleInvoice(true))
  }
  return (
    <div className={styles.listContainer}>
      <Typography className={styles.invoiceInfo}>
        {invoice.invoiceDate}
      </Typography>
      {invoiceStatus[invoice.status]}
      <Typography className={styles.amount}>{invoice.grandTotal}</Typography>
      <Button
        type="button"
        className={styles.downloadPdf}
        onClick={() => selectInvoice(invoice)}
      >
        view Invoice
      </Button>
    </div>
  )
}

export default ListInvoice
