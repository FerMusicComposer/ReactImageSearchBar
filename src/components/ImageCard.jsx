import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        //Refs are the way to get information about DOM elements to use them on React
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        //this will make sure that the ref picks the information requested after the load event occurs
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    /*This function grabs the height of each image and stores it on a variable so it can be used to set
    the grid spans on the CSS for each card. This way each card will have the right amount of space to be
    displayed without taking room from the others */
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);

        this.setState({ spans });
    };

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    className="ui fluid image"
                    ref={this.imageRef} //By using the ref, information about its DOM element can be passed to the component
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;
