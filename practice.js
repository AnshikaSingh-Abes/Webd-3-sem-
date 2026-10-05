const employee = {
    name: "Rahul",
    salary: 15000,

    increaseSalary: function(amount) {
        this.salary += amount;
    }
};

console.log(employee.salary); // 15000

employee.increaseSalary(5000);

console.log(employee.salary); // 20000