import { Box, CssBaseline, Grid2, ThemeProvider } from "@mui/material";
import { lightTheme } from "../../core/themes/light.theme";
import { Header } from "../common/smart/Header";
import { Outlet } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Box
        display={"flex"}
        flexDirection={"column"}
        pt={3}
        height={1}
        width={1}
      >
        <Header maxWidth="lg" />
        <Box flexGrow={1} width={1} mt={2}>
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
