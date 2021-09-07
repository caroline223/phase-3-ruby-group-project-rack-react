
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Books from "./Components/BooksComponents/Books"
import BooksForm from './Components/BooksComponents/BooksForm';
import IndividualAuthor from './Components/AuthorsComponents/IndividualAuthor';
import HomePage from './Components/HomePage';
import NewBooks from './Components/NewBooksComponents/NewBooks';





function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/books" component={Books}></Route>
        <Route exact path="/authors/:id" component={IndividualAuthor}></Route> 
        <Route exact path="/brequests" component={BooksForm}></Route> 
        <Route exact path="/newbooks" component={NewBooks}></Route> 
      </Switch>
  </Router>
  );
}

export default App;
