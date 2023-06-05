const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const studentsData = [
  {
    FirstName: 'Dan',
    LastName: 'Cohen',
    Java: '90',
    Python: '100',
    C: '95',
  },
  {
    FirstName: 'Revital',
    LastName: 'Dahan',
    Java: '85',
    Python: '88',
    C: '80',
  },
  {
    FirstName: 'David',
    LastName: 'Davidov',
    Java: '83',
    Python: '97',
    C: '81',
  },
  {
    FirstName: 'Dana',
    LastName: 'Gil',
    Java: '89',
    Python: '88',
    C: '82',
  },
  {
    FirstName: 'Beni',
    LastName: 'Shtein',
    Java: '95',
    Python: '88',
    C: '80',
  },
  {
    FirstName: 'Gil',
    LastName: 'Asif',
    Java: '80',
    Python: '90',
    C: '100',
  },
  {
    FirstName: 'Ilan',
    LastName: 'Shklover',
    Java: '90',
    Python: '100',
    C: '95',
  },
  {
    FirstName: 'Nikita',
    LastName: 'Solonets',
    Java: '100',
    Python: '100',
    C: '100',
  },
  {
    FirstName: 'Shay',
    LastName: 'Levi',
    Java: '80',
    Python: '89',
    C: '85',
  },
  {
    FirstName: 'Ofir',
    LastName: 'Alon',
    Java: '96',
    Python: '82',
    C: '85',
  },
];
let student = {};
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.post('/grades', async (req, res) => {
  let i;
  let { sFname, sLname } = await req.body;
  sFname = req.body.firstname;
  sLname = req.body.lastname;
  for (i = 0; i < studentsData.length; i += 1) {
    if (sFname === studentsData[i].FirstName && sLname === studentsData[i].LastName) {
      student = studentsData[i];
      res.json(student);
      break;
    }
  }
});

app.listen(port, () => {
  console.log(`Server is up and running at port: ${port}`);
});

module.exports = app;
