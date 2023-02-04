import MainText from "../Components/MainText";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
const user = JSON.parse(localStorage.getItem('user'));
const Profile = () => {
    axios.defaults.withCredentials = true;
    const [prayer,setPrayer] = useState([]);
    const [testimony,setTestimony] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const getPrayer = async () =>{
            const id = user._id;
            try{
                const request = await axios.get(`http://localhost:5000/api/prayer/${id}`,{
                    id:id
                });
                if(request.status === 200){
                    setPrayer(request.data);
                    setLoading(false);
                }
                else{
                    alert(request.statusMessage);
                }
            }
            catch(err){
                console.log(err);
            }
        }
        getPrayer();

        const getTestimony = async () =>{
            const id = user._id;
            try{
                const request = await axios.get(`http://localhost:5000/api/testimony/${id}`,{
                    id:id
                });
                if(request.status === 200){
                    setTestimony(request.data);
                    setLoading(false);
                }
                else{
                    alert(request.statusMessage);
                }
            }
            catch(err){
                console.log(err);
            }
        }
        getTestimony();
    },[]);
    if(loading) return(<h3>Loading....</h3>)
    return (
        <main className="main">
            <section className="section hero">
                <div className="wrapper">
                    <div className="boxes">
                        <div className="box">
                            <MainText purpleText={`Welcome ${user.fname}`} heading={'Prayer Changes Things '} paragraph={'Take a moment to pray for someone or share a testimony'}  />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section profile">
                <div className="wrapper">
                    <div className="top">
                        <h3 className="heading">Testimony</h3>
                        <Link to="/dash"><button>Add Testimony +</button></Link>
                    </div>
                    <div className="boxes">
                        <div className="box">
                            <h3 className="heading">Testimony</h3>
                            {testimony && testimony.length === 0 ? (<p className="paragraph">0</p>) : (<p className="paragraph">{testimony.length}</p>)}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section profile">
                <div className="wrapper">
                    <div className="top">
                        <h3 className="heading">Prayer</h3>
                        <Link to="/prayer"><button>Add Prayer +</button></Link>
                    </div>
                    <div className="boxes">
                        <div className="box">
                            <h3 className="heading">Prayer</h3>
                            {prayer && prayer.length === 0 ? (<p className="paragraph">0</p>) : (<p className="paragraph">{prayer.length}</p>)}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
 
export default Profile;