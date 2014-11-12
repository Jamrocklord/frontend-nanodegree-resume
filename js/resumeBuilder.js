//$("#main").append("Kolade Siyanbola");

var name= "Kolade Siyanbola";
var formattedName= HTMLheaderName.replace("%data%", name);

var role= "Developer";
var formattedRole= HTMLheaderRole.replace("%data%",role);
var skills=["Programming in Javascript, Python, Pascal and ADB"," ",",Technician"," ",",Car lover"];
$("#header").append(formattedName, formattedRole);
$("#main").append(skills);
