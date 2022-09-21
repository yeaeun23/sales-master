const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          'image': 'https://placeimg.com/64/64/1',
          'name': '강예은',
          'birthday': '940323',
          'gender': '여자',
          'job': '직장인'
        },
        {
          'id': 2,
          'image': 'https://placeimg.com/64/64/2',
          'name': '김민지',
          'birthday': '940909',
          'gender': '여자',
          'job': '직장인'
        },
        {
          'id': 3,
          'image': 'https://placeimg.com/64/64/3',
          'name': '권소리',
          'birthday': '940710',
          'gender': '여자',
          'job': '직장인'
        }])
});

app.listen(port, () => console.log(`Listening on port ${port}`));