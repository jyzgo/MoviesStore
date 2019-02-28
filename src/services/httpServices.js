import Axios from "axios";
import { toast } from "react-toastify";
// import * as Sentry from "@sentry/browser";

// Sentry.init({
//   dsn: "https://0e49734ab355441490eadd4cf0ab7453@sentry.io/1401272"
// });

Axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("Logging the error", error);
    toast.error("An unexpected error occurrred");
    // Sentry.withScope(scope => {
    //   Object.keys(error).forEach(key => {
    //     scope.setExtra(key, error[key]);
    //   });
    //   Sentry.captureException(error);
    // });
  }

  return Promise.reject(error);
});

export default {
  get: Axios.get,
  post: Axios.put,
  delete: Axios.delete
};
