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
  "skills": skills
};
var contact_info= {
      "Address": "226 Creek Path Ave. Oakville, ON, Canada",
      "Postal Code": "L6L-6T5",
      "Phone Number": "(416)371-4045",
      "E-Mail": "kool.siyanbola@gmail.com"
  };
  
var FormattedContact=  HTMLcontactGeneric.replace("%contact%",contact_info);
$("#header").append(formattedName, formattedRole);
$("#main").append(FormattedContact);
