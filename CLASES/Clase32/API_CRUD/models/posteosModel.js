// importo la base de datos

const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")



const PosteosModel =db.define("posteos",{
titulo:{type:DataTypes.STRING},
contenido:{type:DataTypes.STRING},
})

module.exports = PosteosModel






