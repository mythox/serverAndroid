module.exports = {
  port: process.env.PORT || 8088,
  db: {
    database: process.env.DB_NAME || 'world',
    user: process.env.DB_USER || 'steven',
    password: process.env.DB_PASS || 'eclipse',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost'
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}