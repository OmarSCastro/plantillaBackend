const express = require('express');


function routerApi(app){
    const router = express.Router();
    app.use('/api', router);
    // router.use('/modulo',moduloRouter);
};

module.exports = routerApi;