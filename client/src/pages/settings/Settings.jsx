import { useContext, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context'
import './settings.css'
import axios from "axios"

export default function Settings() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [file, setFile] = useState(null)
    const [success, setSuccess] = useState(false)
    
    const {user, dispatch} = useContext(Context)
    const PF = "http://localhost:5000/images/"

    const handleSubmit = async(e) => {
        e.preventDefault()
        dispatch({type: "UPDATE_START"})
        const updatedUser = {
          userId: user._id,
          username, 
          email,
          password,
        }
        if (file){
          const data = new FormData()
          const filename = Date.now() + file.name
          data.append("name", filename)
          data.append("file", file)
          updatedUser.profilePic = filename
          try {
            await axios.post("/upload", data)
        } catch (err) {
            
        }
    }
    try {
        const res = await axios.put("/users/" + user._id, updatedUser)
        setSuccess(true)
        dispatch({type: "UPDATE_SUCCESS", payload: res.data})
        } catch (err) {
            dispatch({type: "UPDATE_FAILURE"})
        }
    }

  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form action="" className="settingsForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img 
                        src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                        alt="" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display: "none"}} onChange={e => setFile(e.target.files[0])}/>
                </div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)}/>
                <input type="text" placeholder={user.email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)}/>
                <button className="settingsSubmit" type='submit'>Update</button>
                {success && <span style={{color: "teal"}}>Profile has been updated...</span>}
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
