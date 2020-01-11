import React, {useState, useEffect} from 'react';

import StarRating from 'react-native-star-rating';

import API from '../../services/api';


function RatingStar(props){
  const [starCount, setStarCount] = useState(0);

  useEffect(() => {
    setStarCount(props.star);
  }, [])

  async function handleRating(rating, idR){
    await API.post('/api/classificacao_restaurante/', {
      nota: rating,
      restaurante: idR
    });
  }

  function onStarRatingPress(rating) {
    setStarCount(rating);
    handleRating(rating, props.idR);
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
