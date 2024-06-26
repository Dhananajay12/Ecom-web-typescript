import React, { useState } from 'react'
import { Eye, EyeOff, KeyRound, User, UserPlus } from 'lucide-react'
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isShow, setIsShow] = useState(false)
	return (

		<form className='flex justify-center mt-5'>
			<div className='max-w-[400px] md:min-w-[600px]'>
				<div className='flex justify-between'>
					<Link to="/login" className='link-login mr-1'>Login</Link>
					<Link to="/register" className='link-login  ml-1'>Register</Link>
				</div>
				<div className='flex'>
					<User strokeWidth={2.2} style={{color:"grey"}} className='icon-style-login' />
					<input type='text' placeholder='name' className='input-style-login'></input>
				</div>

				<div className='flex'>
					<UserPlus strokeWidth={2.2} style={{ color: "grey" }} className='icon-style-login' />
					<input type='email' placeholder='email' className='input-style-login'></input>
				</div>
				
				<div className='flex'>
					<KeyRound strokeWidth={2.2} style={{ color: "grey" }}  className='icon-style-login' />
					<div className='flex w-100'>
						<input className='input-style-login' type={isShow ? 'text' : 'password'} placeholder='password'></input>
						<div className='password-show' onClick={() => setIsShow(!isShow)}>
							{isShow ? <Eye strokeWidth={2.2} style={{ color: "grey" }} /> : <EyeOff strokeWidth={2.2} style={{ color: "grey" }} />}
						</div>
					</div>
				</div>
				<div className='flex'>
					<KeyRound strokeWidth={2.2} style={{ color: "grey" }}  className='icon-style-login' />
					<div className='flex w-100'>
						<input className='input-style-login' type={isShow ? 'text' : 'password'} placeholder='confirm password'></input>
						<div className='password-show' onClick={() => setIsShow(!isShow)}>
							{isShow ? <Eye strokeWidth={2.2} style={{ color: "grey" }} /> : <EyeOff strokeWidth={2.2} style={{ color: "grey" }} />}
						</div>
					</div>
				</div>
				<button className='sub-button'>Submit</button>
			</div>

		</form>
	)
}

export default Register