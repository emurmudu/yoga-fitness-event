import { NavLink } from "react-router-dom";

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

    }
    return (
        <div className=" mx-auto">
            {/* <Navbar></Navbar> */}
            <h2 className=" text-center text-3xl mt-4 mb-4">Please Login</h2>

            <div className="">
                <form onSubmit={handleLogin} className="card-body w-3/4 md:w-2/4 lg:w-2/5 mx-auto shadow-2xl">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">Login</button>
                    </div>
                    <p>Not have an account? <NavLink className=" text-pink-400 font-bold" to="/register">Register</NavLink></p>
                </form>

            </div>
        </div>
    );
};

export default Login;