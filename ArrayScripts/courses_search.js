let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git", Location: "Classroom 7",
        StartDate: "09/08/22", Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript", Location: "Classroom 9",
        StartDate: "11/22/22", Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java", Location: "Classroom 1", StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases", Location: "Classroom 7",
        StartDate: "03/16/23", Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular", Location: "Classroom 1", StartDate: "04/25/23",
        Fee: "50.00",
    }
];

function getCourseStart(courses, id) {
    // let courseStartDate = [];

    for (let i = 0; i < courses.length; i++) {
        // console.log(courses[i].CourseId)
        if (courses[i].CourseId == id) {
            console.log(courses[i].StartDate)
            
        }
         return courses[i].StartDate
    }
    
}
let title;
function getCourseTitle(Courses,courseid){
   
    for (let i = 0; i < Courses.length; i++) {
        
        if (Courses[i].CourseId == courseid) {
            
            title=Courses[i].Title;
            
        }
        
    }
    return title;
}
function getCoursesPriced50OrLess(Courses,coursePrice){
    let arrayOfTitles=[];
    for (let i = 0; i < Courses.length; i++) {
        if(Courses[i].Fee<=50){

            arrayOfTitles.push(Courses[i].Title)
        }
        
    }
    return arrayOfTitles;
}
function getClassMates(Courses,classroom){
    let arrayOfClassMates=[];
    for (let i = 0; i < Courses.length; i++) {
        if(Courses[i].Location==classroom){

            arrayOfClassMates.push(Courses[i])
        }
        
    }
    return arrayOfClassMates;

}
let startdate=getCourseStart(courses,"PROG200");
console.log(startdate)
let courseTitle=getCourseTitle(courses,"PROJ500");
console.log(courseTitle)
let coursesLessthan50=getCoursesPriced50OrLess(courses,50)
console.log(coursesLessthan50)
let classesMeets=getClassMates(courses,"Classroom 1")
console.log(classesMeets)