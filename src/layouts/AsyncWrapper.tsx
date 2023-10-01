import Spinner from "@/components/Spinner";
import { Alert, AlertTitle } from "@mui/material";

function AsyncWrapper(props: AsyncWrapperProps) {
  if (props.loading) {
    return <Spinner />;
  } else if (props.error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {JSON.stringify(props.error)}
      </Alert>
    );
  } else if (props.fulfilled) {
    return props.children;
  } else {
    return <>Something has happen</>;
  }
}

AsyncWrapper.defaultValue = {
  loading: true,
  fulfilled: false,
  error: null,
  children: <></>,
};

export default AsyncWrapper;
