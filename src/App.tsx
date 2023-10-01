import { BrowserRouter } from "react-router-dom";
import CustomProvider from "./redux/provider";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CustomProvider>
          <ToastContainer />
        </CustomProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
