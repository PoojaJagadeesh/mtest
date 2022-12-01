module.exports = (sequelize, Sequelize) => {
    const title_model = sequelize.define('title', {
    tconst: {
        type: Sequelize.STRING(255),
        primaryKey: true,
       
      },
    titletype        : Sequelize.STRING(255),
    primarytitle       : Sequelize.STRING(255),
    originaltitle    : Sequelize.STRING(255),
    isadult    : Sequelize.STRING(100),
    startyear    : Sequelize.STRING(255),
    endyear    : Sequelize.STRING(45),
    runtimeminutes    : Sequelize.STRING(100),
    genres    : Sequelize.STRING(255),},
    {timestamps:false});
    // title_model.associate = function(models) {
    //     title_model.belongsTo(models.name, {foreignKey: 'knownfortitles', as: 'titles'})
    //   };

    return title_model;}
