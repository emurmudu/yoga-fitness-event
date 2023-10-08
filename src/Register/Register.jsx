import { Link, NavLink } from "react-router-dom";

const Register = () => {


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

    }
    return (
        <div className=" mx-auto">
            {/* <Navbar></Navbar> */}
            <h2 className=" text-center text-3xl mt-4 mb-4">Please Register</h2>

            <div className="">
                <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto shadow-2xl">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-secondary">Register</button>
                    </div>
                    <p>Have an account? <NavLink className=" text-pink-400 font-bold" to="/login">Login</NavLink></p>
                </form>

            </div>
        </div>



    );
};

export default Register;