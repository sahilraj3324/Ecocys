import { useState } from 'react';
import Vendorhome from '../Home/VendorHome';
import ProductPost from '../ProductPost/ProductPost';
import Profile from '../Profile/Profile';
import BecomeSellerStatic from './BecomeSellerStatic';
import Inventory from './Inventory';
import OrdersPage from './OrdersPage';
import PaymentsPage from './PaymentsPage';
import SellerHome from './SellerHome';

const VendorDashboard = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sections = [
    { name: 'Home', component: <SellerHome /> },
    { name: 'Your Orders', component: <ProductPost /> },
    { name: 'Become a Seller', component: <BecomeSellerStatic /> },
    { name: 'Inventory', component: <Inventory /> },
    { name: 'Orders ', component: <OrdersPage /> },
    { name: 'Payment Page', component: <PaymentsPage /> },
    { name: 'Your Profile', component: <Profile /> },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
  {/* Mobile Toggle Button (on right) */}
  <button
    className="md:hidden fixed top-4 right-4 z-30 bg-black text-white p-2 rounded"
    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
  >
    ☰
  </button>

  {/* Sidebar */}
  <div
    className={`fixed md:static top-0 left-0 ${
      isSidebarOpen ? 'w-full h-full' : 'w-0 h-full'
    } md:w-64 md:h-auto bg-black text-white p-4 z-20 transition-all duration-300 ease-in-out overflow-y-auto ${
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
    }`}
  >
    <h2 className="text-xl font-bold mb-4">Dashboard</h2>
    <ul className="space-y-2">
      {sections.map((section, idx) => (
        <li key={section.name}>
          <button
            onClick={() => {
              setActiveSection(section.name);
              setIsSidebarOpen(false);
            }}
            className={`w-full text-left p-2 rounded ${
              activeSection === section.name
                ? 'bg-gray-800'
                : 'hover:bg-gray-700'
            }`}
          >
            {section.name}
          </button>
          {idx !== sections.length - 1 && (
            <hr className="border-gray-700 my-2" />
          )}
        </li>
      ))}
    </ul>
  </div>

  {/* Main Content */}
  <div className="flex-1 flex flex-col">
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{activeSection}</h1>
      {sections.find((s) => s.name === activeSection)?.component}
    </div>

    <footer className="bg-gray-200 text-center p-4 mt-auto">
      © 2025 Your Company. All rights reserved.
    </footer>
  </div>
</div>


      )  
};

export default VendorDashboard;
