import React from 'react';
import './Details.css';
import queryString from 'query-string'

import Service from '../../Helpers/Service';
import Search from "../Search/Search";

class Details extends React.Component {
    state = {
        details: null
    };
    componentDidMount() {
        let id = window.location.href.split("/").pop();
        Service.getDetails(id).then( details => {
            this.setState({details})
        });
    }

    timeConvert = n => {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return rhours > 0? (rhours + " hour(s) and " + rminutes + " minute(s).") : (rminutes + " minute(s).");
    }

    render(){


        return <div className="details">
            {
                this.state.details &&
                    <div>
                        <h1>{this.state.details.name}</h1>
                        <p><strong>Rating:</strong> {this.state.details.rating.average}</p>
                        <p><strong>Duration:</strong> {this.timeConvert(this.state.details.runtime)}</p>
                        <img src={this.state.details.image.medium}></img>
                    </div>
            }
        </div>
    }
}

export default Details;
