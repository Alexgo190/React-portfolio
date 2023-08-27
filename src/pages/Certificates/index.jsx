import adobe from "./../../assets/adobe-certificate.png"
import udemy from "./../../assets/udemy.jpg"
import style from "./Certificate.module.css"

export default function Certificate() {
  return (
    <div className="certificates">
      <h2>Certificates</h2>
      <div className={style.images}>
        <figure>
          <img src={adobe} alt="adobe certificates" height="250px" />
          <figcaption>Adobe Photoshop</figcaption>
        </figure>
        <figure>
          <img src={udemy} alt="udemy certificate" height="250px" />
          <figcaption>JavaScript Course 2023</figcaption>
        </figure>
      </div>
    </div>
  )
}
