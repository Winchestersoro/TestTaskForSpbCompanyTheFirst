import React, { useState } from "react";
import PaymentsTable from "../PaymentsTable/PaymentsTable";
import InvoicesTable from "../InvoicesTable/InvoicesTable";
import MatchPanel from "../MatchPanel/MatchPanel";
import Pagination from "../Pagination/Pagination";
import type { Payment, Invoice } from "../../types";
import styles from "./PaymentMatchForm.module.css";
import { Typography } from "@mui/material";

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

  const handleMatch = () => {
    if (selectedPayment && selectedInvoice) {
      setMatchResult(
        `Платеж №${selectedPayment.id} сопоставлен со счетом №${selectedInvoice.id}`
      );
      setSelectedPayment(null);
      setSelectedInvoice(null);
    }
  };

  return (
    <div className={styles.container}>
      <Typography variant="h5" className={styles.title}>
        Сопоставление счетов и платежей
      </Typography>
      {matchResult && (
        <Typography
          variant="subtitle1"
          style={{ color: "#388e3c", marginBottom: "1vw", textAlign: "center" }}
        >
          {matchResult}
        </Typography>
      )}
      <div className={styles.tables}>
        <div className={styles.tableBox}>
          <InvoicesTable
            invoices={invoices}
            onSelect={setSelectedInvoice}
            selectedId={selectedInvoice?.id}
          />
        </div>
        <div className={styles.tableBox}>
          <PaymentsTable
            payments={payments}
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
