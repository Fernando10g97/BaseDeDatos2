const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/insomnia1', (req, res) => {
    connection.query("SELECT * FROM IngresosUsuarios", 
    function(err,rows) {
      if (err) {
        res.send(err);
      } else {
        res.send(rows);
      }
    });
  });

  app.get("/insomnia2", (req, res) => {
    connection.query("SELECT * FROM CancionesMasEscuchadas",
    function(err,rows) {
      if (err) {
        res.send(err);
      } else {
        res.send(rows);
      }
    });
  });

  app.get("/insomnia3", (req, res) => {
    connection.query("SELECT * FROM ReporteArtista",
    function(err,rows) {
      if (err) {
        res.send(err);
      } else {
        res.send(rows);
      }
    });
  });
  
};
