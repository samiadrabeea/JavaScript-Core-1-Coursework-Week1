var numberOfStudents = 15;
var numberOfMentors = 8;
var sum= numberOfStudents + numberOfMentors;
var PercentageOfStudents = (numberOfStudents/sum)*100;
var PercentageOfMentors = (numberOfMentors/sum)*100;
console.log(`Percentage students: ${ Math.round(PercentageOfStudents)}%`);
console.log(`Percentage mentors: ${ Math.round(PercentageOfMentors)}%`);
