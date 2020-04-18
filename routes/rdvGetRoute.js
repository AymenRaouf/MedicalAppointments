module.exports = function(app, db) {


  app.get('/api/rdv/rdv_id/:rdv_id', (req, res) => {
    processData(res, "SELECT * FROM rdv where rdv_id == "+req.params.rdv_id);
  });


  // $attribute = ['client_id', 'client_name', 'date', 'heure']*
  app.get('/api/rdv/:attribute/:name', (req, res) => {
    processData(res, "SELECT * FROM rdv where "+req.params.attribute+" = '"+req.params.name+"'");
  });

  // Afficher systématiquement les RDV du jour courant
  //
  app.get('/api/rdv', (req, res) => {
    var date = new Date();
    processData(res, "SELECT * FROM rdv where date = ?; ");
    var values = [date];
  });



  function processData(res, sql){
    db.serialize(function() {
      db.all(sql, 
        function(err, rows) {
          if(err){
            console.error(err);
            res.status(500).send(err);
          }
          else
            sendData(res, rows, err);
      });
    });
  }

  function sendData(res, data, err){
    res.setHeader("Access-Control-Allow-Origin","*");

    if(data[0])
      res.send(data);
    
    else{
      res.status(404).send("Rdv not found");
    }
  }
};