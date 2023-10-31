let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];
let average = 0;
let totalScore = 0;
let student;
for (let i = 0; i < students.length; i++) {

    student = students[i];
    studentScores = student.scores;
    for (let index = 0; index < studentScores.length; index++) {
        totalScore += studentScores[index];

    }
    average=+(totalScore/studentScores.length).toFixed(2)
    console.log(`Total score of ${student.name}; ${totalScore}`)
    console.log(`Total average of ${student.name}; ${average}`)

}
