import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';



const students_data = [
    {FirstName:"Dan" ,
    LastName:"Cohen",
    Java:"90",
    Python: "100",
    C:"95"},
    {FirstName:"Revital",
    LastName:"Dahan",
    Java:"85",
    Python:"88",
    C:"80"},
    {FirstName:"David",
    LastName:"Davidov",
    Java:"83",
    Python:"97",
    C:"81"},
    {FirstName:"Dana",
    LastName:"Gil",
    Java:"89",
    Python:"88",
    C:"82"},
    {FirstName:"Beni",
    LastName:"Shtein",
    Java:"95",
    Python:"88",
    C:"80"},
    {FirstName:"Gil",
    LastName:"Asif",
    Java:"80",
    Python:"90",
    C:"100"},
    {FirstName:"Ilan",
    LastName:"Shklover",
    Java:"90",
    Python:"100",
    C:"95"},
    {FirstName:"Nikita",
    LastName:"Solonets",
    Java:"100",
    Python:"100",
    C:"100"},
    {FirstName:"Shay",
    LastName:"Levi",
    Java:"80",
    Python:"89",
    C:"85"},
    {FirstName:"Ofir",
    LastName:"Alon",
    Java:"96",
    Python:"82",
    C:"85"}
];
let student = {};
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
let username1 = '';

app.post('/grades', async(req, res) => {
    var  {s_fname,s_lname}  = await req.body;
    s_fname = req.body.firstname;
    s_lname = req.body.lastname;
        for ( var i = 0;i<students_data.length;i++){
            if (s_fname == students_data[i].FirstName && s_lname == students_data[i].LastName){
                student = students_data[i];
                res.json(student)
                break;
            } 
        }
});

app.listen(port, () => {
    console.log(`Server is up and running at port: ${port}`);
});
