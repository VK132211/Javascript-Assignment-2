function grade(marks) {
  if (marks > 100 && marks < 0) {
    console.log("Invalid marks");
  }
  switch (Math.floor(marks / 10)) {
    case 10:
    case 9:
      console.log("S");
      break;
    case 8:
      console.log("A");
      break;
    case 7:
      console.log("B");
      break;
    case 6:
      console.log("C");
      break;
    case 5:
      console.log("D");
      break;
    case 4:
      console.log("E");
      break;
    default:
      console.log("Failed");
  }
}

grade(98);
grade(100);
grade(85);
grade(74);
grade(66);
grade(54);
grade(43);
grade(32);
