import {toast} from "react-toastify"

export const ErrorToast = (message)=>{
   toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });   
}

export const SuccessToast = (message)=>{
   toast.success(message)
}

export const WarningToast = (message)=>{
   toast.warning(message)
}