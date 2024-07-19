// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { styles } from '@/style';
// import { Link } from 'react-router-dom';

// const RegistrationPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log('Registration Data:', formData);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="flex flex-col items-center justify-center h-screen bg-primary"
//     >
//       <h1 className={styles.sectionHeadText}>Register</h1>
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
//         <div className="mb-4">
//           <label className="block text-gray-700">First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded mt-4"
//         >
//           Register
//         </button>
//         <Link to='/login' className='text-blue-600 hover:text-blue-700 hover:underline'>Have an account?</Link>
//       </form>
//     </motion.div>
//   );
// };

// export default RegistrationPage;


// src/SignUp.js
import React from 'react';

const RegistrationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <img src="logo.png" alt="Phylum" className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-3xl font-extrabold text-white">Create your account</h2>
          <p className="mt-2 text-sm text-gray-400">Created for developers by developers</p>
        </div>
        <form className="space-y-6">
          <div className="rounded-md  grid gap-6 shadow-sm -space-y-px">
            <div>
              <label htmlFor="full-name" className="sr-only">Full name</label>
              <input
                id="full-name"
                name="full-name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-sm  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="terms-and-conditions"
                name="terms-and-conditions"
                type="checkbox"
                required
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="terms-and-conditions" className="ml-2 block text-sm text-gray-200">
                I agree to the Terms & Conditions
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create my account
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Already have an account? Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
