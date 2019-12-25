

let getShows = async () => {
    let response = await fetch('http://api.tvmaze.com/shows');
    let data = await response.json();
    return data;
};

let getDetails = async showId => {
    let response = await fetch(`http://api.tvmaze.com/shows/${showId}`);
    let data = await response.json();
    return data;
};


let filterShows = async query => {
    let response = await fetch(`http://api.tvmaze.com/search/shows?q=:${query}`);
    let data = await response.json();
    return data.map(data => data.show);
};

let Service = {
    getShows,
    filterShows,
    getDetails
};



export default Service;
