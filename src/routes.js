const CityCtrl = require('./controllers/CityCtrl')

module.exports = (app) => {
  app.get('/getCity', CityCtrl.index)
  app.get('/getcity/:name', CityCtrl.index)
}
