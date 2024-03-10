module.exports = (sequelize, DataTypes) => {
  const Applicant = sequelize.define(
    'Applicant',
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
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      areaCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      linkedIn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro'),
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: 'default.png',
      },
    },
    {
      tableName: 'applicants',
      timestamps: false,
    },
  );

  Applicant.associate = (models) => {
    Applicant.belongsTo(models.Profession, {
      as: 'profession',
      foreignKey: 'professionId',
    });
  };

  return Applicant;
};
