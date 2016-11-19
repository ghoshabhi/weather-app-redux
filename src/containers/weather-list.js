import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart_component';

class WeatherList extends Component {

  renderWeather(cityData, index) {
    const name = cityData.city.name

    let temps = cityData.list.map(weather => weather.main.temp);
    temps = temps.map(temp => temp -272.15);

    let pressures = cityData.list.map(weather => weather.main.pressure);
    pressures = pressures.map(pressure => pressure/100);

    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={index}>
        <td>
          {name}
        </td>
        <td>
          <Chart data={temps} color="red" units="°C"/>
        </td>
        <td>
          <Chart data={pressures} color="green" units="Pa" />
        </td>
        <td>
          <Chart data={humidities} color="black" units="%" />
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
            <th>Tempearature (°C)</th>
            <th>Pressure (Pa)</th>
            <th>Humidity (%)</th>
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
