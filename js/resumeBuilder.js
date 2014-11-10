//$("#main").append("Kolade Siyanbola");

var name= "Kolade Siyanbola";
var formattedName= HTMLheaderName.replace("%data%", name);

var role= "Developer";
var formattedRole= HTMLheaderRole.replace("%data%",role);

$("#header").append(formattedName, formattedRole);
