import { ProfileCard } from "../../common/ProfileCard/ProfileCard"
import { Header } from "../../common/Header/Header"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Profile.css"
import { getProfile } from "../../services/apiCalls"
import spinner from "../../img/spinnerupdated2.gif"

export const Profile = () => {

  const navigate = useNavigate()

  const [firstProfile, setFirstProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const [profile, setProfile] = useState({
      firstName: "",
      lastName: "",
      email: "",
  })

  useEffect(() => {
    const firstProfile = async () => {
      try {
        if (sessionStorage.getItem("auth") === "false") {
          navigate("/")
        }
        
        if (profile.email === "") {

          const NewProfile = await getProfile(sessionStorage.getItem("token"))
          setFirstProfile({
            firstName: NewProfile.firstName,
            lastName: NewProfile.lastName,
            email: NewProfile.email,
          })
          setProfile({
            firstName: NewProfile.firstName,
            lastName: NewProfile.lastName,
            email: NewProfile.email,
          })
        }
      } catch (error) {

      }
    }
    firstProfile()
  },[])

  return (
    <>     
      <Header />
      { profile.email === "" 
        ? <div className="profileDesign">
            <img src={spinner}></img>
          </div>
        : <div className="profileDesign">
            <ProfileCard
              profile={profile}
              
            />
          </div>
      }
    </>    
  )
}
