import { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';


const RightSideHome = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate("/");
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className=' pr-10 md:text-left text-center'>
            <div className='p-4 space-y-3 mb-6 mt-4'>
                <h2 className=" text-lg md:text-2xl text-pink-400 font-bold mb-2">Login With</h2>
                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>

            </div>
            <div className='p-4 mb-6 w-full'>
                <h2 className="text-lg md:text-2xl text-pink-400 font-bold mb-4">Find Us on</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href="https://www.facebook.com/" target='_blank' rel="noreferrer">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border-x' href="https://twitter.com/" target='_blank' rel="noreferrer">
                    <FaTwitter className='mr-2'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                    <FaInstagram className='mr-2'></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
        </div>
    );
};

export default RightSideHome;