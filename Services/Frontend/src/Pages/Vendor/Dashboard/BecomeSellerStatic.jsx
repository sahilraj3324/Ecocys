import React from "react";

const BecomeSellerStatic = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold text-blue-700">ecocys™</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search Products Sellers & More..."
            className="border p-2 rounded-lg w-72"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Login / Sign Up
          </button>
        </div>
      </header>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-6 items-center mt-6">
        <div>
          <h2 className="text-3xl font-bold">
            Reach thousands of Buyers online with 0% commission on sales.
          </h2>
          <p className="text-gray-600 mt-2">
            Start Your B2B Selling With EcoCys
          </p>

          {/* Form Section */}
          <div className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="Enter 10 Digit Mobile Number"
              className="border p-3 w-full rounded-lg"
            />
            <input
              type="text"
              placeholder="Enter OTP Here"
              className="border p-3 w-full rounded-lg"
            />
            <input
              type="text"
              placeholder="Enter Mail ID (Auto Fetch)"
              className="border p-3 w-full rounded-lg"
            />
            <input
              type="password"
              placeholder="Set Password (Auto Fetch)"
              className="border p-3 w-full rounded-lg"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full">
              Get Started
            </button>
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://via.placeholder.com/400"
            alt="Seller"
            className="rounded-lg w-full"
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <div className="flex justify-center space-x-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Manufacturer
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded-lg">Retailers</button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {/* Benefit 1 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">UNLOCK NATIONWIDE SALES</h3>
            <p className="text-gray-600">
              Reach 50k Retailers Across 1,000+ Pincodes!
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">MAXIMIZE YOUR PROFITS</h3>
            <p className="text-gray-600">
              Enjoy 0% Commission and Keep 100% of Your Earnings!
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">EXPERT ACCOUNT MANAGEMENT</h3>
            <p className="text-gray-600">
              Dedicated team to Boost Your EcoCys Success!!
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">ZERO RETURN CHARGES</h3>
            <p className="text-gray-600">
              Ship Your Products Stress-Free with Flat, Low Rates!
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">24/7 SUPPORT</h3>
            <p className="text-gray-600">
              Your Questions, Our Priority—Anytime, Anywhere!
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">RAPID REVENUE</h3>
            <p className="text-gray-600">
              Unlock Your Payments in Just 7-10 Days After Dispatch!
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 mt-8 border-t">
        <p>Copyright 2025 By EcoCys. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default BecomeSellerStatic;
