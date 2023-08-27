import style from "./Profile.module.css"
import images from "./../../assets/IMG_3875.jpg"

export default function Profile() {
  return (
    <div className={style.profile}>
      <img src={images} alt="Profile Picture" />
      <h3>Alexander , B.Sc</h3>
      <p>Fullstack Web Developer</p>
    </div>
  )
}
