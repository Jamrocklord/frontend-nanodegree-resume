//$("#main").append("Kolade Siyanbola");

var name= "Kolade Siyanbola";
var formattedName= HTMLheaderName.replace("%data%", name);

var role= "Developer";
var formattedRole= HTMLheaderRole.replace("%data%",role);
var skills= [" Skills:"," ","Programming in Javascript, Python, Pascal and ADB"," ",",also I am a technician able to fix computers and hand held devices."," ",",I am also a big car lover"];

var bio ={
  "name": name,
  "age": 17,
  "role": role,
  "skills": skills,
};
var FormattedContact=  HTMLcontactGeneric.replace("%contact%", bio);
$("#header").append(formattedName, formattedRole);
$("#main").append(FormattedContact);
