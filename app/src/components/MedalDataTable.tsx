import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { TMedalData, TMedalDataKeys } from "../../../npm_modules";
import { TSortParams, useMedalDataStore } from "../data";

export const MedalDataTable: React.FC<{
  data: TMedalData;
  sortParams?: TSortParams;
}> = ({ data, sortParams }) => {
  const keys = Object.keys(data[0]) as TMedalDataKeys;
  const medalDataStore = useMedalDataStore();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {keys.map((key, i) => (
                <TableCell
                  key={`h${i}`}
                  onClick={() => {
                    medalDataStore.fetchAndSetData({
                      useSort: true,
                      sortKey: key,
                      isSortAscending: true,
                    });
                  }}
                >
                  {key}{" "}
                  {sortParams?.useSort && sortParams?.sortKey === key
                    ? "^"
                    : ""}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={`r${i}`}>
                {keys.map((key, j) => (
                  <TableCell key={`c${i}${j}`}>{row[key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
