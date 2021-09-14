
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Book from "./Components/BookComponents/Book"
import BookForm from './Components/BookComponents/BookForm';
import IndividualAuthor from './Components/AuthorComponents/IndividualAuthor';
import HomePage from './Components/HomePage';
import NewNovel from './Components/NewNovelComponents/NewNovel';
import Author from './Components/AuthorComponents/Author';





function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/books" component={Book}></Route>
        <Route exact path="/authors" component={Author}></Route>
        <Route exact path="/author/:id" component={IndividualAuthor}></Route> 
        <Route exact path="/brequest" component={BookForm}></Route> 
        <Route exact path="/newbook" component={NewNovel}></Route> 
      </Switch>
  </Router>
  );
}

export default App;
