import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { GiEnergyArrow } from 'react-icons/gi';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
const Register = () => {
  const { registerUser, googleRegister } = useContext(AuthContext);
  const naviGate = useNavigate();

  const handleGoogleSignIn = () => {
    googleRegister()
      .then(result => {
        Swal.fire({
          imageUrl: `https://i.ibb.co/H4HnLmL/yippee-yay.gif`,
          title: 'WOOHOOO!!!! Welcome To The World!!!!',
          width: 600,
          padding: '3em',
          color: '#7CFC00',
          background: '#fff url()',
          backdrop: `
    rgba(0,0,123,0.4)
    top
    no-repeat
  `,
        });

        naviGate('/login');
        console.log(result.user);
        const loggedUser = result?.user;
        const savedUser = { email: loggedUser?.email, product: [] };
        console.log(savedUser);

        fetch('https://brand-shop-server-j4ozlbyuj-abrar-404.vercel.app/user', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(savedUser),
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              Swal.fire({
                imageUrl: `https://i.ibb.co/H4HnLmL/yippee-yay.gif`,
                title: 'WOOHOOO!!!! Welcome To The World!!!!',
                width: 600,
                padding: '3em',
                color: '#7CFC00',
                background: '#fff url()',
                backdrop: `
                          rgba(0,0,123,0.4)
                          top
                          no-repeat
                          `,
              });
            }
          })
          .catch(error => {
            console.error(error);
            Swal.fire({
              imageUrl: `https://i.ibb.co/ZLj6kP2/200w.gif`,
              title: 'Email and Password did not match',
              width: 600,
              padding: '3em',
              color: '#C70039 ',
              background: '#fff url()',
              backdrop: `
        rgba(0,0,123,0.4)
        top
        no-repeat
      `,
            });
          });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleRegisterUser = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    console.log(email, name, password);

    if (password.length < 6) {
      Swal.fire({
        imageUrl: `https://i.ibb.co/hfQtDDz/piffle-error.gif`,
        title: 'Password should be at least 6 characters long.',
        width: 600,
        padding: '3em',
        color: '#C70039 ',
        background: '#fff url()',
        backdrop: `
    rgba(0,0,123,0.4)
    top
    no-repeat
  `,
      });
      return;
    }

    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        imageUrl: `https://i.ibb.co/hfQtDDz/piffle-error.gif`,
        title: 'Password should contain at least one uppercase character.',
        width: 600,
        padding: '3em',
        color: '#C70039 ',
        background: '#fff url()',
        backdrop: `
    rgba(0,0,123,0.4)
    top
    no-repeat
  `,
      });
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Swal.fire({
        imageUrl: `https://i.ibb.co/hfQtDDz/piffle-error.gif`,
        title: 'Password should contain at least one special character.',
        width: 600,
        padding: '3em',
        color: '#C70039 ',
        background: '#fff url()',
        backdrop: `
    rgba(0,0,123,0.4)
    top
    no-repeat
  `,
      });
      return;
    }

    registerUser(email, password)
      .then(result => {
        console.log(result);
        Swal.fire({
          imageUrl: `https://i.ibb.co/H4HnLmL/yippee-yay.gif`,
          title: 'WOOHOOO!!!! Welcome To The World!!!!',
          width: 600,
          padding: '3em',
          color: '#7CFC00',
          background: '#fff url()',
          backdrop: `
    rgba(0,0,123,0.4)
    top
    no-repeat
  `,
        });
        const loggedUser = result?.user;
        const savedUser = { email: loggedUser?.email, product: [] };
        console.log(savedUser);
        naviGate('/login');
        fetch('https://brand-shop-server-j4ozlbyuj-abrar-404.vercel.app/user', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(savedUser),
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              Swal.fire({
                imageUrl: `https://i.ibb.co/H4HnLmL/yippee-yay.gif`,
                title: 'WOOHOOO!!!! Welcome To The World!!!!',
                width: 600,
                padding: '3em',
                color: '#7CFC00',
                background: '#fff url()',
                backdrop: `
                          rgba(0,0,123,0.4)
                          top
                          no-repeat
                          `,
              });
            }
          })
          .catch(error => {
            console.error(error);
            Swal.fire({
              imageUrl: `https://i.ibb.co/ZLj6kP2/200w.gif`,
              title: 'Email and Password did not match',
              width: 600,
              padding: '3em',
              color: '#C70039 ',
              background: '#fff url()',
              backdrop: `
        rgba(0,0,123,0.4)
        top
        no-repeat
      `,
            });
          });
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-full lg:text-left">
            <h1 className="text-5xl text-white font-bold">Register Now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-700 bg-opacity-60">
            <form onSubmit={handleRegisterUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt text-white font-bold link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>

              {
                <p className="text-white">
                  Already Have An Account? Please{' '}
                  <Link className="font-bold text-blue-700" to="/login">
                    Login
                  </Link>
                </p>
              }

              <div
                onClick={handleGoogleSignIn}
                className="w-full justify-center items-center flex mx-auto"
              >
                <div className="text-3xl -rotate-45 w-9 text-red-600">
                  <GiEnergyArrow></GiEnergyArrow>
                </div>

                <div className="flex justify-center">
                  <button className="text-3xl w-full text-center flex mx-auto">
                    <FcGoogle></FcGoogle>
                  </button>
                </div>

                <div className="text-3xl w-9 -rotate-[225deg] text-red-600">
                  <GiEnergyArrow></GiEnergyArrow>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
