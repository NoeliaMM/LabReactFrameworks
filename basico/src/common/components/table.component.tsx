import React from "react";
import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { PageContext } from "@/core/providers";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

interface Props<T> {
  data: T[];
  columns: { label: string; key: keyof T }[];

  total?: number;
  rowsPerPage: number;
  renderRow: (item: T) => React.ReactNode;
  rowsPerPageOptions?: number[];
}

export const TableComponent = <T,>({
  data,
  columns,
  total,
  renderRow,
  rowsPerPage,
  rowsPerPageOptions,
}: Props<T>) => {
  const { page, setPage, setRowsPerPage } = React.useContext(PageContext);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    console.log("handle", event);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell align="left" key={column.label}>
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(total
              ? data
              : data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            ).map((item, index) => (
              <TableRow key={index}>{renderRow(item)}</TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions ?? [5, 10, 25]}
        component="div"
        count={total ?? data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event, newPage) => handleChangePage(event, newPage)}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
