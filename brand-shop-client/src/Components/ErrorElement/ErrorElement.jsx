import Swal from 'sweetalert2';

const ErrorElement = () => {
  return Swal.fire({
    icon: 'error',
    title: 'Oh Crap!!',
    text: 'Driver Got Crashed!',
    footer: '<a href="">Why do I have this issue?</a>',
  });
};

export default ErrorElement;
