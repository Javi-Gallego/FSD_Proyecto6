import "./ProfileCard.css"
import profilePhoto from "../../img/userphoto.png"
import { FieldInput } from "../FieldInput/FieldInput"

export const ProfileCard = ({ profile }) => {

  return (
    <article className="profileCardDesign">
      <img src={profile.profilePhoto} alt="profile" />
      <p>Nombre: 
        <FieldInput 
          type="text"
          name="firstName"
          value={profile.firstName}
          // onChange={onChangeFunction}
          // onBlur={onBlurFunction}
          // className={className} 
        />
      </p>
      <p>Apellido: {profile.lastName}</p>
      <p>Email: {profile.email}</p>
    </article>
  )
}
