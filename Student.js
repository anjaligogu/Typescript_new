function updateStudentProperties(student, updatedProperties) {
    for (var i in updatedProperties) {
        if (i === "name" || i === "email") {
            student[i] = updatedProperties[i];
        }
    }
}
var employees = [
    { name: "Anji", role: "CraftPerson" },
    { name: "Naro", role: " sr CraftPerson", leadPosition: "Team Lead" },
    { name: "Hina", role: "developer" },
];
function printLeadStatus(employees) {
    employees.forEach(function (employee) {
        if (employee.leadPosition !== undefined) {
            console.log("".concat(employee.name, " is Lead"));
        }
        else {
            console.log("".concat(employee.name, " is not lead"));
        }
    });
}
var student = { name: "Anji", email: "anji@123.com" };
updateStudentProperties(student, { name: "Bob" });
console.log(student);
printLeadStatus(employees);
