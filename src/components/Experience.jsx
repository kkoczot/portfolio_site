import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles"
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ exp }) => {
  return (<VerticalTimelineElement
    contentStyle={{ background: "#1D1836", color: "#FFF" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    iconStyle={{ background: exp.iconBg }}
    icon={<div className="flex justify-center items-center w-full h-full"><img src={exp.icon} alt={exp.company_name} className="w-[60%] h-[60%] object-contain" /></div>}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{exp.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{exp.company_name}</p>
    </div>
    {<ul className="mt-5 list-disc ml-5 space-y-2">
      {
        exp.points.map((point, i) => (
          <li key={`exp-point-${i}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
    </ul>}
  </VerticalTimelineElement>)
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My experience with technologies</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, i) => {
            return (
              <ExperienceCard key={i} exp={exp} />
            )
          })}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "services");