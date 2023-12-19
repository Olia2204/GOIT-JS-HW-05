const students = [
    { name: "Манго", courses: ["математика", "фізика"] },
    { name: "Полі", courses: ["інформатика", "математика"]},
    { name: "Ківі", courses: ["фізика", "біологія"] },
  ];
  
  const array = students.flatMap(student => student.courses);
  console.log(array)

const array2 = students.reduce((acc, student) => acc.concat(student.courses), []);
console.log(array2)
  // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія']; 