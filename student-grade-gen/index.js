function calculateGrade(mark) {
    if (mark > 79) {
      return 'A';
    } else if (mark >= 60) {
      return 'B';
    } else if (mark >= 50) {
      return 'C';
    } else if (mark >= 40) {
      return 'D';
    } else if (mark < 40) {
      return 'E';
    }
  }
   
   let marks = 85; // Replace 85 with any value between 0 and 100 for testing
  const grade = getGrade(marks);
  
  console.log(grade);