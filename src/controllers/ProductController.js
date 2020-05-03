const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const {page = 1} = req.query;
        const produto = await product.paginate({},{page,limit:10});

        return res.json(produto);
    },
    async show(req, res) {
        const produto = await product.findById(req.params.id);
        return res.json(produto);
    },
    async store(req, res) {
        //Criação
        const produto = await product.create(req.body);
        return res.json(produto);
    },
    async update(req, res) {
        const produto = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(produto);
    },
    async destroy(req, res) {
        await product.findByIdAndRemove(req.params.id);
        return res.send();
    }
};