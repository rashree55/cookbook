"use client";
import { useState } from 'react';

export default function SignInPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full flex">
        
        
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-12 flex-1 flex flex-col justify-center text-white relative">
          <div className="mb-8">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-8">
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">
            Join the<br />
            Community
          </h1>
          
          <p className="text-blue-100 text-lg">
            Connect with like-minded people and cook new delicacies
          </p>
        </div>

        
        <div className="flex-1 p-12">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Create Account</h2>
            
            <div className="space-y-6">
              
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Write your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>

              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>

              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Create Account
              </button>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Log In
                </button>
              </p>
            </div>

            
            {/*}
            <div className="mt-6">
              <p className="text-center text-gray-500 mb-4">or continue with</p>
              <div className="flex justify-center space-x-4">
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-xl font-bold text-gray-600">G</span>
                </button>
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-xl font-bold text-gray-600">f</span>
                </button>
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-xl font-bold text-gray-600">🍎</span>
                </button>
              </div>
            </div>
            */}


          </div>
        </div>
      </div>
    </div>
  );
}