import React from 'react';

interface FoodFavPros {
  fav : String
}

function Food(props:FoodFavPros) {
  return <div>
    hi {props.fav}
  </div>
}

// const Food: React.SFC<FoodFavPros> = ( { fav }) => (
//   <div>
//     내 이름은 {fav}
//   </div>
// )

function App() {
  return (
    <div >
      Hi Guys
      <Food fav="kimchi"/>
    </div>
  );
}

export default App;
