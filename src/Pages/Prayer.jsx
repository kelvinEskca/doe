import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import Form from "../Components/FormModal";
const Prayer = () => {
    axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    const [subject,setSubject] = useState(null);
    const [prayer,setPrayer] = useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});

    const formData = {
        subject:subject,
        prayer:prayer,
        fname:user.fname,
        lname:user.lname
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')) || {})
    }, [])

    const handleForm = async (e) =>{
        e.preventDefault();
        if(subject !== null || prayer !== null){
            try{
                const request = await axios.post('https://doeclient-production.up.railway.app/api/prayer/add',formData);
                if(request.status === 200){
                    alert("Prayer Added Successfully");
                    navigate('/prayer');
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
            {user && Object.keys(user).length > 0 ? (
                <section className="section auth-section test-section">
                    <div className="wrapper">
                        <div className="boxes">
                            <div className="box">
                                {user && (<h3 className="heading">Dear {user.lname} please submit a prayer</h3>)}
                                <form action="#" className="form" onSubmit={handleForm}>
                                    <label htmlFor="#">
                                        <input type="text" name="subject" id="subject" placeholder="Enter Subject" onChange={(e)=>{setSubject(e.target.value)}} />
                                    </label>

                                    <label htmlFor="#">
                                        <textarea name="prayer" id="prayer" cols="30" rows="10" placeholder="Enter Prayer" onChange={(e)=>{setPrayer(e.target.value)}}></textarea>
                                    </label>

                                    <label htmlFor="#">
                                        <button>Pray</button>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <Form/>
            )}            
        </main>
    );
}
 
export default Prayer;