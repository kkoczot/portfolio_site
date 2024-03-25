import Image from '../assets/hero.jpg';
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from "../hoc";
const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 variants={fadeIn("up", "spring", 0, 0.75)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }} className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              Kacper&nbsp;<span>Koczot</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", "spring", 0, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="mb-6 text-[36px] max-xs:text-[30px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <TypeAnimation sequence={[
                "an IT Student", 2000,
                "an aspiring Developer", 2000,
                "a motivated Learner", 2000,
                "a hard-working Guy", 2000,
              ]} speed={50} className="red-text-gradient" wrapper="span" repeat={Infinity} />
            </motion.div>
            <motion.p variants={fadeIn("up", "spring", 0, 1.25)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }} className="mb-12 max-w-lg mx-auto lg:mx-0">
              I am {new Date(new Date().getTime() - new Date("2004/05/20").getTime()).getUTCFullYear() - 1970} yo guy. I am currently in the final
              year of an IT technical school. {/* I have passed two professional exams (INF 02 and INF 03) */}
              I am interested in programming and I would like to work as a front-end dev and later as a full-stack dev.
              I completed professional internships in Spain and Portugal as part of the Erasmus program<br />
              I want to be the best, that&apos;s why I spend my free time learning and creating projects. I am persistent in what I do.
            </motion.p>
            <motion.div variants={fadeIn("up", "spring", 0, 1.5)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }} className="flex items-center justify-center lg:justify-start gap-6 lg:mx-0">
              <h3>Contact me:</h3>
              <div className="flex gap-x-6 text-[20px]">
                <a href="https://github.com/kkoczot" aria-label="Check out my github" target="_blank" className="hover:opacity-60" >
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/kacper-koczot-41a245300/" aria-label="Check out my linked in" target="_blank" className="hover:opacity-60" >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div variants={fadeIn("left", "spring", 0, 0.75)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }} className="hidden lg:flex lfex-1 max-w-[320px] lg:max-w-[482px]">
            <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="p-2 rounded-2xl">
              <img src={Image} alt="Me" className="rounded-2xl min-w-[150px]" />
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>);
};

export default SectionWrapper(Banner, "home");