import React from 'react';
import './Shows.css';
import Service from '../../Helpers/Service';
import Search from "../Search/Search";
import {
    Link
} from "react-router-dom";

class List extends React.Component {
    state = {
        data: [],
        wholeData: []
    };

    componentWillMount() {
        Service.getShows().then(shows => {
            let parsedData =  this.renderShowsList(shows);
            this.setState({data: parsedData, wholeData: parsedData});
        });
    };

    updateShows = shows => {
        this.setState({data: this.renderShowsList(shows)});
    };

    renderShowsList = shows => {
        return shows.map( e => {
            return <li key={e.id}>
                <Link to={`/details/${e.id}`}>
                    {e.name}
                </Link>
            </li>
        });
    };

    render(){
        return <div>
            <Search updateShows={this.updateShows}></Search>
            <ul className="shows-list">
                {this.state.data.length && this.state.data || this.state.wholeData}
            </ul>
        </div>
    }
}

export default List;
