import { toast } from 'react-toastify';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastOptions {
  type: ToastType;
  message: string;
  duration?: number;
}

export const useToast = () => {
  const showToast = ({ type, message, duration = 3000 }: ToastOptions) => {
    switch (type) {
      case 'success':
        toast.success(message, { autoClose: duration });
        break;
      case 'error':
        toast.error(message, { autoClose: duration });
        break;
      case 'info':
        toast.info(message, { autoClose: duration });
        break;
      case 'warning':
        toast.warning(message, { autoClose: duration });
        break;
    }
  };

  return { showToast };
};
