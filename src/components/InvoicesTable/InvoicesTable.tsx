import React from "react";
import type { Invoice } from "../../types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import styles from "./InvoicesTable.module.css";

interface InvoicesTableProps {
  invoices: Invoice[];
  selectedId?: number;
  onSelect: (invoice: Invoice) => void;
}

const InvoicesTable: React.FC<InvoicesTableProps> = ({
  invoices,
  selectedId,
  onSelect,
}) => (
  <TableContainer component={Paper} className={styles.tableContainer}>
    <Table stickyHeader size="small">
      <TableHead>
        <TableRow>
          <TableCell>№</TableCell>
          <TableCell>Тип</TableCell>
          <TableCell>ФИО экзаменуемого</TableCell>
          <TableCell>Квалификация</TableCell>
          <TableCell>Сумма</TableCell>
          <TableCell>Заказчик</TableCell>
          <TableCell>Заказчик ИНН</TableCell>
          <TableCell>Исполнитель</TableCell>
          <TableCell>Исполнитель ИНН</TableCell>
          <TableCell>Назначение платежа</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {invoices.map((inv) => (
          <TableRow
            key={inv.id}
            hover
            selected={selectedId === inv.id}
            onClick={() => onSelect(inv)}
            className={selectedId === inv.id ? styles.selectedRow : undefined}
            sx={{ cursor: "pointer" }}
          >
            <TableCell>{inv.id}</TableCell>
            <TableCell>{inv.type}</TableCell>
            <TableCell>{inv.examineeName}</TableCell>
            <TableCell>{inv.qualification}</TableCell>
            <TableCell>{inv.amount}</TableCell>
            <TableCell>{inv.customer}</TableCell>
            <TableCell>{inv.customerInn}</TableCell>
            <TableCell>{inv.contractor}</TableCell>
            <TableCell>{inv.contractorInn}</TableCell>
            <TableCell>{inv.paymentPurpose}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default InvoicesTable;
