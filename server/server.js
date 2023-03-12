const express = require("express");
// const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
const port = process.env.PORT || 3001;
const { Pool } = require('pg');
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))


// Variables
const pool = new Pool({
    user: 'test_user',
    host: 'dpg-cg6cpk1mbg5ab7k83iv0-a.oregon-postgres.render.com',
    database: 'fullstack_project_e43i',
    password: 'zg4sHNebKaOkHGFNU5zm31MFB4upQJuX',
    port: 5432
    , ssl: {
        rejectUnauthorized: false
    }
});

//Routes
//POST
app.post("/api/insert", function(req, res) {

  const newTitle = req.body.title;
  const newUrl = req.body.url;
  const newRating = req.body.rating;

const sqlInsert = "INSERT INTO finaltable (title, url, rating) VALUES ($1, $2, $3)"
pool.query(sqlInsert, [newTitle, newUrl, newRating], (err, result) => {
// console.log(result)
})
});

// GET
app.get("/api/get", function(req, res) {

  const sqlInsert = "SELECT * FROM finaltable"
  pool.query(sqlInsert, (err, result) => {
  res.send(result)

});
});









//POST

// app.post("/", function (req, res) {
//   const newTitle = req.body.title;
//   const newUrl = req.body.url;
//   const newRating = req.body.rating;
  
//   // if (!Number.isInteger(newHotelRooms) || newHotelRooms <= 0) {
//   //   return res
//   //     .status(400)
//   //     .send("The number of rooms should be a positive integer.");
//   // }
  
//   pool
//     .query("SELECT * FROM finaltable WHERE url=$1", [newUrl])
//     .then((result) => {
//       if (result.rows.length > 0) {
//         return res
//           .status(400)
//           .send("A video with the same link already exists");
//       } else {
//         const query =
//           "INSERT INTO finaltable (title, url, rating) VALUES ($1, $2, $3)";
//         pool
//           .query(query, [newTitle, newUrl, newRating])
//           .then(() => res.send("Video created!"))
//           .catch((error) => {
//             console.error(error);
//             res.status(500).json(error);
//           });
//       }
//     });
//   });





// OLD CODE

//This will read the data from videos.json file
// let videos = JSON.parse(fs.readFileSync("/Users/admin/Desktop/Newsletter-Signup/Full-Stack-Project-Assessment/server/data/videos.json"));

// app.use(express.json());


// For parsing application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));


// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with

// GET "/"
// app.get("/api/", (req, res) => {
//   res.status(200).json({
//     status: "Success",
//     data: {
//       videos: videos
//     }
//   })
//   // Delete this line after you've confirmed your server is running
  
// });


// app.post("/", (req, res) => {
//   const newId = videos[videos.length -1].id +1;
// const newVideo = Object.assign({id: newId}, req.body)

// videos.push(newVideo);

// fs.writeFile("/Users/admin/Desktop/Newsletter-Signup/Full-Stack-Project-Assessment/server/data/videos.json", JSON.stringify(videos), (err) => {
//   res.status(201).json({
//     status: "Success",
//     data: {
//       video: newVideo
//     }
//   })
// })
//   })


// //DELETE
// app.delete("/:id", (req, res) => {
// const id = req.params.id +1;
// const videoToDelete = videos.find(el => el.id === id);

// // if(!videoToDelete){
// //   return res.status(404).json({
// //     status: "fail",
// //     message: "Video with ID: " + id + " is not found"
// //   })
// // }

// const index = videos.indexOf(videoToDelete);

// videos.splice(index, 1);

// fs.writeFile("/Users/admin/Desktop/Newsletter-Signup/Full-Stack-Project-Assessment/server/data/videos.json", JSON.stringify(videos), (err) => {
//   res.status(204).json({
//     status: "Success",
//     data: {
//       video: null
//     }
//   })
// })
// })


app.listen(port, () => console.log(`Listening on port ${port}`));