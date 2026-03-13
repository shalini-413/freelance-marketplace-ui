// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/common/Layout';

// Common Pages
import Login from './pages/common/Login';
import Signup from './pages/common/Signup';
import ForgotPassword from './pages/common/ForgotPassword';
import Verification from './pages/common/Verification';
import ProfileSettings from './pages/common/ProfileSettings';
import Notifications from './pages/common/Notifications';
import HelpSupport from './pages/common/HelpSupport';

// Customer Pages
import CustomerDashboard from './pages/customer/Dashboard';
import BrowseServices from './pages/customer/BrowseServices';
import ServiceDetails from './pages/customer/ServiceDetails';
import CustomRequest from './pages/customer/CustomRequest';
import CartCheckout from './pages/customer/CartCheckout';
import OrdersList from './pages/customer/OrdersList';
import OrderDetails from './pages/customer/OrderDetails';
import CustomerChat from './pages/customer/Chat';
import PaymentHistory from './pages/customer/PaymentHistory';

// Freelancer Pages
import FreelancerDashboard from './pages/freelancer/Dashboard';
import MyProjects from './pages/freelancer/MyProjects';
import ProjectDetails from './pages/freelancer/ProjectDetails';
import TaskProgress from './pages/freelancer/TaskProgress';
import UploadDeliver from './pages/freelancer/UploadDeliver';
import RevisionsView from './pages/freelancer/RevisionsView';
import EarningsWallet from './pages/freelancer/EarningsWallet';
import FreelancerChat from './pages/freelancer/Chat';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* AUTHENTICATION ROUTES (No Layout) */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verification" element={<Verification />} />

          {/* MAIN APP ROUTES (Wrapped in Layout) */}
          <Route path="/*" element={
            <Layout>
              <Routes>
                {/* Redirect root to login for now */}
                <Route path="/" element={<Navigate to="/login" />} />

                {/* SHARED ROUTES */}
                <Route path="/profile" element={<ProfileSettings />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/help" element={<HelpSupport />} />
                
                {/* CUSTOMER ROUTES */}
                <Route path="/customer/dashboard" element={<CustomerDashboard />} />
                <Route path="/platform-assets" element={<BrowseServices />} />
                <Route path="/services/*" element={<BrowseServices />} />
                <Route path="/service/:id" element={<ServiceDetails />} />
                <Route path="/customer/request" element={<CustomRequest />} />
                <Route path="/customer/checkout" element={<CartCheckout />} />
                <Route path="/customer/orders" element={<OrdersList />} />
                <Route path="/customer/order/details" element={<OrderDetails />} />
                <Route path="/customer/payments" element={<PaymentHistory />} />
                <Route path="/freelancer/earnings" element={<EarningsWallet />} />
                <Route path="/customer/chat" element={<CustomerChat />} />

                {/* FREELANCER ROUTES */}
                <Route path="/freelancer/dashboard" element={<FreelancerDashboard />} />
                <Route path="/freelancer/projects" element={<MyProjects />} />
                <Route path="/freelancer/project/details" element={<ProjectDetails />} />
                <Route path="/freelancer/task/tracker" element={<TaskProgress />} />
                <Route path="/freelancer/upload" element={<UploadDeliver />} />
                <Route path="/freelancer/revisions" element={<RevisionsView />} />
                <Route path="/freelancer/earnings" element={<EarningsWallet />} />
                <Route path="/freelancer/chat" element={<FreelancerChat />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;