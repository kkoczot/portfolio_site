import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from "../hoc/index"
import { about } from '../constants';
import { styles } from '../styles';

const About = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 flex flex-col"
          >
            <h2 className={`${styles.sectionHeadText} leading-[1em]`}>About me</h2>
            <h3 className="h3 max-x-[455px] mb-4 mt-4 font-poppins">
              In programming I use variety of technologies and a lot of ideas to make my projects unique and quiality.&nbsp;
              To become better day by day, I need to possess the following qualities:
            </h3>
            <div className="h-full w-full overflow-hidden">
              <div className="about-bg lg:bg-about h-full w-full object-contain bg-center rounded-xl mb-4"></div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("left", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.3 }} className="flex-1">
            <div>
              {
                about.map((service, index) => {
                  const { name, description } = service;
                  return (
                    <div key={index} className="border-b border-white/20 h-auto mb-4">
                      <div className="lg:max-w-[476px]">
                        <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                        <p className="font-secondary leading-tight pb-4">{description}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");