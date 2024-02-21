module.exports = (sequelize, DataTypes) => {
  const Profession = sequelize.define(
    'Profession',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'professions',
      timestamps: true,
    },
  );

  Profession.associate = (models) => {
    Profession.hasMany(models.Applicant, {
      as: 'Applicant',
      foreignKey: 'professionId',
    });
  };

  return Profession;
};
