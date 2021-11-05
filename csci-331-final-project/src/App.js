import React from 'react';

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        ingredient1: props.ingredient1,
        ingredient2: props.ingredient2,
        ingredient3: props.ingredient3,
        ingredient4: props.ingredient4,
        ingredient5: props.ingredient5,
      }
    }
  }

  handleIngredient1Changed(event) {
    var customer = this.state.customer;
    customer.ingredient1 = event.target.value;
    this.setState({ customer: customer });
  }

  handleIngredient2Changed(event) {
    var customer = this.state.customer;
    customer.ingredient2 = event.target.value;
    this.setState({ customer: customer });
  }

  handleIngredient3Changed(event) {
    var customer = this.state.customer;
    customer.ingredient3 = event.target.value;
    this.setState({ customer: customer });
  }

  handleIngredient4Changed(event) {
    var customer = this.state.customer;
    customer.ingredient4 = event.target.value;
    this.setState({ customer: customer });
  }

  handleIngredient5Changed(event) {
    var customer = this.state.customer;
    customer.ingredient5 = event.target.value;
    this.setState({ customer: customer });
  }

  handleButtonClicked() {
    console.log(this.state.customer);
  }

  render() {
    return (
      <div>
        <label>
          Ingredient 1: 
        </label>
        <input type="text" value={this.state.customer.ingredient1} onChange={this.handleIngredient1Changed.bind(this)}/>
        <br/>

        <label>
          Ingredient 2: 
        </label>
        <input type="text" value={this.state.customer.ingredient2} onChange={this.handleIngredient2Changed.bind(this)}/>
        <br/>

        <label>
          Ingredient 3: 
        </label>
        <input type="text" value={this.state.customer.ingredient3} onChange={this.handleIngredient3Changed.bind(this)}/>
        <br/>

        <label>
          Ingredient 4: 
        </label>
        <input type="text" value={this.state.customer.ingredient4} onChange={this.handleIngredient4Changed.bind(this)}/>
        <br/>

        <label>
          Ingredient 5: 
        </label>
        <input type="text" value={this.state.customer.ingredient5} onChange={this.handleIngredient5Changed.bind(this)}/>
        <br/>
        
        <button onClick={this.handleButtonClicked.bind(this)}>
          Save Record
        </button>
      </div>
    );
  }
}