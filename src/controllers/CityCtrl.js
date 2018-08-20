const {City} = require('../models')
const {Op} = require('sequelize')


module.exports = {
  async index (req, res) {
    try {
      let city = null
      const search = req.params.name
      if (search) {
        city = await City.findAll({
          where: {
            [Op.or]: [{
              Name: {
                [Op.like]: `%${search}%`
              }}]
          }
        })
      } else {
        city = await City.findAll({
          limit: 50
        })
      }
      res.send(city)
    } catch (err) {
      console.log(err)

      res.status(500).send({
        error: 'an error has occured trying to fetch the city'
      })
    }
  }
}
