module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        job_title: DataTypes.STRING
      },
      {
        freezeTableName: true,
      }
    ); 
    return User;
  }