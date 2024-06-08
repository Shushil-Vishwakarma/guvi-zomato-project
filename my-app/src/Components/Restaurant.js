export function Restaurant({ newRestaurantData }) {
   return (
      <div className="restaurant-list">
         <div className="restaurant-card">
            <img className="restaurant-poster" src={newRestaurantData.restaurant_thumb} alt={newRestaurantData.restaurant_name} />
            <h4 className="restaurant-name">{newRestaurantData.restaurant_name}</h4>
            <h6 className="restaurant-address">Address - {newRestaurantData.address}</h6>
            <div className="rating-cart">
               <p className="restaurant-rating">⭐ {newRestaurantData.average_rating}</p>
               <button className="add-to-cart">Add to cart</button>
            </div>
         </div>
      </div>
   );
}
