import toast, { Toaster } from 'react-hot-toast';

const ErrorMessage = () => {
    return (
        <Toaster notify = {() => toast('Whoops, something went wrong! Please try reloading this page!')}
        position="top-center"
        reverseOrder={false}
      />
    )
  }

export default ErrorMessage;