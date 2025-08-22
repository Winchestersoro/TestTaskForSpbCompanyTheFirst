import React, { useState } from "react";
import PaymentsTable from "../PaymentsTable/PaymentsTable";
import InvoicesTable from "../InvoicesTable/InvoicesTable";
import MatchPanel from "../MatchPanel/MatchPanel";
import Pagination from "../Pagination/Pagination";
import type { Payment, Invoice } from "../../types";
import styles from "./PaymentMatchForm.module.css";
import { Typography, TextField } from "@mui/material";

const payments: Payment[] = [
  {
    id: 1,
    createdAt: "2025-08-20",
    type: "электронный",
    amount: 10000,
    customer: "ООО Ромашка",
    customerInn: "1234567890",
    contractor: "ИП Иванов",
    contractorInn: "0987654321",
    examineeName: "Петров П.П.",
    paymentComment: "Оплата за обучение",
    accountantComment: "Проверено",
  },
];

const invoices: Invoice[] = [
  {
    id: 1,
    type: "обучение",
    examineeName: "Петров П.П.",
    qualification: "Эксперт",
    amount: 10000,
    customer: "ООО Ромашка",
    customerInn: "1234567890",
    contractor: "ИП Иванов",
    contractorInn: "0987654321",
    paymentPurpose: "Оплата за обучение",
  },
];

const PaymentMatchForm: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [page, setPage] = useState(1);
  const [count] = useState(10);
  const [matchResult, setMatchResult] = useState<string>("");
  const [paymentFilter, setPaymentFilter] = useState("");
  const [invoiceFilter, setInvoiceFilter] = useState("");

  const handleMatch = () => {
    if (selectedPayment && selectedInvoice) {
      setMatchResult(
        `Платеж №${selectedPayment.id} сопоставлен со счетом №${selectedInvoice.id}`
      );
      setSelectedPayment(null);
      setSelectedInvoice(null);
    }
  };

  const filteredPayments = payments.filter((p) =>
    p.examineeName.toLowerCase().includes(paymentFilter.toLowerCase())
  );
  const filteredInvoices = invoices.filter((inv) =>
    inv.examineeName.toLowerCase().includes(invoiceFilter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Typography variant="h5" className={styles.title}>
        Сопоставление счетов и платежей
      </Typography>
      {matchResult && (
        <Typography
          variant="subtitle1"
          style={{
            color: "#388e3c",
            marginBottom: "1vw",
            textAlign: "center",
          }}
        >
          {matchResult}
        </Typography>
      )}
      <div className={styles.tables}>
        <div className={styles.tableBox}>
          <Typography variant="subtitle1" className={styles.label}>
            Счета
          </Typography>
          <TextField
            label="Фильтр по ФИО"
            variant="outlined"
            size="small"
            value={invoiceFilter}
            onChange={(e) => setInvoiceFilter(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <InvoicesTable
            invoices={filteredInvoices}
            onSelect={setSelectedInvoice}
            selectedId={selectedInvoice?.id}
          />
        </div>
        <div className={styles.tableBox}>
          <Typography variant="subtitle1" className={styles.label}>
            Платежи
          </Typography>
          <TextField
            label="Фильтр по ФИО"
            variant="outlined"
            size="small"
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <PaymentsTable
            payments={filteredPayments}
            onSelect={setSelectedPayment}
            selectedId={selectedPayment?.id}
          />
        </div>
      </div>
      <MatchPanel
        payment={selectedPayment}
        invoice={selectedInvoice}
        onMatch={handleMatch}
      />
      <Pagination
        page={page}
        count={count}
        onChange={(_, value) => setPage(value)}
      />
    </div>
  );
};

export default PaymentMatchForm;
