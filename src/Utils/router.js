import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Containers/AuthScreens/login'
import Home from '../Containers/Home/index'
import PageError from '../Components/Common/noPageFound'

const Navigation = () => {

  const Navpath = ({Screen, path, exact}) => (
    <Route exact={exact ? true : false} path={path}>
      <Screen/>
    </Route>
  )

  return (
    <Router>
      <Switch>
        <Navpath exact Screen={Login} path="/" />

        <Navpath exact Screen={Home} path="/home" />

        <Navpath exact Screen={PageError} path="*" />

      </Switch>
    </Router>
  );
};

export default Navigation