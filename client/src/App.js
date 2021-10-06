import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Age from './components/Age';
import Header from "./components/layout/Header";
import Health from './components/Health';
import Home from "./components/Home";
// import Footer from "./components/layout/Footer";
import Users from "./components/Users";

import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";



const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/age" component={Age} />
            <Route exact path="/health" component={Health} />
            <Route exact path="/users" component={Users} />
            <Redirect to="/" />
            <Users />
          </Switch>
        {/* <Footer /> */}
        </Container>
    </Router>
  );
}

export default App;
