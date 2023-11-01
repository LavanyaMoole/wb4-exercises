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


// Sort the courses by the "Title" property
courses.sort((course1, course2) => {
    // Convert to lowercase for case-insensitive sorting
    const title1 = course1.Title.toLowerCase(); 
    const title2 = course2.Title.toLowerCase();

    if (title1 < title2) {
        return -1;
    } else if (title1 > title2) {
        return 1;
    } else {
        return 0;
    }
});

console.log("Courses sorted by title:");
console.table(courses);