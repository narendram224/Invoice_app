import styles from "./InvoiceList.module.css"
import ListInvoice from "../../components/ListInvoice/ListInvoice"
import Button from "../../components/Button/Button"
import { Circle } from "react-feather"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveSelectedFilter } from "../../redux/invoice"
import Typography from "../../components/Typography/Typography"

const InvoiceList = () => {
  const { invoiceInfo, selectedStatus } = useSelector((state) => state.invoice)
  const dispatch = useDispatch()
  const [filteredList, setFilteredList] = useState(invoiceInfo)

  const clearFilteredList = () => setFilteredList([])
  const filterListData = (status) => {
    if (status) {
      const filterListInfo = invoiceInfo?.filter(
        (item) => item.status === status
      )
      setFilteredList(filterListInfo)
      return
    }
    setFilteredList(invoiceInfo)
  }
  const handleFilter = (filter) => {
    dispatch(saveSelectedFilter(filter))
    filterListData(filter)
  }

  return (
    <div className={styles.invoiceList}>
      <div className={styles.filter}>
        <Button
          className={`${styles.all} ${!selectedStatus ? styles.active : ""}`}
          onClick={() => handleFilter()}
        >
          All
        </Button>
        <Button
          className={` ${styles.circleBtn} ${
            selectedStatus === "paid" ? styles.active : ""
          }`}
          onClick={() => handleFilter("paid")}
        >
          <div className={`${styles.circle} ${styles.green} `} />
          Paid
        </Button>
        <Button
          className={` ${styles.circleBtn} ${
            selectedStatus === "outstanding" ? styles.active : ""
          }`}
          onClick={() => handleFilter("outstanding")}
        >
          <div className={`${styles.circle} ${styles.yellow}`} />
          outstanding
        </Button>
        <Button
          className={` ${styles.circleBtn} ${
            selectedStatus === "late" ? styles.active : ""
          }`}
          onClick={() => handleFilter("late")}
        >
          <div className={`${styles.circle} ${styles.red}`} />
          Late
        </Button>
      </div>
      <div>
        {filteredList.length ? (
          filteredList?.map((item) => {
            return <ListInvoice {...item} />
          })
        ) : (
          <div>
            <h1 className={styles.noDatatext}>No Data Found</h1>
            <img
              src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?w=2000"
              className={styles.notFound}
              alt="no-data"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default InvoiceList
