/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector } from "react-redux"
import styles from "./Invoice.module.css"
import { useRef } from "react"
import jsPDF from "jspdf"
import Button from "../Button/Button"

const Invoice = () => {
  const { selectedInvoice } = useSelector((state) => state.invoice)
  const reportTemplateRef = useRef(null)
  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    })

    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal")

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save("document")
      },
    })
  }

  return (
    <div className={styles.invoiceContainer}>
      <Button
        type="button"
        className={styles.downloadPdf}
        onClick={handleGeneratePdf}
      >
        Download PDF
      </Button>
      <div ref={reportTemplateRef}>
        <table
          width="100%"
          border="0"
          cellPadding="0"
          cellSpacing="0"
          align="center"
        >
          <tr>
            <td height="20"></td>
          </tr>
          <tr>
            <td>
              <table
                width="500"
                border="0"
                cellPadding="0"
                cellSpacing="0"
                align="center"
                className={styles.mainInfo}
                style={{ borderRadius: "10px 10px 0 0" }}
              >
                <tr className="hiddenMobile">
                  <td height="40"></td>
                </tr>
                <tr className="visibleMobile">
                  <td height="30"></td>
                </tr>

                <tr>
                  <td>
                    <table
                      width="480"
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      align="center"
                      className="fullPadding"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <table
                              width="220"
                              border="0"
                              cellPadding="0"
                              cellSpacing="0"
                              align="left"
                              className="col"
                            >
                              <tbody>
                                <tr>
                                  <td align="left">
                                    <img
                                      src="https://photos.angel.co/startups/i/4389578-24c1052ecf295e077aff861887dd0c72-medium_jpg.jpg"
                                      width="32"
                                      height="32"
                                      alt="logo"
                                      border="0"
                                    />
                                  </td>
                                </tr>
                                <tr className="hiddenMobile">
                                  <td height="40"></td>
                                </tr>
                                <tr className="visibleMobile">
                                  <td height="20"></td>
                                </tr>
                                <tr>
                                  <td className={styles.thankInfo}>
                                    Hello, {selectedInvoice?.billingName}.
                                    <br /> Thank you for shopping from our store
                                    and for your order.
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table
                              width="220"
                              border="0"
                              cellPadding="0"
                              cellSpacing="0"
                              align="right"
                              className="col"
                            >
                              <tbody>
                                <tr className="visibleMobile">
                                  <td height="20"></td>
                                </tr>
                                <tr>
                                  <td height="5"></td>
                                </tr>
                                <tr>
                                  <td style={styles.selectedInvoice}>
                                    Invoice
                                  </td>
                                </tr>
                                <tr />
                                <tr className="hiddenMobile">
                                  <td height="20"></td>
                                </tr>
                                <tr className="visibleMobile">
                                  <td height="20"></td>
                                </tr>
                                <tr>
                                  <td className={styles.orderInfo}>
                                    <small>Invoice no</small>{" "}
                                    {selectedInvoice?.invoiceNumber}
                                    <br />
                                    <small>
                                      Invoice Date:{" "}
                                      <span style={{ color: "#ff0000" }}>
                                        {selectedInvoice?.invoiceDate}
                                      </span>{" "}
                                    </small>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <table
          width="500"
          border="0"
          cellPadding="0"
          cellSpacing="0"
          className={styles.itemTable}
          bgcolor="#e1e1e1"
        >
          <thead className={styles.tHeadStyle}>
            <th width="100%">
              <td className={styles.tableHead} width="27%" align="left">
                Material
              </td>
              <td className={styles.tableHead} width="20%" align="center">
                hours of work
              </td>
              <td className={styles.tableHead} width="10%" align="right">
                labour
              </td>
              <td className={styles.tableHead} width="20%" align="right">
                Amount/hours/labour (₹)
              </td>
            </th>
          </thead>
          <tbody className={styles.tbody}>
            {selectedInvoice?.items?.map((item) => {
              return (
                <tr className={styles.bordered} key={item.materials}>
                  <td className={styles.article}>{item?.materials}</td>
                  <td className={styles.mh}>{item?.hourseOfWork}</td>
                  <td className={styles.center}>{item?.labours}</td>
                  <td className={styles.amount}>{item?.amount}</td>
                </tr>
              )
            })}

            {/* <tr className={styles.bordered}>
            <td className={styles.article}>Beats Studio Over-Ear Headphones</td>
            <td className={styles.mh}> MH792AM/A</td>
            <td className={styles.center}>1</td>
            <td className={styles.amount}>$299.95</td>
          </tr>
          <tr className={styles.bordered}>
            <td className={styles.article}>Beats Studio Over-Ear Headphones</td>
            <td className={styles.mh}> MH792AM/A</td>
            <td className={styles.center}>1</td>
            <td className={styles.amount}>$299.95</td>
          </tr>
          <tr className={styles.bordered}>
            <td className={styles.article}>Beats Studio Over-Ear Headphones</td>
            <td className={styles.mh}> MH792AM/A</td>
            <td className={styles.center}>1</td>
            <td className={styles.amount}>$299.95</td>
          </tr> */}
          </tbody>
        </table>

        <table
          width="100%"
          border="0"
          cellPadding="0"
          cellSpacing="0"
          align="center"
          className="fullTable"
          bgcolor="#e1e1e1"
        >
          <tbody>
            <tr>
              <td>
                <table
                  width="500"
                  border="0"
                  cellPadding="0"
                  cellSpacing="0"
                  align="center"
                  className="fullTable"
                  bgcolor="#ffffff"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          width="400"
                          border="0"
                          cellPadding="0"
                          cellSpacing="0"
                          align="center"
                          className="fullPadding"
                        >
                          <tbody>
                            <tr>
                              <td className={styles.subT1}>Subtotal</td>
                              <td className={styles.amount2} width="80">
                                ₹{selectedInvoice?.subTotal}
                              </td>
                            </tr>

                            <tr>
                              <td
                                style={{
                                  fontSize: "12px",
                                  fontFamily: "Open Sans  sans-serif",
                                  color: "#000",
                                  lineHeight: "22px",
                                  verticalAlign: "top",
                                  textAlign: "right",
                                }}
                              >
                                <strong>Grand Total (Incl.Tax)</strong>
                              </td>
                              <td
                                style={{
                                  fontSize: "12px",
                                  fontFamily: "Open Sans  sans-serif",
                                  color: "#000",
                                  lineHeight: "22px",
                                  verticalAlign: "top",
                                  textAlign: "center",
                                }}
                              >
                                <strong>₹{selectedInvoice?.grandTotal}</strong>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  fontSize: "12px",
                                  fontFamily: "Open Sans  sans-serif",
                                  color: "#b0b0b0",
                                  lineHeight: "22px",
                                  verticalAlign: "top",
                                  textAlign: "right",
                                }}
                              >
                                <small>TAX</small>
                              </td>
                              <td
                                style={{
                                  fontSize: "12px",
                                  fontFamily: "Open Sans  sans-serif",
                                  color: "#b0b0b0",
                                  lineHeight: "22px",
                                  verticalAlign: "top",
                                  textAlign: "center",
                                }}
                              >
                                <small>₹ 72.40</small>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          border="0"
          cellPadding="0"
          cellSpacing="0"
          align="center"
          className="fullTable"
          bgcolor="#e1e1e1"
        >
          <tbody>
            <tr>
              <td>
                <table
                  width="500"
                  border="0"
                  cellPadding="0"
                  cellSpacing="0"
                  align="center"
                  className="fullTable"
                  bgcolor="#ffffff"
                >
                  <tbody>
                    <tr />
                    <tr className="hiddenMobile">
                      <td height="60"></td>
                    </tr>
                    <tr className="visibleMobile">
                      <td height="40"></td>
                    </tr>
                    <tr>
                      <td>
                        <table
                          width="480"
                          border="0"
                          cellPadding="0"
                          cellSpacing="0"
                          align="center"
                          className="fullPadding"
                        >
                          <tbody>
                            <tr>
                              <td>
                                <table
                                  width="220"
                                  border="0"
                                  cellPadding="0"
                                  cellSpacing="0"
                                  align="left"
                                  className="col"
                                >
                                  <tbody>
                                    <tr>
                                      <td className={styles.billing}>
                                        <strong>BILLING INFORMATION</strong>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td width="100%" height="10"></td>
                                    </tr>
                                    <tr>
                                      <td className={styles.books}>
                                        {selectedInvoice?.billingName}
                                        <br />{" "}
                                        {selectedInvoice?.billingAddress1}
                                        <br />{" "}
                                        {selectedInvoice?.billingAddress2}
                                        <br />{" "}
                                        {selectedInvoice?.billingAddress3}
                                        <br /> phone+91:{" "}
                                        {selectedInvoice?.billingNumber}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>

                                <table
                                  width="220"
                                  border="0"
                                  cellPadding="0"
                                  cellSpacing="0"
                                  align="right"
                                  className="col"
                                >
                                  <tbody>
                                    <tr className="visibleMobile">
                                      <td height="20"></td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{
                                          fontSize: "11px",
                                          fontFamily: "Open Sans  sans-serif",
                                          color: "#5b5b5b",
                                          lineHeight: 1,
                                          verticalAlign: "top",
                                        }}
                                      >
                                        {" "}
                                        <strong>PAYMENT INFO</strong>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td width="100%" height="10"></td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{
                                          fontSize: "12px",
                                          fontFamily: "Open Sans  sans-serif",
                                          color: "#5b5b5b",
                                          lineHeight: "20px",
                                          verticalAlign: "top",
                                        }}
                                      >
                                        {selectedInvoice?.note}
                                        {/* Credit Card
                                      <br /> Credit Card Type: Visa
                                      <br /> Worldpay Transaction ID:{" "}
                                      <a
                                        href="#"
                                        style={{
                                          color: "#ff0000",
                                          textDecoration: "underline",
                                        }}
                                      >
                                        4185939336
                                      </a> */}
                                        <br />
                                        <a
                                          href="#"
                                          style={{ color: "#b0b0b0" }}
                                        >
                                          Right of Withdrawal
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table
                          width="480"
                          border="0"
                          cellPadding="0"
                          cellSpacing="0"
                          align="center"
                          className="fullPadding"
                        >
                          <tbody>
                            <tr>
                              <td>
                                <table
                                  width="220"
                                  border="0"
                                  cellPadding="0"
                                  cellSpacing="0"
                                  align="left"
                                  className="col"
                                >
                                  <tbody>
                                    <tr className="hiddenMobile">
                                      <td height="35"></td>
                                    </tr>
                                    <tr className="visibleMobile">
                                      <td height="20"></td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{
                                          fontSize: "11px",
                                          fontFamily: "Open Sans  sans-serif",
                                          color: "#5b5b5b",
                                          lineHeight: "1",
                                          verticalAlign: "top",
                                        }}
                                      >
                                        <strong>SHIPPING INFORMATION</strong>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td width="100%" height="10"></td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{
                                          fontSize: "12px",
                                          fontFamily: "Open Sans  sans-serif",
                                          color: "#5b5b5b",
                                          lineHeight: "20px",
                                          verticalAlign: "top",
                                        }}
                                      >
                                        {selectedInvoice?.companyName}
                                        <br />{" "}
                                        {selectedInvoice?.companyAddress1}
                                        <br />{" "}
                                        {selectedInvoice?.companyAddress2}
                                        <br />{" "}
                                        {selectedInvoice?.companyAddress3}
                                        <br /> phone+91: 46934694639
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>

                                <table
                                  width="220"
                                  border="0"
                                  cellPadding="0"
                                  cellSpacing="0"
                                  align="right"
                                  className="col"
                                >
                                  <tbody>
                                    <tr className="hiddenMobile">
                                      <td height="35"></td>
                                    </tr>
                                    <tr className="visibleMobile">
                                      <td height="20"></td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{
                                          fontSize: "12px",
                                          fontFamily: "Open Sans  sans-serif",
                                          color: "#5b5b5b",
                                          lineHeight: 1,
                                          verticalAlign: "top",
                                        }}
                                      >
                                        <strong>COMPANY REGISTRATION</strong>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td width="100%" height="10"></td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{
                                          fontSize: "12px",
                                          fontFamily: "Open Sans  sans-serif",
                                          color: "#5b5b5b",
                                          lineHeight: "20px",
                                          verticalAlign: "top",
                                        }}
                                      >
                                        {selectedInvoice?.companyRegNo}
                                        <br /> Vat no: {selectedInvoice?.vat}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr className="hiddenMobile">
                      <td height="20"></td>
                    </tr>
                    <tr className="visibleMobile">
                      <td height="10"></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          border="0"
          cellPadding="0"
          cellSpacing="0"
          align="center"
          className="fullTable"
          bgcolor="#e1e1e1"
        >
          <tr>
            <td>
              <table
                width="500"
                border="0"
                cellPadding="0"
                cellSpacing="0"
                align="center"
                className="fullTable"
                bgcolor="#ffffff"
                style={{ borderRadius: "0 0 10px 10px" }}
              >
                <tr>
                  <td>
                    <table
                      width="480"
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      align="center"
                      className="fullPadding"
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              fontSize: "12px",
                              fontFamily: "Open Sans  sans-serif",
                              color: "#5b5b5b",
                              lineHeight: "18px",
                              verticalAlign: "top",
                              textAlign: "left",
                            }}
                          >
                            Have a nice day.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr className="spacer">
                  <td height="50"></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td height="20"></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Invoice
