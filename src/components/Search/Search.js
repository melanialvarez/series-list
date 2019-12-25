import React from 'react';
import './Search.css';
import Service from '../../Helpers/Service';

class Search extends React.Component {
    state = {
        query: ""
    };

    searchShow = event => {
        let query = event.target.value;
        Service.filterShows(query).then(shows => {
            this.props.updateShows(shows);
        });
    };
    render(){
        return <div className="search">
            <input type="text" onChange={this.searchShow} placeholder="Arrow..."/>
        </div>
    }
}

export default Search;
