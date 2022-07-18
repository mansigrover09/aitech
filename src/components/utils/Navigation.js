

const Navigation = () => {
 
    return (
      "Test"
    );
};


const linkList = [
  {
    title: "DASHBOARD",
    list: [
      {
        href: "/orders",
        title: "Orders",
        icon: "ShoppingBagOutlined",
        count: 5,
      },
      {
        href: "/wish-list",
        title: "Wishlist",
        icon: "FavoriteBorder",
        count: 19,
      },
      {
        href: "/support-tickets",
        title: "Support Tickets",
        icon: "CustomerService",
        count: 1,
      },
    ],
  },
  {
    title: "ACCOUNT SETTINGS",
    list: [
      {
        href: "/profile",
        title: "Profile Info",
        icon: "Person",
        count: 3,
      },
      {
        href: "/address",
        title: "Addresses",
        icon: "",
        count: 16,
      },
      {
        href: "/payment-methods",
        title: "Payment Methods",
        icon: "",
        count: 4,
      },
    ],
  },
];
export default Navigation;