import style from "./Experiences.module.css"

export default function Experiences() {
  return (
    <div className={style.experience}>
      <h2>Experiences</h2>
      <div className={style.internship}>
        <h3>Internship as Front-End Developer in Tzu Chi Foundation</h3>
        <span>June 2022 - August 2022</span>
      </div>
      <ul>
        <li>Learning by doing with ReactJS</li>
        <li>Built a employee vacation form from scratch using ReactJS</li>
        <li>Build a dataflow about Tzu Chi University Canteen</li>
      </ul>
    </div>
  )
}
