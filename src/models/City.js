module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    ID: {
      type: DataTypes.INTEGER(11),
      unique: true,
      primaryKey: true,
      required: true
    },
    Name: {
      type: DataTypes.CHAR(35),
      required: true
    },
    CountryCode: {
      type: DataTypes.CHAR(3),
      required: true
    },
    District: {
      type: DataTypes.CHAR(20),
      required: true
    },
    Population: DataTypes.INTEGER(11)
  }, {
    timestamps: false,
    freezeTableName: true
  })

  City.associate = function (models) {
  }

  return City
}
