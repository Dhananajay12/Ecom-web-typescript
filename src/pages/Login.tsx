import { Eye, EyeOff, KeyRound, UserPlus } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';


const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isShow, setIsShow] = useState(false)
	return (
		<>
		
				<form className='flex justify-center mt-5'>
					<div className='max-w-[400px] md:min-w-[600px]'>
						<div className='flex justify-between'>
							<Link to="/login" className='link-login'>Login</Link>
						<Link to="/register" className='link-login'>Register</Link>
						</div>
						<div className='flex'>
							<UserPlus className='icon-style-login' />
							<input type='email' placeholder='email' className='input-style-login'></input>
						</div>
						<div className='flex'>
							<KeyRound className='icon-style-login' />
							<div className='flex'>
								<input className='input-style-login' type={isShow ? 'text' : 'password'} placeholder='password'></input>
								<div className='password-show' onClick={() => setIsShow(!isShow)}>
									{isShow ? <Eye /> : <EyeOff />}
								</div>

							</div>
						</div>

						<Button className='sub-button'>Submit</Button>
					</div>

				</form>
			
		</>
	)
}

export default Login