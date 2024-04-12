import React from 'react';

const Form = () => {

	let name = "John";
	let email = "account@refero.design";
  return (
    <section className="max-md:w-full">
        <p className="font-medium flex justify-start mb-2 mr-6 md:justify-end">Already a member&#63;<a href="#" className="text-blue-800">&nbsp;Sign In</a></p>
			<form action="" className="">
					<h3 className="text-xl font-bold">Sign In to Dribbble</h3>
						<ul>
							<li className="p-6 text-red-600 font-semibold">&#x2022; Username has already been taken</li>
						</ul>

						<div className="flex justify-between space-x-1 my-7">
							<div className="w-1/2">
								<label htmlFor="uname" className="font-bold">Name</label>
								<input
								className="w-full mr-6 bg-[#FEEEEE] p-2 rounded outline-none" 
								type="text" 
								name="uname" 
								id="uname" 
								defaultValue={name} />
							</div>
							<div className="w-1/2">
								<label htmlFor="userName" className="font-bold">Username</label>
								<input
								className="w-full bg-[#FEEEEE] text-red-600 font-normal p-2 rounded outline-none" 
								type="text" 
								name="userName" 
								id="userName" 
								defaultValue={name}/>
							</div>
						</div>

						<div className="my-7">
							<label htmlFor="email" className="font-bold">Email</label>
							<br />
							<input
							className="w-full focus:bg-[#FEEEEE] border h-8 p-2 rounded focus:outline-none focus:border-0" 
							type="email" 
							name="email" 
							id="email" 
							defaultValue={email} />
						</div>

						<div className="my-7">
							<label htmlFor="password" className="font-bold">Password</label>
							<br />
							<input
							className="w-full focus:bg-[#FEEEEE] border h-8 p-2 rounded focus:outline-none focus:border-0" 
							placeholder="6+ Characters"
							type="password" 
							name="password" 
							id="password" />
						</div>

						<div className="my-7 flex">
						<input
							className="h-4 w-4 mr-2 mt-1" 
							type="checkbox" 
							name="terms" 
							id="terms" />
							<label htmlFor="terms" className="text-justify">Creating an account means you're okay with our <span className="font-semibold text-blue-800">Terms of Service, Privacy Policy,</span> and our default <span className="font-semibold text-blue-800">Notification Settings.</span></label>
						</div>

						<button type="submit" className="border outline-none w-40 h-10 bg-pink-500 text-sm font-semibold text-white rounded-lg">Create Account</button>
						<p className='text-gray-400 text-sm mt-4'>This site is protected by reCAPTCHA and the Google <span className="font-semibold text-blue-800">Privacy Policy,</span> and <span className="font-semibold text-blue-800">Terms of Service </span>apply.</p>
			</form>

    </section>
  );
};

export default Form;