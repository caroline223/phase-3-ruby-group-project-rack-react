
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Book from "./Components/BookComponents/Book"
import BookForm from './Components/BookComponents/BookForm';
import IndividualAuthor from './Components/AuthorsComponents/IndividualAuthor';
import HomePage from './Components/HomePage';
import NewBook from './Components/NewBookComponents/NewBook';





function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/books" component={Book}></Route>
        <Route exact path="/author/:id" component={IndividualAuthor}></Route> 
        <Route exact path="/brequest" component={BookForm}></Route> 
        <Route exact path="/newbook" component={NewBook}></Route> 
      </Switch>
  </Router>
  );
}

export default App;
