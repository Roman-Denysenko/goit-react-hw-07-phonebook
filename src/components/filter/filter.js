import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {filter} from '../../redux/actions';

import s from './Filter.module.css';

const Filter =({value,onFilter })=> {
   
    return (
      <>
        <label className={s.label}>
          Find contact by name
          <input
            className={s.input}
            type="text"
            name="filter"
            value={value}
            onChange={onFilter}
          ></input>
        </label>
      </>
    );
}
  
Filter.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func,
};


const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
   onFilter: e=> dispatch(filter(e.target.value)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Filter) ;
