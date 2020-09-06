import React from 'react';

interface FoodFavPros {
  fav : String
}

const Food: React.SFC<FoodFavPros> = ( { fav }) => (
  <div>
    내 이름은 {fav}
  </div>
)

const foodILike:FoodFavPros[] = [
  {
    fav: "hello"
  },
  {
    fav: "kimchi"
  },
  {
    fav: "배고파"
  }
]

function renderFood(dish:FoodFavPros) {
  return <Food fav={dish.fav}></Food>
}

function App() {
  return (
    <div >
      Hi Guys
      <Food fav="kimchi"/>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
