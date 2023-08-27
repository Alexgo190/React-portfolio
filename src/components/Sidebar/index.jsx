import style from "./sidebar.module.css"
import Profile from "../../pages/Profile"
import Contact from "./../../pages/Contact"
import Education from "./../../pages/Education"
import Languages from "../../pages/Languages"

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <Profile />
      <Contact />
      <Education />
      <Languages />
    </div>
  )
}
