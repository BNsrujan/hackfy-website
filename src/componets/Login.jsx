import { motion } from 'framer-motion';
import { useState } from 'react';
import { styles } from '@/style';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Login Data:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center   h-screen bg-primary["
    >
      <h1 className={styles.sectionHeadText}>Login</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6  rounded shadow-md max-w-2xl">
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className='flex items-center justify-center'>
        <button
          type="submit"
          className={`${styles.buttonHead} `}
        >
          Login
        </button>
        </div>
        <div className='pt-2'>
        <Link to='/' className='text-blue-600 hover:text-blue-700  hover:underline'>Forgot Your Password?</Link>
        <p className='text-gray-700 justify-center flex'>or</p>
        <Link to='/signin' className='text-black flex items-center  justify-center pt-2'> <button className={`${styles.buttonHead}`}>Create new account</button></Link>
        </div>
      </form>
     
    </motion.div>
  );
};

export default LoginPage;
