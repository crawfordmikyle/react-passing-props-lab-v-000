import React from 'react';
import FruitBasket from './FruitBasket';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  getFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  getFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  componentWillMount() {
    this.getFilters();
    this.getFruits();
  }

  handleFilterChange = (event) => {
    this.setState({selectedFilter: event.target.value})
  }

  render(){
    return (<FruitBasket
      fruit={this.state.fruit}
      filters={this.state.filters}
      currentFilter={this.state.currentFilter}
      handleChange={this.handleFilterChange.bind(this)} />
    );
  }
}