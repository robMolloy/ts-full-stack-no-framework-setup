import * as React from "react";
import { useMedalDataStore } from "./data";
import { MedalDataTable } from "./components/MedalDataTable";
import { Box, CircularProgress } from "@mui/material";

function App() {
  const medalDataStore = useMedalDataStore();
  React.useEffect(() => {
    medalDataStore.fetchAndSetData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {medalDataStore.data === "LOADING" && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {medalDataStore.data === "ERROR" &&
        "Something went wrong. Is the server running?"}
      {typeof medalDataStore.data !== "string" && (
        <MedalDataTable
          data={medalDataStore.data}
          sortParams={medalDataStore.sortParams}
        />
      )}
    </div>
  );
}

export default App;
