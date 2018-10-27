// mindbody.js
// Replace source_name, password and site_id values in `var params`
var soap = require("soap");
module.exports = {
  getClasses: function(res) {
    var url = "https://api.mindbodyonline.com/0_5/ClassService.asmx?wsdl";
    soap.createClient(url, function(err, client) {
      if (err) {
        throw err;
      }
      client.setEndpoint(
        "https://api.mindbodyonline.com/0_5/ClassService.asmx"
      );
      var params = {
        Request: {
          SourceCredentials: {
            SourceName: "IndependentPilates",
            Password: "Y1rNYY75wHgrXsjUspaLKMYb1vc=",
            SiteIDs: {
              int: ["-99"]
            }
          }
        }
      };
      client.Class_x0020_Service.Class_x0020_ServiceSoap.GetClasses(
        params,
        function(errs, result) {
          if (errs) {
            console.log(errs);
            //add a statement for the error case.....
          } else {
            res.json(result.GetClassesResult);
            //fill in the response object here
          }
        }
      );
    });
  }
};

// after line 31 add the req.body.params and the object
//

// Your application file.js
//var mindbody = require('./mindbody.js');
//mindbody.getClasses();
