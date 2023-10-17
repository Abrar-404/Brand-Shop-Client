import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center items-center lg:text-left">
            <h1 className="text-5xl w-full text-white font-bold">Login now!</h1>
            <img
              className="w-[200px] h-[180px] mt-10 rounded-full"
              src="https://i.ibb.co/279NXhY/daniel-tolmachov-bluefire02.gif"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-slate-700 bg-opacity-60">
            {/* {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                {error}
              </div>
            )} */}
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Password
                  </span>
                  <a
                    href="#"
                    className="label-text-alt link text-white font-bold link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-white font-medium">
                New to this World? Please{' '}
                <Link className="text-blue-700 font-bold" to="/register">
                  Register
                </Link>
              </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
