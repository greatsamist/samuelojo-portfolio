import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Samuel, if you haven&apos;t already gathered that by
              now. I&apos;m a software engineer from Lagos, Nigeria. I
              specialize in the front-end, primarily Javascript and React, but
              love building with whatever tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              In this fast-paced digital landscape, staying current with the
              latest technologies is a priority for me. I&apos;m a firm believer
              in lifelong learning, always eager to explore new tools,
              frameworks, and techniques. By keeping my skills up-to-date, I
              ensure that I can provide innovative solutions to the challenges
              of today&apos;s digital world..
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I harbor a passion for cinematography. While
              I&apos;m busy crafting digital landscapes, I also enjoy capturing
              moments through the lens of a camera. Whether it&apos;s the play
              of light and shadow or the art of storytelling, cinematography
              allows me to express my creativity in a different form. It&apos;s
              not just about capturing visuals; it&apos;s about evoking emotions
              and telling stories that resonate.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m passively looking for new positions where I can merge my
              love for code with my love for cinematography. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
