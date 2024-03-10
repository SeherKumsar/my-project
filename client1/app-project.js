const amqp = require('amqplib/callback_api');

amqp.connect('amqp://rabbitmq', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        const queue = 'task_queue';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});

// app.get("/student/add/:first_name/:last_name/:grade", (req, res) => {
//   const { first_name, last_name, grade } = req.params;
//   pool.query("INSERT INTO students (first_name, last_name, grade) VALUES ($1, $2, $3)", [first_name, last_name, grade], (err, results) => {
//       if (err) {
//           console.error("Database query error: ", err);
//           return res.status(500).json({
//               status: "error",
//               message: "Internal Server Error"
//           });
//       }
//       res.status(200).json({
//           status: "success",
//           data: results.rows
//       });
//   });
// });
// app.get("/get_students", (req, res) => {
//   pool.query("SELECT * FROM students", (err, results) => {
//       if (err) {
//           console.log("Database query error: ", err);
//           return res.status(500).json({
//               status: "error",
//               message: "Internal Server Error"
//           });
//       }
//       res.status(200).json({
//           status: "success",
//           data: results.rows,
//       });
//   });
// });
// app.get("/students/:id", (req, res) => {
//   const id = req.params.id;
//   pool.query("SELECT * FROM students WHERE id = $1", [id], (err, results) => {
//       if (err) {
//           console.log("Database query error: ", err);
//           return res.status(500).json({
//               status: "error",
//               message: "Internal Server Error"
//           });
//       }
//       res.status(200).json({
//           status: "success",
//           data: results.rows,
//       });
//   });
// });
// app.listen(2000, () => {
//   console.log("Server is running on port 2000");
// });
