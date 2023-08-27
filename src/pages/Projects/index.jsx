import style from "./Projects.module.css"

export default function Project() {
  return (
    <div className={style.project}>
      <h2>Projects</h2>
      <div className={style.internship}>
        <h3>AI Resource and Recycling Education</h3>
        <span>September 2021 - December 2022</span>
      </div>
      <p>
        I had the privilege of collaborating with my university peers to develop
        an impactful project aimed at promoting recycling awareness. Our
        collective effort culminated in a successful participation in Taiwan's
        esteemed Pacific Cup - Technology Education Competition, where our
        collaborative efforts earned us the honor of securing the first-place
        position.
      </p>
      <ul>
        <li>
          Designed and executed an AI-driven object detection project for
          accurate waste separation.
        </li>
        <li>Applied advanced OpenCV techniques for improved recognition.</li>
        <li>
          Attained 90% accuracy with YOLOv5 for recyclable identification.
        </li>
        <li>
          Produced informative videos based on AI-detected recyclable waste.
        </li>
      </ul>
    </div>
  )
}
