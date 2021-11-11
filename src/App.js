import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './context/PrivateRoute';
import AdminRoute from './context/AdminRoute';
import AllProducts from './Pages/AllProducts/AllProducts';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import AddProducts from './Pages/Dashboard/dashboardPages/AddProducts';
import MakeAdmin from './Pages/Dashboard/dashboardPages/MakeAdmin';
import ManageAllOrders from './Pages/Dashboard/dashboardPages/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/dashboardPages/ManageProducts';
import Myorders from './Pages/Dashboard/dashboardPages/Myorders';
import Pay from './Pages/Dashboard/dashboardPages/Pay';
import Review from './Pages/Dashboard/dashboardPages/Review';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound';
import Purchase from './Pages/Purchase/Purchase';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/allProducts">
            <AllProducts></AllProducts>
          </Route>

          <PrivateRoute exact path="/dashboard">
            <DashboardHome></DashboardHome>
          </PrivateRoute>

          <PrivateRoute exact path="/myOrders">
            <Myorders></Myorders>
          </PrivateRoute>

          <PrivateRoute exact path="/purchase/:productId">
            <Purchase></Purchase>
          </PrivateRoute>

          {/* <Route exact path="/contact">
            <Contact></Contact>
          </Route> */}


          <PrivateRoute exact path="/review">
            <Review></Review>
          </PrivateRoute>

          <PrivateRoute exact path="/pay">
            <Pay></Pay>
          </PrivateRoute>

          <AdminRoute exact path="/manageOrders">
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>

          <AdminRoute exact path="/addProducts">
            <AddProducts></AddProducts>
          </AdminRoute>

          <AdminRoute exact path="/manageProducts">
            <ManageProducts></ManageProducts>
          </AdminRoute>

          <AdminRoute exact path="/admin">
            <MakeAdmin></MakeAdmin>
          </AdminRoute>

          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
