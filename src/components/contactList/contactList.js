import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import selectors from '../../redux/selectors';

import s from './ContactList.module.css';


const ContactList = ({ items,visibleContacts, onDelete }) => {
  
  if (items.length === 0) {
    return null;
  }

  const ContactItem = ({ id, name, number }) => {
    if (name === '' || number === '') {
      return null;
    }
    return (
      <CSSTransition key={id} timeout={250} classNames={s}>
        <li  className={s.item}>
        {name}: {number}
        <button
          className={s.button}
          type="button"
          id={id}
          onClick={()=>onDelete(id)}
        >
            Delete
        </button>{' '}
          </li>
      </CSSTransition>
    );
  };

  return ( 
    <TransitionGroup component='ul'>
      {visibleContacts.map(ContactItem)}
    </TransitionGroup>
  )
};

ContactList.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
  contacts:PropTypes.object,
};

const mapStateToProps = state => ({
  items: selectors.getContactsItems(state),
  visibleContacts:selectors.getVisibleContacts(state),
});

 const mapDispatchToProps = dispatch => ({
   onDelete: (id) => dispatch(deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList) ;
