import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  renderWeather(cityData, index) {
    const name = cityData.city.name
    return (
      <tr key={index}>
        <td>
          {name}
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempearature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


// function mapStateToProps(state) {
//   return { weather: state.weather };
// }

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
