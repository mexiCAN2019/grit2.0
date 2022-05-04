import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/home';
import Months from './Components/month/months';
import Dashboard from './Components/dashboard';
import Login from './Components/login';
// import { useUser } from './Util/react-local-spa';


function App() {

  // const {user} = useUser();

  // const checkLoggedIn = () => {
  //   const loggedIn = (localStorage.token && user) ? true : false;
  //   return loggedIn;
  // };

  // const checkRole = ({route, component, ...options}) => {
  //   let finalComponent;
  //   switch(route){
  //     case 'home':
  //       console.log(user);
  //       finalComponent = (user.role === 'dev' || user.role === 'dispatch') ? component : 'redirect';
  //       break;
  //     case 'user-list':
  //       finalComponent = (user.role === 'dev' || user.role === 'dispatch') ? component : 'redirect';
  //       break;
  //     case 'dashboard':
  //       finalComponent = (user.role === 'dev' || user.role === 'admin') ? component : 'redirect';
  //       break;
  //     default:
  //       finalComponent = component;
  //       break;
  //   };
  //   if(finalComponent === 'redirect') return <Redirect to="/" />;
  //   console.log(component);
  //   console.log(finalComponent);
  //   return <Route {...options} component={finalComponent} />;
  // };

  // const CustomRoute = ({route, component, ...options}) => {
  //   console.log(checkLoggedIn());
  //   if(!checkLoggedIn()) return <Route {...options} component={Login}/>;
  //   const path = checkRole({route, component, ...options});
  //   return path; 
  // };

// const wrappedRoutes = () => {
//   return (
//     <div>
//       <Switch>
//         <Route path='/login' exact component={Login} />
//         <CustomRoute path='/' exact route='home' component={HomePage} />
//         <CustomRoute path='/userList' exact route='user-list' component={UserList} />
//         <CustomRoute path='/dashboard' exact route='dashboard' component={Dashboard} />
//       </Switch>
//     </div>
//   )
// };

const initialRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/' exact route='home' component={HomePage} />
        <Route path="/:year" exact component={Months} />
        {/* <Route path="/:year/yearReview" component={YearReview} /> */}
        <Route path='/dashboard' exact route='dashboard' component={Dashboard} />
      </Switch>
    </div>
  )
};

  return (
    <div className="App">
      <Switch>
        <Route path="/" component={initialRoutes} /> {/* replace initialRoutes with wrappedRoutes once useUser is running */}
      </Switch>
    </div>
  );
}

export default App;