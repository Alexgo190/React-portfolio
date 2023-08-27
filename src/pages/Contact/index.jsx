import style from "./Contact.module.css"
import telephone from "./../../assets/telephone.png"
import email from "./../../assets/email.png"
import github from "./../../assets/github.png"
import instagram from "./../../assets/instagram.png"
import location from "./../../assets/location.png"

export default function Contact() {
  return (
    <div className={style.contact}>
      <h3>Contact Info</h3>
      <div className={style.telephone}>
        <img
          src={telephone}
          alt="telephone"
          width="20px"
          height="20px"
          title="Telephone"
        />
        <p>(+62) 813-8266-7800</p>
      </div>
      <div className={style.email}>
        <img
          src={email}
          alt="email"
          width="20px"
          height="20px"
          title="Email"
        />
        <p>alexandergo190@gmail.com</p>
      </div>
      <div className={style.github}>
        <img
          src={github}
          alt="github"
          width="20px"
          height="20px"
          title="Github"
        />
        <a href="https://github.com/Alexgo190">Alexgo190</a>
      </div>
      <div className={style.instagram}>
        <img
          src={instagram}
          alt="instagram"
          width="20px"
          height="20px"
          title="Instagram"
        />
        <a href="https://www.instagram.com/alexander.go19/">alexander.go19</a>
      </div>
      <div className={style.location}>
        <img
          src={location}
          alt="location"
          width="20px"
          height="20px"
          title="Location"
        />
        <p>Dadap,Tangerang</p>
      </div>
    </div>
  )
}
