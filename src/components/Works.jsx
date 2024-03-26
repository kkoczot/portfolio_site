import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github, netlify } from "../assets"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ProjectCard = ({ index, name, description, tags, image, source_code_link, project_site_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="tilt-card p-2 rounded-2xl sm:w-[360px] w-full">
        <div className="h-full w-full bg-black-100 p-4 rounded-2xl">
          <div className="relative w-full h-[230px]">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div onClick={() => window.open(project_site_link, "_blank")} className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-1">
                <img src={netlify} alt="netlify" className="w-full h-full object-contain" />
              </div>
              <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => <p key={tag.name} className={`text-[14px] ${tag.color} shadow-sm`}>#{tag.name}</p>)}
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            My projects
          </p>
          <h2 className={styles.sectionHeadText}>
            Projects
          </h2>
        </motion.div>
        <div className="w-full flex">
          <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Here are the results of my work. These following projects showcases my skills and experience through
            real-world examples. Each project has a short description and
            links to live demo and code repository. This all reflects my
            ability to solve complex issues, cope with different technologies,
            and manage projects in an effective way.
          </motion.p>
        </div>
        <div className="py-6 px-2 mt-20 flex flex-wrap gap-7 gap-y-12">
          {projects.map((project, i) => (
            <ProjectCard
              key={`project-${i}`}
              index={i}
              {...project}
            />
          ))}
        </div>
      </div >
    </>
  )
}

export default SectionWrapper(Works, "work");