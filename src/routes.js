const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

//Primeira rota
//req -> contém todos os detalhes e informações de uma requisição para devolver uma resposta ao user
routes.get('/products', ProductController.index);
routes.get('/products/:id',ProductController.show);
//post sempre que for criar algo
routes.post('/products',ProductController.store);
routes.put('/products/:id',ProductController.update);
routes.delete('/products/:id',ProductController.destroy);
module.exports = routes;

/*
 (req, res) => {
    Product.create({
        title:'React Native',
        description:'Build native apps with React',
        url:'http://github.com/facebook/react-native'
    }); 

    return res.send('Hello world!!');
}

*/