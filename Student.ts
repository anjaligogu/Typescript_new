interface Student {
  name: string;
  email: string;
  //   id:number;
}

function updateStudentProperties(
  student: Student,
  updatedProperties: Partial<Student>
): void {
  for (let i in updatedProperties) {
    if (i === "name" || i === "email") {
      (student[i as keyof Student] as any) = updatedProperties[i];
    }
  }
}

// Type to check if a type is a string or not
type IsString<T> = T extends string ? "Yes" : "No";

interface Employee {
  name: string;
  role: string;
}

interface Lead extends Employee {
  leadPosition: string;
}

const employees: (Employee | Lead)[] = [
  { name: "Anji", role: "jr.CraftPerson" },
  { name: "Naro", role: " sr. CraftPerson", leadPosition: "Team Lead" },
  { name: "Hina", role: "developer" },
];

function printLeadStatus(employees: (Employee | Lead)[]): void {
  employees.forEach((employee) => {
    if ((employee as Lead).leadPosition !== undefined) {
      console.log("${employee.name} is Lead");
    } else {
      console.log("${employee.name} is not lead");
    }
  });
}

const student: Student = { name: "Anji", email: "anji@123.com" };
updateStudentProperties(student, { name: "Anjali" });
console.log(student);

type TestString = IsString<string>;
type TestNumber = IsString<number>;

printLeadStatus(employees);
