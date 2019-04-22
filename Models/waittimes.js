module.exports = function (sequelize, DataTypes) {
    
return sequelize.define('waittime', {
 parkname: DataTypes.STRING, 
 ridename: DataTypes.STRING,
 postedwait: DataTypes.INTEGER,
 actualwait: DataTypes.INTEGER,
 owner: DataTypes.INTEGER
});
};