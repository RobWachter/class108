import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      str: "",
      dex: "",
      wis: "",
      int: "",
      con: "",
      chr: "",
      dice: ""
    }
    

    

    this.changeStrings = this.changeStrings.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeStr = this.handleChangeStr.bind(this);
    this.handleChangeDex = this.handleChangeDex.bind(this);
    this.handleChangeWis = this.handleChangeWis.bind(this);
    this.handleChangeInt = this.handleChangeInt.bind(this);
    this.handleChangeCon = this.handleChangeCon.bind(this);
    this.handleChangeChr = this.handleChangeChr.bind(this);
    this.dice = this.dice.bind(this);
  }

  changeStrings() {
    let temp = [...this.state.strings]
    temp.push("John")
    console.log(temp)
    this.setState({
      strings: temp
    });
  }
  dice() {
    this.setState({dice: Math.floor((Math.random()*20) +1)});
  }
  handleChangeName(event) {
    this.setState({name: event.target.value});
    
  }
  handleChangeStr(event) {
    this.setState({str: event.target.value});
    
  }
  handleChangeDex(event) {
    this.setState({dex: event.target.value});
    
  }
  handleChangeWis(event) {
    this.setState({wis: event.target.value});
    
  }
  handleChangeInt(event) {
    this.setState({int: event.target.value});
    
  }
  handleChangeCon(event) {
    this.setState({con: event.target.value});
  }
  handleChangeChr(event) {
    this.setState({chr: event.target.value});
    
  }

  render() {
    return (
      <div className="App">
        Name: <input onChange={this.handleChangeName} type="text" value={this.state.name} />
        Stats: 
        <input onChange={this.handleChangeStr} type="text" value={this.state.str} />
        <input onChange={this.handleChangeDex} type="text" value={this.state.dex} />
        <input onChange={this.handleChangeWis} type="text" value={this.state.wis} />
        <input onChange={this.handleChangeInt} type="text" value={this.state.int} />
        <input onChange={this.handleChangeCon} type="text" value={this.state.con} />
        <input onChange={this.handleChangeChr} type="text" value={this.state.chr} />
        

        <div>
          <h1>Player Name: {this.state.name}</h1>
          <button onClick={this.dice}>Roll Me!</button>
          <h2>You rolled a {this.state.dice}</h2>
          <h3>Str: {this.state.str}</h3>
          <h3>Dex: {this.state.dex}</h3>
          <h3>Wis: {this.state.wis}</h3>
          <h3>Int: {this.state.int}</h3>
          <h3>Con: {this.state.con}</h3>
          <h3>Chr: {this.state.chr}</h3>

        </div>
      </div>
        //    <div className="App">
        //    <h1 onClick={this.changeStrings}>Hello there!</h1>
        //    {this.state.strings}
        //    <h2>{this.state.name}</h2>
        //    <input onChange={this.handleChange} type="text" value={this.state.name} />
        //    <div>{this.state.somethingElse}</div>
        //  </div>
    );
  }
}

export default App;