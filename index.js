const express = require('express');
const app = express();

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

const galau = [
  "https://telegra.ph/file/c83205eeeecceb9e4db87.mp4",
  "https://telegra.ph/file/a001c30cafa587a3bef2c.mp4",
  "https://telegra.ph/file/09cf5ac786cbfda551617.mp4",
  "https://telegra.ph/file/e696afd2cfe29a199be11.mp4",
  "https://telegra.ph/file/5be5e3696c03edff2772b.mp4",
  "https://telegra.ph/file/b9b3dece43e557b4addc1.mp4",
  "https://telegra.ph/file/a33e23d6736f8cb40b4fb.mp4",
  "https://telegra.ph/file/3426da3a67bdc0238bd46.mp4",
  "https://telegra.ph/file/394386e5dff94ccff2323.mp4",
  "https://telegra.ph/file/1a1cf22235249f0a459e5.mp4",
  "https://telegra.ph/file/a5578746d1abf176894ed.mp4",
  "https://telegra.ph/file/99dcebf89c97f13f4f657.mp4",
  "https://telegra.ph/file/6a808e89640f23ecfc936.mp4",
  "https://telegra.ph/file/2e35480077a5eae3b2a1e.mp4",
  "https://telegra.ph/file/6c5ba9ed473f188a963b2.mp4",
  "https://telegra.ph/file/0038f0816771d2586b872.mp4",
  "https://telegra.ph/file/946cb25280e747511a707.mp4"
];

app.get('/', (req, res) => {
  const randomVideo = pickRandom(galau);
  res.send(`
     <video width="320" height="240" controls>
      <source src="${randomVideo}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <br>
    <a href="/video/galau?url=${encodeURIComponent(randomVideo)}" target="_blank">Random Video</a>
  `);
});

app.get('/video/galau', (req, res) => {
  const url = req.query.url;
  res.json({
    author: "DannTeam",
    mimetype: 'video/mp4',
    url: url
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});