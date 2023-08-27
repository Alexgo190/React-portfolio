import style from "./Languages.module.css"

export default function Languages() {
  return (
    <div className={style.languages}>
      <h3>Languages</h3>
      <div className={style.indonesia}>
        <p style={{ fontWeight: 900 }}>Indonesia</p>
        <p>Native Proficiency</p>
      </div>
      <div className={style.english}>
        <p style={{ fontWeight: 900 }}>English</p>
        <p>Professional Working Proficiency</p>
      </div>
      <div className={style.chinese}>
        <p style={{ fontWeight: 900 }}>Chinese</p>
        <p>Professional Working Proficiency</p>
      </div>
    </div>
  )
}
