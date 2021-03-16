const userroutes = require('./routes/users');

class Router {

    constructor(app) {
        this.app = app;
    }

    async init() {
        this.app.get('/', this.index)
        this.app.get('/home', this.index)
        this.app.get('/deck-builder', this.indexdeckbuilder)
        this.app.use('/users', userroutes);
    }

    async index(req, res, next) {
        return res.send("Hello world");
    }

    async indexdeckbuilder(req, res, next) {
        return res.send("Deckbuilder");
    }
}

module.exports = Router;