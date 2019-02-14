exports.viewCourse = function(req, res) { 
  var name = req.params.name;
  console.log("The class name is: " + name);
  res.render("course", { "className": name });
};