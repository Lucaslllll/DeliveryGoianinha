import React, {useState, useEffect} from 'react';

import StarRating from 'react-native-star-rating';

function RatingStar(props){
  const [starCount, setStarCount] = useState(0);

  useEffect(() => {
    setStarCount(props.star);
  }, [])


  function onStarRatingPress(rating) {
    setStarCount(rating);
  }

  return (
    <StarRating
      disabled={props.dis}
      maxStars={5}
      starSize={40}
      fullStarColor={'#F1C40F'}
      emptyStarColor={'#F1C40F'}
      rating={starCount}
      selectedStar={rating => onStarRatingPress(rating)}
    />
  );
}

export default RatingStar;
