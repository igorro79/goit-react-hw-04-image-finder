import { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetInput() {
    this.setState({ name: '', number: '' });
  }
  handleInput(e) {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    e.preventDefault();

    const { name, number } = this.state;
    const id = shortid.generate();
    this.props.onSubmit(name, number, id);
    this.resetInput();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            onChange={this.handleInput}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Phone
          <input
            onChange={this.handleInput}
            type="tel"
            value={this.state.number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className="button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
