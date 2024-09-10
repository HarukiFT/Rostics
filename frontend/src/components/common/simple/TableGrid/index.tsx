import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { GiftModel } from "../../../../core/models";
import { GridLocale } from "../../../../core/locale";

export interface Props {
  columns: GridColDef[];
  rows: GridRowsProp<GiftModel.Data>;
  height: number;
}

export const TableGrid: React.FC<Props> = ({ columns, rows, height }) => {
  return (
    <DataGrid
      columns={columns}
      rows={rows}
      localeText={GridLocale.Locale}
      sx={{ height: `${height}px` }}
    />
  );
};
