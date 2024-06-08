import './App.css';
import INITIAL_RESTAURANT_DATA from './Data/restaurant.json';
import { Restaurant } from './Components/Restaurant';

function App() {
  const restaurantData = INITIAL_RESTAURANT_DATA;

  return (
    <div className="App">
      {
        restaurantData.map((data) => (
          <Restaurant key={data.restaurant_name} newRestaurantData={data} />
        ))
      }
    </div>
  );
}

export default App;
