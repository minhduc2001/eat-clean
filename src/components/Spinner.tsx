import { CircularProgress } from "@mui/material";

function Spinner() {
  return (
    <div className="flex justify-center items-center h-96">
      <CircularProgress />
    </div>
  );
}

export default Spinner;
