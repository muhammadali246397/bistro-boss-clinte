import React, { useContext, useEffect, useRef, useState } from 'react';
import img from '../../assets/others/authentication.png'
import img2 from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthPorvider';


const Login = () => {
    const [disabled,setdisabled] = useState(true)
    const {handleSignIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        handleSignIn(email,password)
        .then(result => {
            console.log(result)
            alert('complete login')
            form.reset()
            navigate(from)
        })
        .catch(error => console.log(error))
    }
    const handleVerify = (event) => {
       
        const value = event.target.value;
       if(validateCaptcha(value) == true){
        setdisabled(false)
       }

    }
    return (
        <div style={{ backgroundImage: `url(${img})` }} className="hero">
            <div className="hero-content flex w-11/12 space-x-4 border-2 " style={{ backgroundImage: `url(${img})`, boxShadow: '2px 2px 5px' }}>
                <div className="text-center lg:text-left">
                    <img src={img2} alt="" />
                </div>
                <div className="card flex-shrink-0 w-2/5 ">
                    <h3 className='text-3xl text-center font-bold'>Login</h3>
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleVerify} type="text" name='captcha' placeholder="type capthca" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" disabled={disabled} value='Sign-in' className='btn btn-warning text-white' />
                        </div>
                        <div className='text-center'>
                            <p className='text-warning'>New here?<Link to="/signup"> create a account</Link></p>
                            <p>or sign in with</p>
                            <button className='btn btn-outline mx-2 btn-circle'>F</button>
                            <button className='btn btn-outline mx-2  btn-circle'>G</button>
                            <button className='btn btn-outline btn-circle mx-2'>Git</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;