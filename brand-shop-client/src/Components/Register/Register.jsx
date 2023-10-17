import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-white font-bold">Register!</h1>
            <img
              className="w-[200px] h-[190px] mt-10 rounded-full"
              src="https://i.ibb.co/9h9vZ2q/rsc2020-elpradiant2020.gif"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-700 bg-opacity-60">
            <form className="card-body">
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

              {/* <div
                className="w-full justify-center items-center flex mx-auto"
                onClick={handleGoogleSignIn}
              >
                <div className="text-3xl -rotate-45 w-9 text-red-600">
                  <GiEnergyArrow></GiEnergyArrow>
                </div>
                <Button>
                  <button className="text-3xl w-full text-center flex mx-auto">
                    <FcGoogle></FcGoogle>
                  </button>
                </Button>
                <div className="text-3xl w-9 -rotate-[225deg] text-red-600">
                  <GiEnergyArrow></GiEnergyArrow>
                </div>
              </div> */}
            </form>
            {/* {errorRegi && (
              <p className="text-center text-red-500">{errorRegi}</p>
            )} */}
            {/* {successRegi && <p className="text-green-500">{successRegi}</p>} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
