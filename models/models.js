const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Item = sequelize.define('item', { 
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    code: {type: DataTypes.STRING, allowNull: false},
    brand: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    grip: {type: DataTypes.STRING, allowNull: false},
    bend: {type: DataTypes.INTEGER, allowNull: false},
    rigidity: {type: DataTypes.INTEGER, allowNull: false},
    type: {type: DataTypes.STRING, allowNull: false},
    count: {type: DataTypes.INTEGER, allowNull: true},
    renew: {type: DataTypes.STRING, allowNull: true},
    height: {type: DataTypes.INTEGER, allowNull: true},
    img: {type: DataTypes.STRING, allowNull: true}
})

const Image = sequelize.define('image', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, allowNull: false},
    item_code: {type: DataTypes.STRING, allowNull: false}
})

module.exports = {
    Item,
    Image
}