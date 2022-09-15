import {toast} from "react-toastify"

export const ErrorToast = ({message})=>{
   toast.error(message)
}

export const SuccessToast = (message)=>{
   toast.success(message)
}

export const WarningToast = ({message})=>{
   toast.warning(message)
}