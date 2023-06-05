import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import img from '../../assets/others/authentication.png'
import img2 from '../../assets/others/authentication2.png'
import { AuthContext } from '../AuthProvider/AuthPorvider';

const Signup = () => {
       
        const {handleSignUp,  updateuser} = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
            const {email,password,name,photo} = data
            handleSignUp(email,password)
            .then(result => {
                const users = result.user
                console.log(users)
                updateuser(name,photo)
                .then(() => {
                    const allUser = {name:name,email:email}
                    fetch('http://localhost:4000/user',{
                        method:'POST',
                        headers:{
                            "content-type":"application.json"
                        },
                        body:JSON.stringify(allUser)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                    reset()
                    alert('profile updated')
                })
                .catch((error) => console.log(error.message))
              
            })
           
        };
    return (
        <div style={{ backgroundImage: `url(${img})` }} className="hero max-h-screen">
        <div className="hero-content flex flex-row-reverse w-11/12 space-x-4 border-2 p-4 " style={{ backgroundImage: `url(${img})`, boxShadow: '2px 2px 5px' }}>
            <div className="text-center lg:text-left">
                <img src={img2} alt="" />
            </div>
            <div className="card flex-shrink-0 w-2/5 ">
                <h3 className='text-3xl text-center font-bold'>Sign up</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  {...register("name")} placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text"  {...register("photo")} placeholder="Pthoto Url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"  {...register("email")} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} placeholder="password" className="input input-bordered" />
                    </div>
                  
                    <div className="form-control mt-6">
                        <input type="submit"  value='Sign-up' className='btn btn-warning text-white' />
                    </div>
                    <div className='text-center'>
                        <p className='text-warning'>Allready resisterd?<Link to='/login'>go to login</Link></p>
                        <p>or sign signup with</p>
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

export default Signup;