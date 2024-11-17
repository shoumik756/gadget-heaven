import { Helmet } from "react-helmet";

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Login | Gadgets Heaven</title>
            </Helmet>
            <div className="hero bg-[#9538E2] mt-[70px] min-h-[270px] ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-white">Login</h1>

                    </div>
                </div>
            </div>
            <div className="card bg-base-100 max-w-screen-sm mx-auto m-20 shrink-0 shadow-2xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;