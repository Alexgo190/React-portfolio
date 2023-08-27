import style from "./Education.module.css"

export default function Education() {
  return (
    <div className={style.education}>
      <h3>Education</h3>
      <ul>
        <div className={style.senior}>
          <li>SMA Cinta Kasih Tzu Chi</li>
          <p>2016 - 2019</p>
          <p>Natural Science</p>
        </div>
        <div className={style.univ}>
          <li>Tzu Chi University</li>
          <p>2019-2023</p>
          <p>Information Technology and Management</p>
        </div>
        <div className={style.current}>
          <li>Purwadhika</li>
          <p>2023 - Present</p>
          <p>Fullstack Web Developer</p>
        </div>
      </ul>
    </div>
  )
}
