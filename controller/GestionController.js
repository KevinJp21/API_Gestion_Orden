const conexion = require('../config/conexion');
const express = require("express");
const ruta = express();
const bodyParser = require('body-parser');

ruta.use(bodyParser.json())  
ruta.get('/', function(req, res) {
    res.json({ mensaje: '¡Index de Gestion de orden!' })  
  })

  ruta.get('/customers/', function(req, res) {
    let sql="select customers.customerName from customers"
    conexion.query(sql,(err,rows)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
  })   

  ruta.get('/orders/', function(req, res) {
  
  let sql="select * from orders order by orderNumber"
  conexion.query(sql,(err,rows)=>{
      if(err) throw err;
      else{
          res.json(rows)
      }
  })
  })


ruta.get('/orders/:orderNumber', function(req, res) {
    conexion.query("select * from orders where orderNumber = ?", [req.params.orderNumber],(err,rows)=>{
        if(err) throw err;
        if(rows.length === 0) res.json({codigo:'-1',mensaje: 'La orden solicitada no existe'})
        else{
            res.json(rows)
        }
    })
  })

  ruta.post('/orders/:orderNumber', function(req, res) {
    conexion.query("SELECT orders.orderNumber, orders.orderDate, customers.customerName,  CONCAT(COALESCE(customers.addressLine1, ''), CASE WHEN customers.addressLine1 IS NOT NULL AND customers.addressLine2 IS NOT NULL THEN ' + ' ELSE '' END, COALESCE(customers.addressLine2, '')) as Direcciones, customers.phone FROM `orders` JOIN customers on orders.customerNumber = customers.customerNumber WHERE orders.orderNumber = ?", [req.params.orderNumber],(err,rows)=>{
        if(err) throw err;
        if(rows.length === 0) res.json({codigo:'-1',mensaje: 'La orden solicitada no existe'})
        else{
            res.json(rows)
        }
    })
  })
  module.exports = ruta;