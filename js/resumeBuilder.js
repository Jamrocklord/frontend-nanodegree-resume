//$("#main").append("Kolade Siyanbola");

var name= "Kolade Siyanbola";
var formattedName= HTMLheaderName.replace("%data%",name);

var role= "Student";
var formattedRole= HTMLheaderRole.replace("%data%",role);


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
      "Schools": [
          {
    "City":"Kingston, Jamaica",
    "Elementary_school": "Liberty Acadamy At The Proiry",
    "High_school": "St. George's College",
    "Deploma":"High School Deploma",
    "Subjects": "Math, History, Literature, English, Visual Arts, Computer Science, Religous Education"
    },
    {
     "City": "Oakville, Ontario, Canada",
     "High_school_two": "St. Thomas Aquinas Catholic Secondary School",
     "Deploma":"High School Deploma",
     "Subjects": "Math, History, English, Religous Education, Computer Science",
     "Oniline_courses":"Udacity Javasript basics course"
    }
      ]
  };
    var work= {
      "job_one": "Professional Druming",
      "job_ two": "Technician for handheld devices"
  };
  
  var projects= {
      "Title": "",
      "Employer": "",
      "Date": "",
      "Discription": ""
  };
  
var Formattedmobile= HTMLmobile.replace("%data%",contact_info.Phone_number);
var Formattedemail= HTMLemail.replace("%data%",contact_info.email);
var FormattedContact=  HTMLcontactGeneric.replace("%contact%",contact_info.Address);
var Formattedgithub= HTMLgithub.replace("%data%", contact_info.github);
var Formattedage= bio.age;
var Formatttebioimage= HTMLbioPic.replace("%data%",bio.bio_image);
var formattedGeneric = HTMLcontactGeneric.replace("%data%", Formattedmobile + Formattedemail + Formattedgithub);



$("#header").prepend(formattedName, formattedRole);
$("#topContacts").append(formattedGeneric);
$("#main").prepend(Formatttebioimage);





//var Formattedage= bio.age;

/*
>>>>>>> origin/master
$("#header").append(Formattedmobile);
$("#header").append(Formattedemail);
$("#main").append(FormattedContact);
$("#header").prepend(Formattedimage);
$("#header").append(Formattedgithub);

*/
