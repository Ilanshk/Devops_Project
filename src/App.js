import './App.css';
import {useState} from "react";
import axios from 'axios';
function App() {
  const [fname,setFname]= useState("");
  const[lname,setLname] = useState("");
  const[student_data,setStudent_data] = useState({});
 
  const handleSubmit = async (event) => {
  event.preventDefault();
  try{
      var result = await axios.post("http://localhost:5000/grades",{
      firstname: fname,
      lastname: lname
      });
      setStudent_data(result.data)
  }
  catch(error)
  {
    console.log(error);
  }
    
      
  };

  return (
    <div className="App">
       <form onSubmit={handleSubmit}>
        <h1>Register Page</h1>
        <label>First Name </label>
         <input type="text" name="fname"  placeholder='First Name ...' value={fname} onChange={(e) => setFname(e.target.value)} />
         <label>Last Name </label>
         <input type="text" name="lname" required placeholder='Last Name ...' value={lname} onChange={(e) => setLname(e.target.value)} />
         <button onClick = {handleSubmit}> Next</button>
         {(Object.keys(student_data).length > 0) && <>
          <p>First Name: {student_data.FirstName}</p>
          <p>Last Name: {student_data.LastName}</p>
          <p>Grade in Java: {student_data.Java}</p>
          <p>Grade in Python: {student_data.Python}</p>
          <p>Grade in C: {student_data.C}</p>
        </>}
       </form>
        
       
       
          
        
       
    </div>
  );
  
}

export default App;
