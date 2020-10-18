// Containers
import Home from 'pages/home';
import AddLink from 'pages/add-link';

const routeList = [
  {
    path: `/`,
    component: Home,
    exact: true,
  },
  {
    path: `/add`,
    component: AddLink,
    exact: false,
  },
];

export default routeList;
