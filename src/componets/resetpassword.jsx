// src/SignIn.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const ResetPassword = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
     className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <img src="logo.png" alt="Phylum" className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-3xl font-extrabold text-white">Reset your Password</h2>
        </div>
        <form className="space-y-6">
          <div className=" shadow-sm -space-y-px ">
            <div className='rounded-lg '>
              <label htmlFor="email-address" className="sr-only">new-password</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className=" rounded-sm appearance-none  relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="new-password"
              />
            </div>
            <div className='pt-6'>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-sm  relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Conferm-Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
          <p className="mt-1 text-sm text-gray-400">Created for developers by developers</p>
            </div>

            
          </div>

          <div>
            <button
              type="submit"
              className="group ca relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset The Password
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            Log in
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ResetPassword;

