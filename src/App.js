import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router";
import ScrollToTop from "./components/utils/ScrollToTop";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./pages/DashboardLayout/DashboardLayout";

//import Customers from "./pages/Dashboard/Customer/Customers";
import Invoices from "./pages/Dashboard/Billing/Billing";
import AddInvoice from "./pages/Dashboard/Billing/AddInvoice";
import EditInvoice from "./pages/Dashboard/Billing/EditInvoice";
//import AllOrders from './pages/Dashboard/Orders/AllOrders';
//import AllUsers from './pages/Dashboard/Users/AllUsers';
import Users from "./pages/Dashboard/Users/Users";
import AddUser from "./pages/Dashboard/Users/AddUser";
import EditUser from "./pages/Dashboard/Users/EditUser";
//import AllProducts from './pages/Dashboard/AllProducts/AllProducts';
//import AddProducts from './pages/Dashboard/AddProducts/AddProducts';
//import EditProduct from './pages/Dashboard/EditProduct/EditProduct';
//import Categories from './pages/Dashboard/Categories/Categories';

import Settings from "./pages/Dashboard/Settings/Settings";
import Leads from "./pages/Dashboard/Leads/Leads";
import AddLead from "./pages/Dashboard/Leads/AddLead";
import EditLead from "./pages/Dashboard/Leads/EditLead";

import Vendors from "./pages/Dashboard/Vendors/Vendors";
import AddVendor from "./pages/Dashboard/Vendors/AddVendor";
import EditVendor from "./pages/Dashboard/Vendors/EditVendor";
import Quotes from "./pages/Dashboard/Quotes/Quotes";
import AddQuote from "./pages/Dashboard/Quotes/AddQuote";
import EditQuote from "./pages/Dashboard/Quotes/EditQuote";
import Tickets from "./pages/Dashboard/Tickets/Tickets";
import AddTicket from "./pages/Dashboard/Tickets/AddTicket";
import EditTicket from "./pages/Dashboard/Tickets/EditTicket";
import Contacts from "./pages/Dashboard/Contacts/Contacts";
import AddContact from "./pages/Dashboard/Contacts/AddContact";
import EditContact from "./pages/Dashboard/Contacts/EditContact";
import Events from "./pages/Events/Events";
import AddEvent from "./pages/Events/AddEvent";
import EditEvent from "./pages/Dashboard/Events/EditEvent";
function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>

            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />}></Route>
              {/* <Route path="customers" element={<Customers />}></Route> */}
              <Route path="leads" element={<Leads />}>
                {" "}
              </Route>
              <Route path="add-lead" element={<AddLead />}></Route>
              <Route path="edit-lead" element={<EditLead />}></Route>
              <Route path="edit-event" element={<EditEvent />}></Route>
              <Route path="Vendors" element={<Vendors />}></Route>
              <Route path="add-vendor" element={<AddVendor />}></Route>
              <Route path="edit-vendor" element={<EditVendor />}></Route>
              <Route path="Quotes" element={<Quotes />}></Route>
              <Route path="add-quote" element={<AddQuote />}></Route>
              <Route path="edit-quote" element={<EditQuote />}></Route>
              <Route path="invoices" element={<Invoices />}></Route>
              <Route path="add-invoice" element={<AddInvoice />}></Route>
              <Route path="edit-invoice" element={<EditInvoice />}></Route>
              <Route path="Tickets" element={<Tickets />}></Route>
              <Route path="add-ticket" element={<AddTicket />}></Route>
              <Route path="edit-ticket" element={<EditTicket />}></Route>
              <Route path="Contacts" element={<Contacts />}></Route>
              <Route path="add-contact" element={<AddContact />}></Route>
              <Route path="edit-contact" element={<EditContact />}></Route>
              <Route path="users" element={<Users />}></Route>
              <Route path="add-user" element={<AddUser />}></Route>
              <Route path="edit-user" element={<EditUser />}></Route>
              <Route path="add-invoice" element={<AddUser />}></Route>
              <Route path="Events" element={<Events />}></Route>
              <Route path="add-event" element={<AddEvent />}></Route>

              <Route path="settings" element={<Settings />}></Route>
              <Route path="*" element={<h1>test</h1>}></Route>
            </Route>
          </Routes>
        </ScrollToTop>
      </div>
    </HelmetProvider>
  );
}

export default App;
