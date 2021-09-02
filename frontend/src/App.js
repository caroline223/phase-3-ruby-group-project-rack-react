
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Books from "./Components/BooksComponents/Books"
import Authors from './Components/AuthorsComponents/Authors';
import AuthorsForm from './Components/AuthorsComponents/AuthorsForm'
import BooksForm from './Components/BooksComponents/BooksForm';
import IndividualAuthor from './Components/AuthorsComponents/IndividualAuthor';
import HomePage from './Components/HomePage';

//import NewTaskForm from "./components/NewTaskForm"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={HomePage}></Route>
        <Route exact path="/books" component={Books}></Route>
        <Route exact path="/authors" component={Authors}></Route>
        <Route exact path="/authors/:id" component={IndividualAuthor}></Route> 
        <Route exact path="/arequests" component={AuthorsForm}></Route> 
        <Route exact path="/brequests" component={BooksForm}></Route> 
      </Switch>
  </Router>
  );
}

export default App;
