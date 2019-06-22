const controllers = require('./controllers');
const path = require('path');
module.exports = app => {
  app
    .get('https://api.johnspizza.com/v1/Employment/Programmers/Assignment/', controllers.getAll)
    .post('https://api.johnspizza.com/v1/Employment/Programmers/Assignment?lastName=Benitez', controllers.apiSubmit)

    .all("*", (req, res, next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
};
