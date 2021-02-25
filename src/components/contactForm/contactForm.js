import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';
import Warning from '../warning';
import { connect } from 'react-redux';
import {addContact} from '../../redux/operations';


import s from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.object,
    onAdd: PropTypes.func,
  };

  static defaultProps = {};

  state = {
    name: '',
    number: '',
    warning:false,
  };

  handleInputName = e => {

    const { name, value } = e.target;
    this.setState({
      [name]: value,
      warning:false});
    this.handleDeleteContactFromFormState();
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const  contacts = this.props.contacts.items;
    const contactItem = { id: uuidv4(), name, number};

    if (name === '' || number === '') {
      return;
    }

    if (contacts.find(item => name === item.name)) {
      this.setState({warning: true})
      return;
    } else {
      this.setState({
        warning:false,
      });
    }
    this.props.onAdd(contactItem)
    this.resetInput();
  };

  handleDeleteContactFromFormState = () => {
    const newContactsFromAppState = this.props.contacts.items;
    this.setState({ contacts: newContactsFromAppState });
  };

  resetInput = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
  
    const { name, number,warning } = this.state;
    return (
      <div className={s.formContainer}>
        <CSSTransition in={warning} timeout={250} classNames={s} unmountOnExit>
           <Warning name={name} />
        </CSSTransition>  
      <form onSubmit={this.handleSubmitForm} className={s.form}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputName}
          ></input>
        </label>

        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputName}
          ></input>
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
        </form>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapDispatchToProps = dispatch => ({
   onAdd: item => dispatch(addContact(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)  ;
