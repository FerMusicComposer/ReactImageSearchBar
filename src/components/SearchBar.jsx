import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    /*Declaring the function with arrow syntax prevents the "this" error where the browser is not
    able to read its value and then treats it as undefined. Adding a constructor also solves it.
    The arrow function method can also be passed in-line <form onSubmit={event => this.onFormSubmit(event)} className="ui form"> */
    onFormSubmit = event => {
        event.preventDefault(); //prevents the browser from refreshing the whole page upon submit

        /*Here the onSubmit function created on App is being passed as a prop for the
        onFormSubmit function so it can pass the state from SearchBar to App (child-to-parent communication) */
        this.props.onSubmit(this.state.term);
    };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            onChange={this.onInputChange}
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
