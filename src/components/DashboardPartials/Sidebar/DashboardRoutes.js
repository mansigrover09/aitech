import { BsSpeedometer2 } from "react-icons/bs";
import { MdLabelImportantOutline, MdLabelImportant } from "react-icons/md";
import {
  AiOutlineUsergroupDelete,
  AiOutlineUserAdd,
  AiFillMail,
} from "react-icons/ai";
import { RiBillLine } from "react-icons/ri";
import { BsWallet, BsGear } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { GiSpectacles } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
// route wise components
import Dashboard from "../../../pages/Dashboard/Dashboard";
//import Customers from '../../../pages/Dashboard/Customer/Customers';
import Invoices from "../../../pages/Dashboard/Billing/Billing";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { BsCalendar4Event } from "react-icons/bs";
import Leads from "../../../pages/Dashboard/Leads/Leads";
import Tickets from "../../../pages/Dashboard/Tickets/Tickets";
import Contacts from "../../../pages/Dashboard/Contacts/Contacts";
import Events from "../../../pages/Dashboard/Events/Events";
//import AllUsers from '../../../pages/Dashboard/Users/AllUsers';
import Users from "../../../pages/Dashboard/Users/Users";

import Vendors from "../../../pages/Dashboard/Vendors/Vendors";
//import AddVendor from '../../../pages/Vendors/AddVendor';
import Quotes from "../../../pages/Dashboard/Quotes/Quotes";
//import { Contacts } from '@mui/icons-material';

const vendorDashboardRoutes = [
  {
    title: "Dashboard",
    icon: <BsSpeedometer2 />,
    path: "/dashboard/",
    component: <Dashboard />,
  },
  /*   {
        title: 'Products',
        icon: <MdLabelImportantOutline />,
        submenu: [
            {
                title: 'Products',
                path: 'products',
                component: <hi>hi</hi>,
            },
            {
                title: 'Add Product',
                path: 'add-product',
                component: <hi>hi</hi>,
            },
            {
                title: 'Categories',
                path: 'categories',
                component: <hi>hi</hi>,
            },
            {
                title: 'Tags',
                path: 'tags',
                component: <hi>hi</hi>,
            },
          

        ]

    },
 /*   {
        title: 'Customers',
        icon: <AiOutlineUsergroupDelete />,
        path: '/dashboard/customers',
        component: <Customers/>

    }, */
  {
    title: "Leads",
    icon: <GiSpectacles />,
    submenu: [
      {
        title: "Leads",
        path: "leads",
        component: <Leads />,
      },
      {
        title: "Add Leads",
        path: "add-lead",
        component: <hi>add lead</hi>,
      },
      {
        title: "Edit Leads",
        path: "edit-lead",
        component: <hi>edit lead</hi>,
      },
    ],
  },

  {
    title: "Vendors",
    icon: <FaRegUser />,
    submenu: [
      {
        title: "Vendors",
        path: "vendors",
        component: <Vendors />,
      },
      {
        title: "Add Vendor",
        path: "add-vendor",
        component: <hi>add vendor</hi>,
      },
      {
        title: "Edit Vendor",
        path: "edit-vendor",
        component: <hi>edit vendor</hi>,
      },
    ],
  },
  {
    title: "Reports",
    icon: <HiOutlineDocumentReport />,
    submenu: [
      {
        title: "Sales",
        path: "sales",
        component: <hi>sales report</hi>,
      },
      {
        title: "Visitors",
        path: "visitors",
        component: <hi>viditors report</hi>,
      },
      {
        title: "Targets",
        path: "targets",
        component: <hi>Target report</hi>,
      },
    ],
  },
  {
    title: "Quotes",
    icon: <HiOutlinePencilAlt />,
    submenu: [
      {
        title: "Quotes",
        path: "quotes",
        component: <Quotes />,
      },
      {
        title: "Add quote",
        path: "add-quote",
        component: <hi>add quote</hi>,
      },
      {
        title: "Edit quote",
        path: "edit-quote",
        component: <hi>edit quote</hi>,
      },
    ],
  },
  {
    title: "Billing",
    icon: <BsWallet />,
    submenu: [
      {
        title: "Invoices",
        path: "invoices",
        component: <Invoices />,
      },
      {
        title: "Add Invoice",
        path: "add-invoice",
        component: <hi>add invoice</hi>,
      },
      {
        title: "Edit Invoice",
        path: "edit-invoice",
        component: <hi>edit invoice</hi>,
      },
    ],
  },
  {
    title: "Tickets",
    icon: <AiOutlineQuestionCircle />,
    submenu: [
      {
        title: "Tickets",
        path: "tickets",
        component: <Tickets />,
      },
      {
        title: "Add Ticket",
        path: "add-ticket",
        component: <hi>add ticket</hi>,
      },
      {
        title: "Edit ticket",
        path: "edit-ticket",
        component: <hi>edit ticket</hi>,
      },
    ],
  },
  {
    title: "Contacts",
    icon: <BsTelephone />,
    submenu: [
      {
        title: "Contacts",
        path: "contacts",
        component: <Contacts />,
      },
      {
        title: "Add Contact",
        path: "add-contact",
        component: <hi>add contact</hi>,
      },
      {
        title: "Edit Contact",
        path: "edit-contact",
        component: <hi>edit contact</hi>,
      },
    ],
  },
  /*
    {
        title: 'Orders',
        icon: <RiBillLine />,
        submenu: [
            {
                title: 'All Orders',
                path: 'orders',
                component: <hi>Orders</hi>,
            },
          

        ]

    }, */

  {
    title: "Users",
    icon: <AiOutlineUserAdd />,
    submenu: [
      {
        title: "All Users",
        path: "users",
        component: <Users />,
      },
      {
        title: "Add User",
        path: "add-user",
        component: <hi>Add user</hi>,
      },
      {
        title: "Edit User",
        path: "edit-user",
        component: <hi>edit user</hi>,
      },
    ],
  },
  {
    title: "Events",
    icon: <BsCalendar4Event />,
    submenu: [
      {
        title: "Events",
        path: "events",
        component: <Events />,
      },
      {
        title: "Add Event",
        path: "add-event",
        component: <hi>add event</hi>,
      },
      {
        title: "Edit Event",
        path: "edit-event",
        component: <hi>edit event</hi>,
      },
    ],
  },

  {
    title: "MailBox",
    icon: <AiFillMail />,
    submenu: [
      {
        title: "Inbox",
        path: "inbox",
        component: <hi>Inbox</hi>,
      },
      {
        title: "Compose",
        path: "compose",
        component: <hi>Compose</hi>,
      },
    ],
  },
  {
    title: "Settings",
    icon: <BsGear />,
    path: "/dashboard/settings",
    component: <hi>Settings</hi>,
  },
];

export default vendorDashboardRoutes;
