import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
    <h3>I love {name}</h3>
    <h3>{rating}/5.0</h3>
    <img src={picture} alt={name}/>
    </div>
  );
}


const food_list = [
  {
    id: 1,
    name:"kimchi",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maangchi.com%2Frecipe%2Fchaesik-kimchi&psig=AOvVaw2OLkQbafHI2Qt2chqLEumQ&ust=1595990512359000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPD7-4327uoCFQAAAAAdAAAAABAD",
    rating: 5
  },
  {
    id: 2,
    name:"samgyupsal",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EC%2582%25BC%25EA%25B2%25B9%25EC%2582%25B4&psig=AOvVaw3QkGWjc1QHztu185VeqlfO&ust=1595990599873000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDgg7j27uoCFQAAAAAdAAAAABAD",
    rating: 4.5
  }
];

//to get props
// function Potato(props) {
//   return (
//     <h3>I love potato</h3>
//   );
// }

//to get fav in props
// function Potato({ fav }) {
//   return (
//     <h3>I love potato</h3>
//   );
// }

// function App() {
//   return (
//     <div>
//       {food_list.map(food => (
//         <Food key = {food.id} name={food.name} picture = {food.image} rating = {food.rating}/>
//       ))}
//     </div>
//   );
// }


function renderFood(food) {
  return <Food key={food.id} name={food.name} picture={food.image} rating = {food.rating}/>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, //required to have a value
  rating: PropTypes.number //no need to have a value
};

function App() {
  return (
    <div>
      {food_list.map(renderFood)}
    </div>
  );
}

export default App;
