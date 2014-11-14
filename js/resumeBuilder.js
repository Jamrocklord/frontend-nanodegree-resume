//$("#main").append("Kolade Siyanbola");

var name= "Kolade Siyanbola";
var formattedName= HTMLheaderName.replace("%data%",name);

var role= "Developer";
var formattedRole= HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedName, formattedRole);

var skills= ["Skills: Programming in Javascript, Python, Pascal and ADB. \n\
also I am a technician able to fix computers and hand held devices. I am also a big car lover"];
 
var bio ={
  "name": name,
  "age": 17,
  "role": role,
  "skills": skills,
  "welcome_message": "Welcome, thank you for viewing this web page. This web page shows my resume.",
  "bio_image": "images/Profile_Picture.jpg"
};
var contact_info= {
      "Address": "226 Creek Path Ave. Oakville, ON, Canada",
      "Postal Code": "L6L-6T5",
      "Phone_number": "(416) 371-4045",
      "email": "kool.siyanbola@gmail.com",
      "github": "JamrockLord"
    };
  var education= {
    "Elementary school": "Liberty Acadamy At The Proiry",  
    "High school": "St. Thomas Aquinas Catholic Secondary School"      
};
  
var Formattedmobile= HTMLmobile.replace("%data%",contact_info.Phone_number);
var Formattedemail= HTMLemail.replace("%data%",contact_info.email);
var Formattedgithub= HTMLgithub.replace("%data%",contact_info.github);
var Formatttebioimage= HTMLbioPic.replace("%data%",bio.bio_image);
var formattedGeneric = HTMLcontactGeneric.replace("%data%", Formattedmobile + Formattedemail + Formattedgithub);

$("#topContacts").append(formattedGeneric);






//var Formattedage= bio.age;

/*
$("#header").append(Formattedmobile);
$("#header").append(Formattedemail);
$("#main").append(FormattedContact);
$("#header").prepend(Formattedimage);
$("#header").append(Formattedgithub);

*/