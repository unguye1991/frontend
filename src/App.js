import React, {Component} from "react";
import Home from './Home.js';
import Login from './Login.js';
//import Signup from "./Signup.js";

import fire from './config/fire';

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      user:null,
    }

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user });
      }else{
        this.setState({ user: null });
      }
    } )

}
  
  
  render(){
    return (
      <div>

        {this.state.user ? (<Home/>):(<Login/>)}
      </div>
      );
 }
}

export default App;
