const conexion = require('../config/conexion');
const express = require("express");
const ruta = express();
const bodyParser = require('body-parser');

ruta.use(bodyParser.json())  
ruta.get('/', function(req, res) {
    res.json({ mensaje: '¡Index de Gestion de orden!' })  
  })

  ruta.get('/orders/', function(req, res) {
  
  let sql="SELECT * FROM orders;"
  conexion.query(sql,(err,rows)=>{
      if(err) throw err;
      else{
          res.json(rows)
      }
  })
  })

  ruta.get('/orders/:orderNumber', function(req, res) {
    conexion.query("SELECT * from orders where orderNumber = ?", [req.params.orderNumber],(err,rows)=>{
        if(err) throw err;
        if(rows.length === 0) res.json({codigo:'-1',mensaje: 'La orden solicitada no existe'})
        else{
            res.json(rows)
        }
    })
  })

  ruta.get('/customers/', function(req, res) {
  
    let sql="SELECT DISTINCT c.customerNumber,c.customerName, c.contactLastName,c.contactFirstName,c.phone, c.addressLine1, c.addressLine2, c.city, c.state, c.postalCode, c.country, c.salesRepEmployeeNumber, c.creditLimit, c.salesRepEmployeeNumber, o.orderNumber, o.orderDate FROM customers c JOIN orders o WHERE c.customerNumber = o.customerNumber;"
    conexion.query(sql,(err,rows)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
    })

    ruta.get('/customers/:customerNumber', function(req, res) {
  
        let sql="SELECT * FROM customers;"
        conexion.query("SELECT  DISTINCT c.customerNumber,c.customerName, c.contactLastName,c.contactFirstName,c.phone, c.addressLine1, c.addressLine2, c.city, c.state, c.postalCode, c.country, c.salesRepEmployeeNumber, c.creditLimit, o.orderNumber, o.orderDate  FROM customers c JOIN orders o WHERE c.customerNumber = o.customerNumber AND c.customerNumber =?", [req.params.customerNumber],(err,rows)=>{
            if(err) throw err;
            if(rows.length === 0) res.json({codigo:'-1',mensaje: 'El cliente solicitado no existe'})
            else{
                res.json(rows)
            }
        })
        })


ruta.get('/ordersCustomers/:customerNumber', function(req, res) {
    conexion.query("SELECT orders.orderNumber, orders.customerNumber FROM orders where customerNumber = ?", [req.params.customerNumber],(err,rows)=>{
        if(err) throw err;
        if(rows.length === 0) res.json({codigo:'-1',mensaje: 'El cliente solicitado no existe'})
        else{
            res.json(rows)
        }
    })
  })

  ruta.get('/employes/', function(req, res) {
  
    let sql="SELECT c.customerNumber, c.salesRepEmployeeNumber, e.lastName, e.firstName, e.email FROM customers c JOIN employees e ON c.salesRepEmployeeNumber = e.employeeNumber"
    conexion.query(sql,(err,rows)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
    })

    ruta.get('/employes/:salesRepEmployeeNumber', function(req, res) {
        conexion.query("SELECT c.customerNumber, c.salesRepEmployeeNumber, e.lastName, e.firstName, e.email FROM customers c JOIN employees e ON c.salesRepEmployeeNumber = e.employeeNumber where salesRepEmployeeNumber = ?", [req.params.salesRepEmployeeNumber],(err,rows)=>{
            if(err) throw err;
            if(rows.length === 0) res.json({codigo:'-1',mensaje: 'El empleado solicitado no existe'})
            else{
                res.json(rows)
            }
        })
      })

      ruta.get('/orderDetails/', function(req, res) {
  
        let sql="SELECT * FROM orderdetails"
        conexion.query(sql,(err,rows)=>{
            if(err) throw err;
            else{
                res.json(rows)
            }
        })
        })

        ruta.get('/orderDetails/:orderNumber', function(req, res) {
            conexion.query("SELECT * FROM orderdetails where orderNumber = ?", [req.params.orderNumber],(err,rows)=>{
                if(err) throw err;
                if(rows.length === 0) res.json({codigo:'-1',mensaje: 'La orden solicitada no existe'})
                else{
                    res.json(rows)
                }
            })
          })
  module.exports = ruta;