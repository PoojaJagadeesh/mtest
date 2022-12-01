const db = require("../models");
const names = db.names;
const titles=db.title;
const Op = db.Sequelize.Op;


// Retrieve all Names from the database.
module.exports.findAll = (req, res) => {
 // console.log(req);
 const{page,size,primaryname}=req.query;
  
  var condition = primaryname ? { primaryname: { [Op.like]: `%${primaryname}%` } } : null;
  const { limit, offset } = getPagination(page, size);
  names.findAndCountAll({
   
    where: condition,
    limit,
    offset,
    attributes: ["primaryname", "birthyear",'primaryprofession','knownfortitles'],
    // include: {
    //   model: titles,
    //   as: 'title',
    //   where: {
    //     tconst: { [Op.in]: 'knownfortitles' }
    //   }
    // },
    //attributes: ["originaltitle", "startYear",'titleType','genres'],
  })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving names.",
      });
    });
};
const getPagination = (page, size) => {
  const limit = size ? +size : 1;
  const offset = page ? page * limit : 0;
return { limit, offset };
};
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: names } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
return { totalItems, names, totalPages, currentPage };
};
 

