import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
     });
  }

  onFormSubmit(event) {
    event.preventDefault();

  }

  render() {
    return (
      <form className="input-group padding" onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          placeholder="Get a five-day forecast in your favourite cities"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Search</button>
        </span>
      </form>
    );
  }
}
