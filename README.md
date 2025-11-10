# Shopping Cart Application

 The application allows users to:

- **View all products**: Displays a list of products with their name, price, and description.
- **Add items to the cart**: Users can add products to the shopping cart, including handling quantities.
- **Adjust quantities**: Increase or decrease the quantity of a specific product in the cart.
- **Remove items**: Remove individual products from the cart entirely.
- **View the cart summary**: Displays the total quantity of items and the total price in real-time.
- **Handle 404 routes**: Navigating to a non-existent route displays a custom 404 page.
- **Fetch product data**: Simulates fetching products from a sample API using Axios.

## Features

- **State Management**: Uses Redux for managing the application's state, including cart management.
- **Routing**: Implements client-side routing with React Router DOM to handle navigation and a custom 404 page.
- **API Requests**: Integrates Axios for making HTTP requests to interact with external APIs.
- **Dynamic UI Updates**: Add, remove, and delete items in the cart with real-time updates.
- **Error Handling**: Displays a custom 404 page for undefined routes.