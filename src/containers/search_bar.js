import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import Error from '../components/error_component';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    // if(event.target.value == '' || event.target.value == null){
    //   alert("error");
    // }
    // else{
    //   alert("through");
    // }
    if(event.target.value == '' || event.target.value == null){
      alert("error");
      return (
        <Error />
      );
    }
    else{
      this.setState({
        term: event.target.value
       });
    }
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
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


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
