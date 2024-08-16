import React, { useState } from 'react';

const PricingSection = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-6 py-12">
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 rounded dark:bg-gray-800 dark:text-gray-100"
            >
              Toggle {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Basic', 'Standard', 'Premium'].map((plan) => (
              <div key={plan} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{plan}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan === 'Basic' ? 'Ideal for individuals' : plan === 'Standard' ? 'Best for small teams' : 'Perfect for enterprises'}
                </p>
                <div className="text-4xl font-bold mb-4">
                  {plan === 'Basic' ? '$19' : plan === 'Standard' ? '$49' : '$99'}
                </div>
                <p className="mb-8">per month</p>
                <ul className="mb-8">
                  <li className="mb-2">Feature 1</li>
                  <li className="mb-2">Feature 2</li>
                  <li className="mb-2">Feature 3</li>
                </ul>
                <button
                  onClick={() => handleChoosePlan(plan)}
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Registration Form */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h3 className="text-2xl font-semibold mb-4 text-center">Register for the {selectedPlan} Plan</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-3 py-2 text-gray-700 dark:text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 text-gray-700 dark:text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full px-3 py-2 text-gray-700 dark:text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Register
              </button>
            </form>
            <button
              onClick={closeModal}
              className="mt-4 w-full py-2 px-4 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingSection;
