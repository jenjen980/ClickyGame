import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import DogCard from "./components/DogCard";
import NavBar from "./components/NavBar";
import dogs from "./components/dogs.json";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Column from "./components/Column";



function shuffle(array){
  for (let i=array.length -1; i>0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j] = array[j], array[i]];
  }
  return array;
};

class App extends Component{
  //setting this.state.dogs to the dogs json array
  state = {
    topScore: 12,
    curScore: 0,
    correct: "",
    clicked:[],
    dogs,
  };

  componenetDidMount(){

  }


  handleClick = id =>{
    if(this.state.clicked.indexOf(id) === -1){
      this.handleIncrement();
      this.setState({clicked: this.state.clicked.concat(id)});
      this.state.dogs.sort(() => Math.random() - .5)
      return true;
    } else{
      this.handleReset();
    }
  };

//handle increment increases this.state..by 1
  handleIncrement = () => {
    const updateScore = this.state.curScore +1;
    //always use the setState method to update a components state
    this.setState({
      curScore: updateScore,
      correct: "YAY"
  });
  if(updateScore >= this.state.topScore){
    this.setState({topScore: updateScore});
  }
  else if (updateScore === 12){
    this.setState({correct: "You Won!"});
  }
  this.handleShuffle();
};


  handleReset = () => {
    this.setState({
      curScore: 0,
      topScore: this.state.topScore,
      correct: "OOPS",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuff = shuffle(dogs);
    //set this.setState.dogs is equal to the new dogs array
    this.setState({dogs : shuff});
  };


render(){
  return(

    <Wrapper>
      <NavBar
        curScore = {this.state.curScore}
        topScore = {this.state.topScore}
        correct = {this.state.correct}
        />
      <Title>
      Clicky Game
      </Title>


        {this.state.dogs.map(dog => (
          <Column size="md-3 sm-4">
          <DogCard
            key={dog.id}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={dog.id}
            image={dog.image}
            />
             </Column>
        ))}
    </Wrapper>
    );
  }
}
export default App;
