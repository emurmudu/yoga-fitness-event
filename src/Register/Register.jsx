import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = useContext(AuthContext);



    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        if (password.length < 6) {
            setRegisterError('Password length should be 6 or above');
            return;
        }
        else if (!/(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/.test(password)) {
            setRegisterError('Please use at least one special character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Please use at least one upper case character');
            return;
        }

        setRegisterError('');
        setSuccess('');

        /* createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                toast('You have registered successfully', {
                    position: toast.POSITION.TOP_CENTER,
                });
            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message);
            }) */



        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast('You have registered successfully', {
                    position: toast.POSITION.TOP_CENTER,
                });
                e.target.reset();
                navigate("/");

            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message);
            })

    }
    return (
        <div className=" mx-auto">

            <h2 className=" text-center text-3xl mt-4 mb-4">Please Register</h2>

            <div className="">
                <form onSubmit={handleRegister} className="card-body w-3/4 md:w-2/4 lg:w-2/5 mx-auto shadow-2xl">
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
                        <div className=" relative">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full mx-auto py-2 px-4" required />
                            <span className="absolute top-4 right-6" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                            </span>
                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">Register</button>
                        <ToastContainer />
                        {
                            registerError && <p className=" text-red-600 mt-2">{registerError}</p>
                        }
                    </div>
                    <p>Have an account? <NavLink className=" text-pink-400 font-bold" to="/login">Login</NavLink></p>
                </form>



            </div>
        </div>



    );
};

export default Register;