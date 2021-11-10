import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
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

          <Route exact path="/dashboard">
            <DashboardHome></DashboardHome>
          </Route>

          <Route exact path="/myOrders">
            <Myorders></Myorders>
          </Route>

          {/* <Route exact path="/contact">
            <Contact></Contact>
          </Route> */}

          {/* <PrivateRoute exact path="/placeorder/:serviceId">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute> */}

          <Route exact path="/myOrders">
            <Myorders></Myorders>
          </Route>

          <Route exact path="/review">
            <Review></Review>
          </Route>

          <Route exact path="/pay">
            <Pay></Pay>
          </Route>

          <Route exact path="/manageOrders">
            <ManageAllOrders></ManageAllOrders>
          </Route>

          <Route exact path="/addProducts">
            <AddProducts></AddProducts>
          </Route>

          <Route exact path="/manageProducts">
            <ManageProducts></ManageProducts>
          </Route>

          <Route exact path="/admin">
            <MakeAdmin></MakeAdmin>
          </Route>

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
