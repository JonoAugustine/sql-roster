const sql = require("mysql");

let conn;

/**
 * Promise wrapper for sql.query
 *
 * @param {string} q - Query String
 */
const query = q => {
  return new Promise((res, rej) => {
    conn.query(q, (err, result) => {
      if (err) rej(err);
      else res(result);
    });
  });
};

/** Creates the SQL connection. */
const connect = async () => {
  return new Promise((res, rej) => {
    conn = sql.createConnection(
      {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "roster_db"
      },
      (err, result) => {
        if (err) rej(err);
        else res(result);
      }
    );
  });
};

const getDepartment = async () => {
  return query("select * from department");
};

module.exports = {
  connect,
  getDepartment
};
