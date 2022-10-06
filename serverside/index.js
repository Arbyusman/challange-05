const express = require("express");
const { where } = require("sequelize");
const {cars} = require('./models');
const app = express();
const port = 2424;

app.use(express.json());

app.post('/addCar',(req,res)=>{
    const body = req.body
    cars.create(body).then(cars =>{
        res.status(200).json({data:cars})
    }).catch(err => {
        res.status(500).json(err)
    })
})

app.get('/listCars',(req,res)=>{
    cars.findAll().then(cars =>{
        res.status(200).json({data:cars})
    }).catch(err => {
        res.status(500).json(err)
    })
})

app.get('/listCars/:id',(req,res)=>{
    const id = req.params.id
    cars.findByPk(id).then(cars =>{
        res.status(200).json({data:cars})
    }).catch(err => {
        res.status(500).json(err)
    })
})

app.put('/updateCars/:id',(req,res)=>{
    const id = req.params.id
    const body = req.body
    cars.update(body,{where: {'id':id}}).then(cars =>{
        res.status(200).json({data:cars})
    }).catch(err => {
        res.status(500).json(err)
    })
})

app.delete('/deleteCars/:id',(req,res)=>{
    const id = req.params.id
    cars.destroy({where: {'id':id}}).then(cars =>{
        res.status(200).json({data:cars})
    }).catch(err => {
        res.status(500).json(err)
    })
})


app.listen(port, () => {
    console.log("Example app listening on http://localhost:%d", port);
  });