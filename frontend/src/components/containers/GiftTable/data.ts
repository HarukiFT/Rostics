import { GridColDef } from "@mui/x-data-grid";

export const GiftColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 75, type: "number" },
  { field: "code", headerName: "Код", width: 150, type: "string" },
  { field: "owner", headerName: "Получатель", width: 150, type: "number" },
  { field: "createdAt", headerName: "Создан", width: 200, type: "dateTime" },
  { field: "updatedAt", headerName: "Обновлен", width: 200, type: "dateTime" },
];
