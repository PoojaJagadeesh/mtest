module.exports = (sequelize, Sequelize) => {

const name_model = sequelize.define('name', {
    nconst      : Sequelize.STRING(255),
    primaryname        : Sequelize.STRING(255),
    birthyear       : Sequelize.STRING(255),
    deathyear    : Sequelize.STRING(45),
    primaryprofession    : Sequelize.STRING(100),
    knownfortitles   :{type : Sequelize.STRING(255),
      get(){
        return this.getDataValue('knownfortitles').split(',')
      },
      set(val){
        this.setDataValue('knownfortitles',val.join(','));
      },
      // references: {        
      //   model: 'titles',
      //   key: 'tconst'
      // }

  }},{
    timestamps: false,

  });
  // name_model.associate = function(models) {
  //   name_model.hasMany(models.titles, {as: 'title'})
  // };

return name_model;}
