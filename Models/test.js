//This is where we are setting up to create our tables. The model is like a template of what sequelize will pass to Postgres. 'test' is the name of the table and the first arguement of the define function. The second argument is an object of key/value pairs.

module.exports = function (sequelize, DataTypes) {
    
return sequelize.define('test', { 

testdata: DataTypes.STRING
});
};