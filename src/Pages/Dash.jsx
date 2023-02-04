import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
const Dash = () => {
    axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    const [subject,setSubject] = useState(null);
    const [testimony,setTestimony] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));
    
    const formData = {
        subject:subject,
        testimony:testimony,
        fname:user.fname,
        lname:user.lname
    }

    const handleForm = async (e) =>{
        e.preventDefault();
        if(subject !== null || testimony !== null){
            try{
                const request = await axios.post('https://doeclient-production.up.railway.app/api/testimony/add',formData);
                if(request.status === 200){
                    alert("Testimony Added Successfully");
                    navigate('/dash');
                }
                else{
                    alert(request.statusMessage);
                }
            }
            catch(err){
                console.log(err);
            }
        }
        else{
            alert("Please Ensure all fields are filled");
        }
    }

    return (
        
        <main className="main">
            <section className="section auth-section test-section">
            <div className="wrapper">
                <div className="boxes">
                    <div className="box">
                        {user && (<h3 className="heading">Dear {user.lname} please submit a testimony</h3>) }
                        
                        <form action="#" className="form" onSubmit={handleForm} encType="multipart/form-data">

                            <label htmlFor="#">
                                <input type="text" name="subject" id="subject" placeholder="Enter Subject" onChange={(e)=>{setSubject(e.target.value)}} />
                            </label>


                            <label htmlFor="#">
                                <textarea name="testimony" id="testimony" cols="30" rows="10" placeholder="Enter Testimony" onChange={(e)=>{setTestimony(e.target.value)}}></textarea>
                            </label>
                            
                            <label htmlFor="#">
                                <button>Testify</button>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            </section>
        </main>
        
    );
}
 
export default Dash;