
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//import Books from "../src/components/BooksComponents/Books"
import Authors from './Components/AuthorsComponents/Authors';
//import NewTaskForm from "./components/NewTaskForm"


function App() {
  return (
    <Router>
      <Switch>
      
        <Route exact path="/authors" component={Authors}></Route>
        
      </Switch>
  </Router>
  );
}

export default App;
