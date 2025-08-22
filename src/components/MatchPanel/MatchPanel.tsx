import React from "react";
import type { Payment, Invoice } from "../../types";
import { Button, Paper, Typography } from "@mui/material";
import styles from "./MatchPanel.module.css";

interface MatchPanelProps {
  payment: Payment | null;
  invoice: Invoice | null;
  onMatch: () => void;
}

const MatchPanel: React.FC<MatchPanelProps> = ({
  payment,
  invoice,
  onMatch,
}) => {
  const canMatch = !!payment && !!invoice;

  return (
    <Paper className={styles.panel} elevation={3}>
      <Typography variant="subtitle1" className={styles.text}>
        {canMatch
          ? `Сопоставить платеж №${payment?.id} и счет №${invoice?.id}`
          : "Выберите платеж и счет для сопоставления"}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        disabled={!canMatch}
        onClick={onMatch}
      >
        Сопоставить
      </Button>
    </Paper>
  );
};

export default MatchPanel;
