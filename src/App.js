import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';


class App extends Component {

  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ]
  }

  render() {
    return (
      <React.Fragment>
        <Navbar length = {this.state.counters.length}/>
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters} />
        </main>
      </React.Fragment>
    );
  }

  handleDelete = (counterId) => {
    console.log("Clicked on Delete", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c;
    })
    this.setState({ counters: counters })
  }

  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    console.log(counters)
    const index = counters.indexOf(counter);
    console.log(index)
    counters[index] = { ...counter}
    counters[index].value++;
    this.setState({ counters: counters })
  }
}



export default App;
