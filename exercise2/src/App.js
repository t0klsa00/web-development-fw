import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

function randomNumber() {
  return Math.floor(Math.random() * 11);
}

class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      items: [
      ]
    };
  }

  addSomeCarrots = () =>
  {
    this.setState({items: [...this.state.items, {id: 1, value: "Carrots", qty: randomNumber(), unit: 'x'}]})
  }
  addSomeStrawberries = () =>
  {
    this.setState({items: [...this.state.items, {id: 2, value: "Strawberries", qty: randomNumber(), unit: 'x'}]})
  }
  addSomeBananas = () =>
  {
    this.setState({items: [...this.state.items, {id: 3, value: "Bananas", qty: randomNumber(), unit: 'x'}]})
  }
  addSomeMilk = () =>
  {
    this.setState({items: [...this.state.items, {id: 4, value: "Milk", qty: randomNumber(), unit: 'x'}]})
  }


  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      Shoppinglist. Click buttons to add items.
      <ShoppingList items={ this.state.items } />
      <button onClick={ () => this.addSomeCarrots()}>Add carrots</button>
      <button onClick={ () => this.addSomeStrawberries()}>Add strawberries</button>
      <button onClick={ () => this.addSomeBananas()}>Add bananas</button>
      <button onClick={ () => this.addSomeMilk()}>Add milk</button>
    </div>
  }
}

export default App;
