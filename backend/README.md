# Project Documentation

## Overview
This project is a Flask-based backend service designed to manage various functionalities such as shopping cart operations, order management, coupon handling, statistical reports, and payment processing. The structure is optimized for ease of development and maintenance.

---

## Requirements
- Python 3.8+
- Flask framework
- Additional dependencies listed in `requirements.txt`

---

## How to Run the Project

1. Clone the repository or copy the directory to your local machine.
2. Navigate to the project directory.
3. Install dependencies using:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure the `.env` file with the required settings.
5. Start the application using:
   ```bash
   python run.py
   ```

---

## APIs Implemented

### **Cart API**
- `POST /add`: Add a product to the cart (`add_product`).
- `DELETE /remove`: Remove a product from the cart and recalculate totals (`remove_from_cart`).
- `GET /<user_id>`: View the cart for a specific user (`view_cart`).
- `POST /apply_coupon`: Apply a discount coupon to the cart (`apply_coupon`).

### **Coupon API**
- `POST /add`: Add a new coupon (`add_coupon`).
- `DELETE /<coupon_id>`: Delete a coupon by its ID (`delete_coupon`).
- `GET /<coupon_id>`: View details of a specific coupon by its ID (`view_coupon`).
- `GET /all`: View all available coupons (`view_all_coupons`).

### **Manager API**
- `PUT /add`: Add a new manager (`add_manager`).
- `DELETE /remove`: Remove an existing manager (`remove_manager`).

### **Order API**
- `GET /view`: Retrieve all orders with optional filters for status and time range (`get_orders`).
- `POST /create-from-cart`: Create an order from the cart (`create_order_from_cart`).
- `PUT /<order_id>/status`: Update the status of an order (`update_order_status`).
- `GET /<order_id>/status-history`: View the status history of an order (`get_order_status_history`).
- `PUT /<order_id>/cancel`: Cancel an order (`cancel_order`).
- `PUT /<order_id>/completed`: Mark an order as completed (`mark_order_completed`).
- `GET /<order_id>`: Retrieve details of a specific order (`get_order_details`).

### **Payment API**
- `POST /create`: Initiate a payment (`create_order_route`).
- `POST /capture`: Confirm a payment (`capture_order_route`).

### **Product API**
- `GET /search`: Search for products with filters and sorting (`search_with_filters`).
- `POST /add`: Add a new product (`add_product`).
- `PUT /update/<product_id>`: Update product details (`update_product`).
- `DELETE /delete/<product_id>`: Delete a product by its ID (`delete_product`).

### **Rating API**
- `POST /submit`: Submit a product review and rating (`submit_review`).
- `GET /product/<product_id>`: Fetch reviews for a specific product (`get_reviews`).
- `GET /product/<product_id>/average`: Get the average rating of a product (`get_average_rating`).
- `GET /user/<user_id>`: Fetch reviews submitted by a specific user (`get_reviews_by_user`).
- `DELETE /delete/<review_id>`: Delete a review by its ID (`delete_review`).

### **Stats API**
- `GET /revenue`: Calculate revenue and product sales statistics by month and year (`calculate_revenue`).

### **User API**
- `POST /register`: Register a new user (`register_user`).
- `POST /login`: Login an existing user (`login_user`).
- `PUT /update/<user_id>`: Update user information (`update_user`).
- `DELETE /delete/<user_id>`: Delete a user by its ID (`delete_user`).
- `GET /profile/<user_id>`: View the profile of a specific user (`get_user_profile`).

---

## Contact
For further assistance or questions about the project, please contact the project maintainer.

