const students = [
    { name: "Манго", courses: ["математика", "фізика"] },
    { name: "Полі", courses: ["інформатика", "математика"]},
    { name: "Ківі", courses: ["фізика", "біологія"] },
  ];
  
  students.flatMap(student => student.courses);
  console.log(students)
  // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія']; 