const db = require("../models");
const titles = db.title;
const Op = db.Sequelize.Op;


// Retrieve all titles from the database.
module.exports.findAll = (req, res) => {
  console.log(req);
  const{page,size,originaltitle}=req.query;
  
  var condition = originaltitle ? { originaltitle: { [Op.like]: `%${originaltitle}%` } } : null;
  const { limit, offset } = getPagination(page, size);
  titles.findAndCountAll({
   
    where: condition,
    limit,
    offset,
  //  attributes: ["primaryname", "birthyear",'primaryprofession','knownfortitles'],
    // include: {
    //   model: titles,
    //   as: 'title',
    //   where: {
    //     tconst: { [Op.in]: 'knownfortitles' }
    //   }
    // },
    attributes: ["originaltitle", "startYear",'titleType','genres'],
  })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving titles.",
      });
    });
};
const getPagination = (page, size) => {
  const limit = size ? +size : 1;
  const offset = page ? page * limit : 0;
return { limit, offset };
};
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: titles } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
return { totalItems, titles, totalPages, currentPage };
};
 

