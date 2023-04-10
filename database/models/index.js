const { ModuloSchema, Modulo } = require("./Modulo.model");

function setupModels(sequelize){
    Modulo.init(ModuloSchema, Modulo.config(sequelize));


    Modulo.associate(sequelize.models);
};

module.exports = setupModels