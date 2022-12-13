import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Header from "../components/Header/Header"
import Invoice from "../components/Invoice/invoice"
import InvoiceForm from "../components/InvoiceForm/InvoiceForm"
import SideMenu from "../components/SideMenu/SideMenu"
import InvoiceList from "../Layout/InvoiceList/InvoiceList"
import MainLayout from "../Layout/MainLayout/MainLayout"
import styles from "./homePage.module.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const DummyPage = () => {
  const { isListActive, toggleView } = useSelector((state) => state.invoice)
  const [dbData, setDbData] = useState([])

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos")
    const json = await res.json()
    setDbData(json)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {/* <Invoice /> */}
      <Header />
      <SideMenu />
      <MainLayout className={styles.mainContainer}>
        {isListActive ? <InvoiceList /> : <InvoiceForm />}
        {toggleView ? <Invoice /> : null}
      </MainLayout>
      <ToastContainer />
    </div>
  )
}

export default DummyPage
