import { Backdrop } from "@mui/material";
import Spinner from "./Spinner";

function BackDropLoading({ loading = false }: { loading: boolean }) {
  return (
    <Backdrop open={loading}>
      <Spinner></Spinner>
    </Backdrop>
  );
}

export default BackDropLoading;
