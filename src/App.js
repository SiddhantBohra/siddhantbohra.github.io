import "./App.css";
import React , {Component} from "react"; 
import NavBar from "./Components/Navbar";
import Main from './Components/main'
import aboutMe from './Components/aboutMe'
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />;
        <Main />;
      </div>
    )
  }
}

export default App