import { Box } from "@mui/material";
import { ZoneContainer } from "./styled";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { parse } from "papaparse";

export interface Props {
  callback: (promos: string[]) => void;
}

export const Dropzone: React.FC<Props> = ({ callback }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      parse(file, {
        complete: (results) => {
          const data = results.data;
          const firstColumn = data
            .map((row: any) => row[0])
            .filter((row) => row !== "");
          callback(firstColumn);
        },
        header: false,
      });
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <ZoneContainer {...getRootProps()}>
      <input {...getInputProps()} />
    </ZoneContainer>
  );
};
