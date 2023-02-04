import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    
    const loginForm = async (e) =>{
        e.preventDefault();
        if(email !== null ||  password !== null){
            try{
                const request = await axios.post('https://doeclient-production.up.railway.app/api/auth/login',{
                    email:email,
                    password:password,
                });
                if(request.status === 200){
                    localStorage.setItem("token", request.data.accessToken);
                    localStorage.setItem("user",JSON.stringify(request.data));
                    alert("Login Successful");
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
        <section className="section auth-section row-auth">
            <div className="wrapper">
                <div className="boxes">
                    <div className="box">
                        <h3 className="heading">Login to submit a prayer</h3>
                        <form action="#" className="form" onSubmit={loginForm}>
                            <label htmlFor="#">
                                <input type="email" name="email" id="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                            </label>

                            <label htmlFor="#">
                                <input type="password" name="password" id="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                            </label>

                            <label htmlFor="#">
                                <button>Submit</button>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Login;