import React, { Component } from "react";

import StarRating from "react-native-star-rating";

class RatingStar extends Component {
 constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  render() {
    return (
      <StarRating
        disabled={false}
        maxStars={5}
        starSize={40}
        fullStarColor={"#F1C40F"}
        emptyStarColor={"#F1C40F"}
        rating={this.state.starCount}
        selectedStar={rating => this.onStarRatingPress(rating)}
      />
    );
  }
}

export default RatingStar
;;
