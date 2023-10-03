import { BrowserRouter } from "react-router-dom";
import CustomProvider from "./redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "./ErrorBoundary";
import MainRoutes from "./routes";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CustomProvider>
          <MainRoutes />
          <ToastContainer />
        </CustomProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
