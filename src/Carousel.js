import React, { Component } from "react";

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      active: 0,
    };
  }

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal"></img>
        <div className="carousel-smaller">
          {photos.map((photo, index) => {
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              src={photo}
              data-index={index}
              className={index === active ? "active" : ""}
              alt="animal"
            ></img>;
          })}
        </div>
      </div>
    );
  }
}
