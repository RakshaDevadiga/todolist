import React, {useState} from "react";

function Form() {
  const [fname,setfname]=useState('xxx');
  const [lname,setlname]=useState('xxx');
  const [email,setemail]=useState('xxx');

const handleSubmit=(e)=>{
  e.preventDefault();
const data ={
firstname:fname,
lastname:lname,
mailaddress:email

}
 console.log(data);

};


  return (
    <div><h2>Student Registration Form</h2>
    <form id="form" onSubmit={handleSubmit}>
     <label>first name :</label>
                <input type="text" name="fname" id="fname" value={fname} placeholder="enter your first name " onChange={(e)=>setfname(e.target.value)} required />
                <br></br>

                <label>last name :</label>
                <input type="text" name="lname" id="lname" value={lname} placeholder="enter your last name "  onChange={(e)=>setlname(e.target.value)} />
                <br></br>

                <label>email :</label>
                <input type="email" name="email" id="ename" value={email} placeholder="enter your email address "  onChange={(e)=>setemail(e.target.value)} required />
                <br></br>

                <label>phone number :</label>
                <select  id="phone">
                    <option >91</option>
                    <option>99</option>
                    <option >12</option>
                    <option>63</option>
                    </select>
                    <input type="tel" name="phone" id="phone" placeholder="enter your phone number " required/>
                    <br></br>


                <label>USN :</label>
                <input type="text" name="usn" id="uname" placeholder="enter your usn" required />
                <br></br>

                <label >branch :</label>
                <input type="checkbox" name="branch" id="branch" required />
               
                <select  id="branch">
                    <option >CSE</option>
                    <option >ECE</option>
                    <option >MECHANICAL</option>
                    <option >CIVIL</option>
                   
                </select>
                <br></br>

                <label >Semester :</label>
                
               
                <select  id="sem">
                    <option >1</option>
                    <option >2</option>
                    <option >3</option>
                    <option >4</option>
                    <option >5</option>
                    <option >6</option>
                    <option >7</option>
                    <option >8</option>
                </select>
                <br></br>

                <label >gender :</label >
                <input type="radio" name="gender" id="male" placeholder="your gender "/>
                <span id="male">Male</span>
                <input type="radio" name="gender" id="female" placeholder="your gender "/>
                <span id="female">female</span>
                <input type="radio" name="gender" id="other" placeholder="your gender "/>
                <span id="other">other</span>
                <br></br>

                <label id="lang"> known language</label>
                <input type="checkbox" name="language" id="kannada"/>
                <span id="kannada">kannada</span>
                <input type="checkbox" name="language" id="english"/>
                <span id="english">english</span>

                <input type="checkbox" name="language" id="hindi"/>
                <span id="kannada">hindi</span>
                <input type="checkbox" name="language" id="urdhu"/>
                <span id="urdhu">urdhu</span>

<br></br>
<input type="submit" value="submit" id="submit" name="submit" />
</form>
<p> I am {fname} {lname} <br></br>mail me {email}</p>
    </div>
  )
}

export default Form