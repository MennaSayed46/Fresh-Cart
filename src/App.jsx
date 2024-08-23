
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserContextProvider from './components/Context/UserContext';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import RecentProducts from './components/RecentProducts/RecentProducts';
import Cart from './components/Cart/Cart';
import Brands from './components/Brands/Brands';
import LogIn from './components/LogIn/LogIn';
import Notfound from './components/Notfound/Notfound';
import Categories from './components/Categories/Categories';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './components/Products/Products';
import CartContextProvider from './components/Context/CartContext';
import { Toaster } from 'react-hot-toast';
import WishList from './components/WishList/WishList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CheckOut from './components/CheckOut/CheckOut';

function App() {
  let query = new QueryClient();
  let router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: 'home', element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: 'register', element: <Register /> },
        { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
        { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: 'checkout', element: <ProtectedRoute><CheckOut/></ProtectedRoute> },
        { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
        { path: 'wishlist', element: <ProtectedRoute><WishList /></ProtectedRoute> },
        { path: 'login', element: <LogIn /> },
        { path: 'productdetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
        { path: 'home/productdetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
        { path: '*', element: <ProtectedRoute><Notfound /></ProtectedRoute> },
      ]
    }
  ]);

  return (
    <QueryClientProvider client={query}>
      <CartContextProvider>
        <UserContextProvider>
          <RouterProvider router={router} />
          <Toaster />
        </UserContextProvider>

      </CartContextProvider>

    </QueryClientProvider>



  );
}

export default App;
