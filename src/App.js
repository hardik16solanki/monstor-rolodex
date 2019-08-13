import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component'


class App extends Component{
  constructor(){
    super();
    this.state = {  
      monstors : [ ]
    };
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monstors : users}));
  }

  render(){
    return(
        <div className="App">
          <div className="jumbotron">
            <h1> Monstor Rolodex </h1>
          </div>
          
          <CardList monstors = {this.state.monstors}>       </CardList>
        </div>
    );
  }
}

export default App;
