
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layout/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Shop from '../pages/Shop/Shop';
import Cart from '../pages/Cart/Cart';
import Wishlist from '../pages/Wishlist/Wishlist';
import Contact from '../pages/Contact/Contact';

const Login = () => <h1>Login</h1>;
const Register = () => <h1>Register</h1>;

const routes = createBrowserRouter([
  { path: '*', element: <Home /> },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/shop', element: <Shop /> },
      { path: '/contact', element: <Contact /> },
      { path: '/cart', element: <Cart /> },
      { path: '/wishlist', element: <Wishlist /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
]);


const AppRouter = () => {
    return <RouterProvider router={routes} />
} 

export default AppRouter