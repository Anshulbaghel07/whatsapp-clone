import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, { displayName: name });
      navigate('/interest');
    } catch (err) {
      setError('Registration failed. Try again.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-100 via-white to-green-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Create Your Account</h2>

        <form onSubmit={handleRegister} className="space-y-5">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div>
            <label className="block text-sm mb-1 font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md font-medium hover:bg-green-600 transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-5 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-green-600 hover:underline font-medium">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
