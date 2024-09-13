import { useContext, useState } from "react";
import { auth, db, storage } from "../utilis/firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { UserContext } from "../context/UserContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Button from "../components/Button";
import "./Profile.css"

function Profile() {
//   const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
//   console.log("user in profile=>", user);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [desc, setDec] = useState(user?.desc);
  const [avatar, setAvatar] = useState(user?.avatar);
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async () => {
    try {
    //   setLoading(true);
      const obj = {
        username,
        email,
        phoneNumber,
        desc,
      };
      console.log("Here is object ====>",obj);
      
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, obj);
      setUser({ ...user, ...obj });
    //   input ko clear karnay liya 
    setAvatar('');
    setUsername('');
    setEmail('');
    setPhoneNumber('');
    setDec('');
    setLoading(false);
   

      console.log("Document Updated");
    //   obj("")
    } catch (err) {
      setLoading(false);
    }
  };

  const handeUpdateUserImage = async (e) => {
    // console.log("e=>", e.target.files[0]);
    try {
      setLoading(true);
      const storageRef = ref(storage, `users/${user.uid}`);

      const uploadImg = await uploadBytes(storageRef, e.target.files[0]);


    //   image ka url laykar database ko send karna 
      const url = await getDownloadURL(storageRef);
      setAvatar(url)
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, { avatar: url });
      setUser({ ...user, avatar: url });
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <div>
         {/* seprate div to display the profile */}
          
         <div className="display-div">

       <div className="picture1"><img src={user.avatar}  /></div>
       <div className="name"> <h2>{user.username}</h2> </div>
       <div><h4>{user.email}</h4></div> 
       <div> <h4>{user.phoneNumber}</h4></div>
      <div> <h5>{user.desc}</h5></div>
    </div>


      <div className="getDataUser" >
        <label >
            
          {avatar ? (
              <img className="lable-Img"
              src={avatar}
              />
            ) : (<span className="upload-text">Upload Img</span>)}
            
          <input
            onChange={handeUpdateUserImage}
            className="hidden"
            type="file"
          />
        </label>

        <input
    
          placeholder="Username"
          value={username}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          placeholder="Email"
        //   disabled
        // readOnly
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Phone Number"
          value={phoneNumber}
          type="number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <textarea
          value={desc}
          onChange={(e) => setDec(e.target.value)}
          placeholder="About me"
        ></textarea>

         <Button id="btn"  onClick={handleUpdateProfile}
          isloading={loading}
          text={"Update Profile"}/>
      </div>
    

    
    </div>
  );
}
export default Profile;