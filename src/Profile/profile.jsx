import { faEdit, faTrash,faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import PageNotFound from '../PageNotFound/pagenotfound'

const Profile = () => {
    const handleLogout=()=>{
        localStorage.removeItem('token')
        window.location.href = "/";

    }
    // console.log()
    const [expiredStatus, setExpiredStatus] = useState(true);

  useEffect(() => {
    const checkTokenValidity = async () => {
      // Check if token exists in localStorage
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await fetch(`/home/isTokenExpired?token=${token}`, {
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              mode: "no-cors",
            },
          });

          const data = await response.json();
          console.log(data);
          if (!data) {
            console.log("expiredStatus");
            setExpiredStatus(true); // Token is not expired
          }
        } catch (error) {
          // Error is caught silently without logging
          setExpiredStatus(false); // Token is expired
        }
      } else {
        setExpiredStatus(false);
        window.location.href = "/";
      }
    };

    checkTokenValidity();
  }, []);
  return (
    <>
      {/* <h1>Hihih</h1> */}
      {!expiredStatus?<PageNotFound/>:(
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'80vh'}}> 
        <div style={{padding:'20px',width:'200px',display:'flex',justifyContent:'center',backgroundColor:'#eaeaea',borderRadius:'5px'}}>
          <div style={{}}>
          <div style={{display:'flex',justifyContent:'center'}}>
          <div style={{backgroundColor:'grey',width:'50px',height:'50px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%'}}>

              <FontAwesomeIcon icon={faUser} />
          </div>
          </div>
          <p style={{textAlign:'center'}}>{localStorage.getItem('user-name')}</p>
          <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>)}
    </>
  );
};
export default Profile;
