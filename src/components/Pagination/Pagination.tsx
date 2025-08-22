import React from "react";
import { Pagination as MuiPagination } from "@mui/material";
import styles from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, count, onChange }) => (
  <div className={styles.pagination}>
    <MuiPagination
      page={page}
      count={count}
      color="primary"
      onChange={onChange}
    />
  </div>
);

export default Pagination;
