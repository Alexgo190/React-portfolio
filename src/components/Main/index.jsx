import Experiences from "../../pages/Experiences"
import Projects from "./../../pages/Projects"
import Profiles from "../../pages/Profiles"
import style from "./Main.module.css"
import Certificate from "../../pages/Certificates"

export default function Main() {
  return (
    <div className={style.main}>
      <Profiles />
      <Experiences />
      <Projects />
      <Certificate />
    </div>
  )
}
