# 1. Description

## Description
The Order Management API is a simple yet effective tool designed to facilitate the retrieval of data related to orders, customers, employees and order details. This API is ideal for educational purposes and practical exercises as it provides endpoints to query and retrieve data from a structured database. Leveraging Node.js and Express for request handling and MySQL for database interactions, this API offers a simple approach to accessing essential business data.

### Endpoints Overview
The API offers several endpoints to query data from the database:

1. **Endpoints**
 - URL: '/'
 - Method: GET
 - Respuesta: '{ mensaje: '¡Index de Gestion de orden!' } `

2. **Orders**
 - URL: '/orders/'
 - Method: GET
 - Description: Retrieves all orders from the database.
 
- URL: '/orders/:orderNumber'
 - Method: GET
 - Description: Retrieves a specific order by its order number.

3. **Customers**
 - URL: '/customers/'
 - Method: GET
 - Description: Retrieves all customers with their associated orders.
 
- URL: '/customers/:customerNumber'
 - Method: GET
 - Description: Retrieves a specific customer and their orders by customer number.

4. **Order Details**
 - URL: '/orderDetails/'
 - Method: GET
 - Description: Retrieve all order details.
 
- URL: '/orderDetails/:orderNumber'
 - Method: GET
 - Description: Retrieves order details for a specific order number.

5. **Employes**
 - URL: '/employes/'
 - Method: GET
 - Description: Retrieves all employees associated with customer sales.
 
- URL: '/employes/:salesRepEmployeeNumber'
 - Method: GET
 - Description: Retrieves a specific employee and their clients by employee number.

###  Used technology

- **Node.js**: Provides the runtime environment to build scalable, high-performance server-side applications.
- **Express**: A minimal and flexible Node.js web application framework that makes it easy to efficiently manage requests.
- **MySQL**: A reliable and widely used relational database management system (RDBMS) for data management.

# 2. Installation 
Installation
To start using this API, first make sure you have Node.js installed on your system. Then, clone this repository on your local machine.

Once the repository is cloned, navigate to the project directory and run the following command to install all the necessary dependencies:

```
npm install
```
# 3. Using
To start the server, you can use the following command:
```
node .index.js
```

# 4. Dependencies
1. Express: A web application framework for Node.js.
2. MySQL: A Node.js client for interacting with MySQL databases.
