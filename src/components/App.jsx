import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    /* The promise can be also fulfilled with the ".then()" method, but using async/await syntax makes it
    more understandable, and also allows to save the await part inside a variable making it easier to
    use later on if needed. */
    /* The onSearchSubmit function was also refactored for better readibility. Instead of inporting "axios" here
    and using the axios.get() method which required to include the whole API URL plus the headers param on which the
    Unsplash API key is set, all these lines where moved to a different file designed to deal with the API code, and then
    that file was imported instead of axios, and we refer the get method from that file. 
    Ideally, all of this logic would be extracted into its own separate file*/
    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });

        console.log(`comming from the child: ${term}`);
        //console.log(response.data.results);
        this.setState({ images: response.data.results }); //pushes the images from the API into the empty array set as state
    };

    render() {
        /*Here the state of the parent is passed to the child so it can insert its state inde the one from the parent, and 
        return it back up the data tree */
        return (
            <div className="search-bar ui container ">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
