const express = require("express");
const router = express.Router();
const soap = require("soap");

router.get("/:name/", (req, res) => {
  const instructor = req.params.name;
  var url = "https://api.mindbodyonline.com/0_5/ClassService.asmx?wsdl";
  soap.createClient(url, function(err, client) {
    if (err) {
      throw err;
    }
    client.setEndpoint("https://api.mindbodyonline.com/0_5/ClassService.asmx");
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
          var APIResults = result.GetClassesResult.Classes.Class;
          var userClasses = [];

          for (var i = 0; i < APIResults.length; i++) {
            if (APIResults[i].Staff.Name === instructor) {
              const classDesc = APIResults[i];
              const instructor = classDesc.Staff.Name;
              const studioName = classDesc.Location.Name;
              const nameClass = classDesc.Level.Name;
              const location = classDesc.Location.City;
              const classLevel = classDesc.Level.Name;
              const description = classDesc.ClassDescription;
              const date = classDesc.Staff.StartDateTime;
              const time = classDesc.Staff.StartDateTime;
              const studio = classDec.Location.Name;
              const spots = classDesc.ClassDescription.IsAvailable;
              const cancellation = classDesc.ClassDescription.IsCanceled;
              const address =
                classDesc.Location.Address + classDesc.Location.Address2;
              const registration = classDesc.Program.ScheduleType;
              userClasses.push({
                instructor,
                studioName,
                nameClass,
                location,
                classLevel,
                description,
                date,
                time,
                studio,
                spots,
                cancellation,
                registration,
                address
              });
            }
          }
          res.json(userClasses);
        }
      }
    );
  });
});

module.exports = router;
