import React from "react";
import type { Payment } from "../../types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import styles from "./PaymentsTable.module.css";

interface PaymentsTableProps {
  payments: Payment[];
  selectedId?: number;
  onSelect: (payment: Payment) => void;
}

const PaymentsTable: React.FC<PaymentsTableProps> = ({
  payments,
  selectedId,
  onSelect,
}) => (
  <TableContainer component={Paper} className={styles.tableContainer}>
    <Table stickyHeader size="small">
      <TableHead>
        <TableRow>
          <TableCell>№</TableCell>
          <TableCell>Дата создания</TableCell>
          <TableCell>Тип</TableCell>
          <TableCell>Сумма</TableCell>
          <TableCell>Заказчик</TableCell>
          <TableCell>Заказчик ИНН</TableCell>
          <TableCell>Исполнитель</TableCell>
          <TableCell>Исполнитель ИНН</TableCell>
          <TableCell>ФИО экзаменуемого</TableCell>
          <TableCell>Комментарий платежа</TableCell>
          <TableCell>Комментарий бухгалтера</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {payments.map((p) => (
          <TableRow
            key={p.id}
            hover
            selected={selectedId === p.id}
            onClick={() => onSelect(p)}
            className={selectedId === p.id ? styles.selectedRow : undefined}
            sx={{ cursor: "pointer" }}
          >
            <TableCell>{p.id}</TableCell>
            <TableCell>{p.createdAt}</TableCell>
            <TableCell>{p.type}</TableCell>
            <TableCell>{p.amount}</TableCell>
            <TableCell>{p.customer}</TableCell>
            <TableCell>{p.customerInn}</TableCell>
            <TableCell>{p.contractor}</TableCell>
            <TableCell>{p.contractorInn}</TableCell>
            <TableCell>{p.examineeName}</TableCell>
            <TableCell>{p.paymentComment}</TableCell>
            <TableCell>{p.accountantComment}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default PaymentsTable;
