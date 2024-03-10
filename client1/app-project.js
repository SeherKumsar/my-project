"use strict"; // require edilen yerde require varsa kullanılır
const express = require("express");
const pool = require("./helper/postgresql-connection");

const app = express();

app.get("/student/add/:first_name/:last_name/:grade", (req, res) => {
  const { first_name, last_name, grade } = req.params;
  pool.query("INSERT INTO students (first_name, last_name, grade) VALUES ($1, $2, $3)", [first_name, last_name, grade], (err, results) => {
      if (err) {
          console.error("Database query error: ", err);
          return res.status(500).json({
              status: "error",
              message: "Internal Server Error"
          });
      }
      res.status(200).json({
          status: "success",
          data: results.rows
      });
  });
});
app.get("/get_students", (req, res) => {
  pool.query("SELECT * FROM students", (err, results) => {
      if (err) {
          console.log("Database query error: ", err);
          return res.status(500).json({
              status: "error",
              message: "Internal Server Error"
          });
      }
      res.status(200).json({
          status: "success",
          data: results.rows,
      });
  });
});
app.get("/students/:id", (req, res) => {
  const id = req.params.id;
  pool.query("SELECT * FROM students WHERE id = $1", [id], (err, results) => {
      if (err) {
          console.log("Database query error: ", err);
          return res.status(500).json({
              status: "error",
              message: "Internal Server Error"
          });
      }
      res.status(200).json({
          status: "success",
          data: results.rows,
      });
  });
});
app.listen(2000, () => {
  console.log("Server is running on port 2000");
});