import dayjs from "dayjs"
import { useState } from "react"
import { PlusSquare, Trash } from "react-feather"
import { useDispatch, useSelector } from "react-redux"
import { saveInvoiceData, saveSelectedInvoice } from "../../redux/invoice"
import TextField from "../TextField/TextField"
import Typography from "../Typography/Typography"
import { FormInfo } from "./FormData"
import styles from "./InvoiceForm.module.css"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import { KEYS } from "../../Const"
const status = [
  { label: "paid", value: "Paid" },
  { label: "outstanding", value: "outstanding" },
  { label: "late", value: "late" },
]
const TAX = 72.4

const InvoiceForm = () => {
  const notify = () => toast.success("🚀 Successfully created invoice!")
  const notify2 = () => toast.success("Email Sent success! 🚀")
  const [items, setItems] = useState([
    {
      amount: 500,
      materials: "Beats Studio Over-Ear Headphones",
      labours: 0,
      hourseOfWork: 0,
    },
  ])
  const [note, setNote] = useState("this is my demo notes")
  const [email, setEmail] = useState("a@a.com")
  const InvoiceData = useSelector((state) => state.invoice)
  const dispatch = useDispatch()
  const [selectedStatus, setSelectedStatus] = useState("paid")

  const handleChangeItem = (event, index) => {
    const { value, name } = event.target

    const newArr = items.map((el, ind) => {
      if (ind === index) return Object.assign({}, el, { [name]: value })
      return el
    })
    setItems(newArr)
  }
  const addItem = () => {
    const newitems = [...items]
    const item = {
      amount: 0,
      materials: "",
      labours: 0,
      hourseOfWork: 0,
    }
    newitems.push(item)
    setItems(newitems)
  }
  const deleteItem = (index) => {
    const filteredItems = items.filter((item, ind) => ind !== index)
    setItems(filteredItems)
  }
  const [formInfo, setFormInfo] = useState({
    companyName: "GoodCompany Ltd",
    billingName: "PM care funds",
    billingNumber: "7905325093",

    companyRegNo: "GST-45242424c",
    vat: "vat-999000556482",
    companyAddress1: "Silk Board",
    companyAddress2: "Bangalore Phase 1",
    companyAddress3: "560068",
    billingAddress1: "PMO office E-block",
    billingAddress2: "Central Secretariat,",
    billingAddress3: "New Delhi, Delhi 110011",
  })
  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormInfo({ ...formInfo, [name]: value })
  }
  const calculateSum = (tax = 0) => {
    return items?.reduce((sum, item) => {
      return parseFloat(
        sum +
          parseInt(item?.amount) *
            parseInt(item?.labours) *
            parseInt(item?.hourseOfWork) +
          tax
      ).toFixed(2)
    }, 0)
  }
  const sendEmail = async (info) => {
    const emailInfo = {
      to: email,
      subject: "Invoice Information",
      message: JSON.stringify(info),
      to_name: info.billingName,
      from_name: info.companyName,
      reply_to: "noreply@gmail.com",
    }
    try {
      const res = await emailjs.send(
        KEYS.USER_ID,
        KEYS.TEMPLATE_ID,
        emailInfo,
        KEYS.PUBLIC_ID
      )
      console.log("[Res]", res)
      notify2()
    } catch (error) {
      console.log("Erorr while email sending")
    }
  }

  const handleSubmit = async () => {
    const info = {
      ...formInfo,
      items,
      note,
      email,
      status: selectedStatus,
      invoiceDate: dayjs(Date.now()).format("DD-MM-YYYY"),
      invoiceNumber: `${dayjs(Date.now()).format(
        "DD-MM-YYYY"
      )}/INV/${new Date().getTime()}`,
      subTotal: calculateSum(),
      grandTotal: calculateSum(TAX),
    }
    dispatch(saveInvoiceData(info))
    dispatch(saveSelectedInvoice(info))
    notify()
    await sendEmail(info)
    // sendEmail
  }

  return (
    <form className={styles.form}>
      <div className={styles.container}>
        {FormInfo.map(({ title, items }) => {
          return (
            <section key={title}>
              <div>
                <Typography type="h4">{title}</Typography>
                {items.map(({ label, id, ...props }) => {
                  return (
                    <div key={id}>
                      <Typography
                        type="label"
                        htmlFor={id}
                        className={styles.label}
                      >
                        {label}
                      </Typography>
                      <TextField
                        name={id}
                        id={id}
                        value={formInfo[id]}
                        onChange={(e) => handleFormChange(e)}
                        className={styles.inputfield}
                        {...props}
                      />
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
      <div className={styles.container}>
        <div className={styles.invoicemeta}>
          <div>
            <Typography type="h4">Invoice Meta</Typography>
            <PlusSquare
              title="Add New Row"
              className={styles.addIcon}
              onClick={addItem}
            />

            {items.map((item, ind) => {
              return (
                <div className={styles.mainMeta} key={ind}>
                  <div>
                    <Typography
                      type="label"
                      htmlFor="hourseOfWork"
                      className={styles.label}
                    >
                      hours of Work
                    </Typography>
                    <TextField
                      type="number"
                      name="hourseOfWork"
                      id="hourseOfWork"
                      value={item.hourseOfWork}
                      onChange={(event) => handleChangeItem(event, ind)}
                      className={styles.inputMeta}
                    />
                  </div>
                  <div>
                    <Typography
                      type="label"
                      htmlFor="amount"
                      className={styles.label}
                    >
                      Amount/hours
                    </Typography>
                    <TextField
                      name="amount"
                      type="number"
                      className={styles.numberfield}
                      value={item.amount}
                      onChange={(event) => handleChangeItem(event, ind)}
                    />
                  </div>
                  <div>
                    <Typography
                      type="label"
                      htmlFor="materials"
                      className={styles.label}
                    >
                      Materials
                    </Typography>
                    <TextField
                      name="materials"
                      value={item.materials}
                      onChange={(event) => handleChangeItem(event, ind)}
                      className={styles.inputMeta}
                    />
                  </div>
                  <div>
                    <Typography
                      type="label"
                      htmlFor="labours"
                      className={styles.label}
                    >
                      Labours
                    </Typography>
                    <TextField
                      name="labours"
                      type="number"
                      className={styles.numberfield}
                      value={item.labours}
                      onChange={(event) => handleChangeItem(event, ind)}
                    />
                  </div>

                  <Trash
                    size={24}
                    className={styles.deleteIcon}
                    onClick={() => deleteItem(ind)}
                  />
                </div>
              )
            })}
            <div className={styles.statusInfo}>
              <div>
                <Typography type="h2" htmlFor="Note" className={styles.label}>
                  Status
                </Typography>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className={styles.select}
                >
                  {status.map((status) => {
                    return (
                      <option value={status.value} key={status.value}>
                        {status.label}
                      </option>
                    )
                  })}
                </select>
              </div>

              <div className={styles.textArea}>
                <Typography type="h2" htmlFor="Note" className={styles.label}>
                  Note
                </Typography>
                <textarea
                  rows={2}
                  placeholder="Enter a note "
                  className={styles.note}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.sendInvoice}>
          <Typography type="label" htmlFor="Email" className={styles.label}>
            Email
          </Typography>
          <TextField
            name="Email"
            type="email"
            placeholder="Enter email to share invoice"
            className={styles.inputfield}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" className={styles.btn} onClick={handleSubmit}>
            Send invoice
          </button>
        </div>
      </div>
    </form>
  )
}

export default InvoiceForm
