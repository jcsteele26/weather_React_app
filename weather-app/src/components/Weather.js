import React from 'react';

class Weather extends React.Component {
    state = {  }
    render() { 
        return ( 

            <div>
                {this.props.city}
                {this.props.country}
                {this.props.temperature}
                {this.props.humidity}
                {this.props.description}
                
            </div>

         );
    }
}
 
export default Weather;