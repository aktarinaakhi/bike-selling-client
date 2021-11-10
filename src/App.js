import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
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

          {/* <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <PrivateRoute exact path="/placeorder/:serviceId">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>

          <PrivateRoute exact path="/myBooking">
            <MyBooking></MyBooking>
          </PrivateRoute>

          <PrivateRoute exact path="/addService">
            <AddService></AddService>
          </PrivateRoute>

          <PrivateRoute exact path="/bookingList">
            <BookingList></BookingList>
          </PrivateRoute>

          <PrivateRoute exact path="/admin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute> */}

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
