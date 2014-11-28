
var name= "Kolade Siyanbola";
var role= "Student";



var skills= [
    ["Programming in Javascript, Python, Pascal and ADB."],
    ["also I am a technician able to fix computers and hand held devices."],
    ["I am also a big car lover."]];
 
var bio ={
  "name": name,
  "age": 17,
  "role": role,
  "skills": skills,
  "welcome_message": "Welcome, thank you for viewing this web page. This web page shows my resume.",
   "bio_image": "images/Profile_Picture.jpg"
};

var contact_info= {
      "Address": "226 Creek Path Ave. Oakville, L6L-6T5, ON, Canada",
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
     "Oniline_courses":"Udacity Javasript basics course",
     "URL": "https://www.udacity.com/course/ud804"
    }
      ]
  };
  
  var work = {
         "jobs": [
                    {
            "employer":"Nigerian High Commission",
            "title":"Professional Druming",
            "Position":"senior drumming member",
            "dates":"2004 - 2014",
            "Location":" Waterloo Rd Kingston Jamaica",
            "description":"I have played for the Nigerian High Commission drumming group for many years and is a core member of the group."
        },
        {
            "employer":"Best Buy",
            "title":"Geek Squad",
            "Position":"Handheld device support",
            "dates":"2007 - present",
            "Location":"2500 Winston Park Dr.Unit A Oakville, ON L6H 7E5",
            "description":"I deal with all the of best buy's technical support"
        }
    ]
};
   
  var projects = {
        "project": [
                        {
            "title":"Udacity Resume Project",
            "dates":"2014",
            "description":"Make a resume that displays my name, age, work experience, education and personal information.",
            "image": ""
        }
    ]
};
  /*
  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill= HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").appned(formattedSkill);
    HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").appned(formattedSkill);
    HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").appned(formattedSkill);
    HTMLskills.replace("%data%",bio.skills[3]);

};
    */

var formattedName= HTMLheaderName.replace("%data%",name);
var formattedRole= HTMLheaderRole.replace("%data%",role);
var Formattedmobile= HTMLmobile.replace("%data%",contact_info.Phone_number);
var Formattedemail= HTMLemail.replace("%data%",contact_info.email);
var FormattedContact=  HTMLcontactGeneric.replace("%contact%",contact_info.Address);
var Formattedgithub= HTMLgithub.replace("%data%", contact_info.github);
var Formattedage= bio.age;
var Formatttebioimage= HTMLbioPic.replace("%data%",bio.bio_image);
var FormattedAddresslocation= HTMLlocation.replace("%data%",contact_info.Address);
var formattedGeneric= HTMLcontactGeneric.replace("%data%",FormattedAddresslocation + Formattedemail  + Formattedmobile + Formattedgithub);
var FormattedWelcomeMsg= HTMLWelcomeMsg.replace("%data%", bio.welcome_message);


$("#header").prepend(formattedName, formattedRole);
$("#header").prepend(Formatttebioimage);
$("#header").append(FormattedWelcomeMsg);

work.display= function () {
    $("#workExperience").append(HTMLworkStart);
        for (var job= 0; job < work.jobs.length; job++) {

            var FormattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                $(".work-entry:last").append(FormattedworkEmployer);

            var FormattedworkTitle= HTMLworkTitle.replace("%data%", work.jobs[job].title);
                 $(".work-entry:last").append(FormattedworkTitle);
    
            var FormattedworkDates= HTMLworkDates.replace("%data%", work.jobs[job].dates);
                 $(".work-entry:last").append(FormattedworkDates);

            var FormattedworkLocation= HTMLworkLocation.replace("%data%", work.jobs[job].location);
                 $(".work-entry:last").append(FormattedworkLocation);
        
            var FormattedworkDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description);
                 $(".work-entry:last").append(FormattedworkDescription);
        
    }
};

work.display();

projects.display= function(){
    $("#projects").append(HTMLprojectStart);  
        for (var pro= 0; pro < projects.project.length; pro++){
        
            var FormattedprojectTitle= HTMLprojectTitle.replace("%data%", projects.project[pro].title);
                $(".project-entry:last").append(FormattedprojectTitle);
            
            var FormattedprojectDates= HTMLprojectDates.replace("%data%", projects.project[pro].dates); 
                $(".project-entry:last").append(FormattedprojectDates);
            
            var FormattedprojectDescription= HTMLprojectDescription.replace("%data%", projects.project[pro].description); 
                $(".project-entry:last").append(FormattedprojectDescription);
            
            var FormattedprojectImage= HTMLprojectImage.replace("%data%", projects.project[pro].image);
                $(".project-entry:last").append(FormattedprojectImage);
            
    }
};
projects.display();
//$("#mapDiv").append(Formattedlocation);

$("#letsConnect").append(formattedGeneric);

function inName(name) {
name = name.trim().split(" ");
console.log(name); 
name[1]= name[1].toUpperCase();
name[0]= name[0].slice(0.1).toUpperCase() + name[0].slice(1).toLowerCase();

return name[0] +" "+ name[1];
}

$("#main").append(internationalizeButton);

/* To Do List 
 * edit IF statment - 
 * code in functions into the objects 
 * display all objects to the page 
 * '#' will be replaced with the url 
 */