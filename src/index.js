const Menu = require("./menu");
const db = require("./db");
/*
const departmentMenu = new Menu(
  [["list employees", () => {}], ["edit employee"]]
);
*/
const main = () => {
  db.connect();

  const r = db.getDepartment();
  console.log("DONE");
};

main();
