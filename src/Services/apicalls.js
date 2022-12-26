import { Navigate, useNavigate } from "react-router-dom";
import { ERROR_TOAST, WARNING_TOAST } from "Components";
import Endpoints from "Services/endpoints";


export async function handleRegistrationSubmit(values) {
    // form submission
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          countryCode: "GH",
          isoCode: "233",
        }),
      };
      // been waiting for a while
      // register to unlock some special features
      const apiResponse = await fetch(Endpoints.CREATE_ACCOUNT, requestOptions);

      console.log(apiResponse);

      const data = await apiResponse.json();
      console.log({
        message: "making a call to the go backend..",
        body: {
          response: data,
          registrationData: values,
        },
      });

      if (data.systemCode === "U01") throw new Error(data.error.errMsg);

      if (data.systemCode === "U02") {
        WARNING_TOAST(
          "You have not complete your registration!! Redirecting to OTP confirmation screen"
        );
        setTimeout(() => {
            return <Navigate to={"/auth/register/otp-confirm"} state={values}/>
        }, 5000);
      }

      if (data.code === "00") {
        <Navigate to={"/auth/register/otp-confirm"} replace state={values}/>
      }
    } catch (error) {
      console.log(error.message);
      ERROR_TOAST(error.message);
    }
  }