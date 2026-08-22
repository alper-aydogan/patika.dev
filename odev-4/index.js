const fs = require("fs");

const filePath = "employees.json";
const employee = { name: "Employee 1 Name", salary: 2000 };
const updatedEmployee = { name: "Employee 1 Updated Name", salary: 3000 };

fs.writeFile(filePath, JSON.stringify(employee), "utf8", (err) => {
  if (err) throw err;
  console.log("Dosya olusturuldu ve veri eklendi.");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log("Dosya okundu:", data);

    fs.writeFile(filePath, JSON.stringify(updatedEmployee), "utf8", (err) => {
      if (err) throw err;
      console.log("Dosya guncellendi.");

      fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log("Dosya silindi.");
      });
    });
  });
});
