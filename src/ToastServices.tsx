import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ShowToastProps {
  message: string;
  type?: string;
  autoClose?: number;
}

const ToastServices = {
  showToast: ({ message, type = "info", autoClose = 1000 }: ShowToastProps) => {
    switch (type) {
      case "success":
        toast.success(message, { autoClose });
        break;
      case "error":
        toast.error(message, { autoClose });
        break;
      case "warning":
        toast.warning(message, { autoClose });
        break;
      default:
        toast.info(message, { autoClose });
        break;
    }
  },
};

export default ToastServices;
