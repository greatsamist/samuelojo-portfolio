import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "NetOne Talent",
    imgSrc: "project-imgs/netone-talent.png",
    code: "",
    projectLink: "https://www.netonetalent.com",
    tech: ["React", "Javascript", "SCSS", "RestAPI", "Figma"],
    description:
      "A pioneering Future of Work technology company, I played a pivotal role in transforming the way companies engage IT Professionals and Contract Recruiters. ",
    modalContent: (
      <>
        <p>
          During my tenure at NetOne Talent, I took charge of a groundbreaking
          initiative that redefined the landscape of engaging IT Professionals
          and Contract Recruiters. Rooted in our mission to empower freelance
          talent, our platform established a streamlined gateway that fostered
          direct connections with employers. My multifaceted role involved
          leveraging JavaScript, React (Vite), REST API, and Figma to shape a
          project that would revolutionize talent engagement.
        </p>
        <p>
          Central to my contributions was the revitalization of the user
          interface (UI). Collaborating closely with our design team, I
          translated abstract design concepts into tangible, user-centric
          interfaces using React and SCSS. This endeavor not only elevated the
          platform&apos;s visual appeal but also profoundly enhanced the user
          experience.
        </p>
        <p>
          I spearheaded the implementation of several crucial features. Notably,
          I integrated a comprehensive ticketing and support system that
          empowered both talents and clients to address queries swiftly,
          fostering a collaborative ecosystem. The introduction of time entry
          and invoicing functionalities streamlined contractor operations and
          client interactions, enhancing overall efficiency.
        </p>
        <p>
          A remarkable achievement was the creation of a seamless contractor
          onboarding process. By optimizing the integration of new talents into
          ongoing projects, I significantly reduced onboarding timelines and
          boosted project productivity. Moreover, I introduced a real-time
          messaging functionality that enabled direct client-talent
          communication, ensuring timely issue resolution and transparent
          collaboration.
        </p>
        <p>
          Our project&apos;s tangible impact was validated by the endorsement of
          Fortune 500 clients. Comparative assessments demonstrated its
          superiority over traditional recruitment methods in terms of delivery
          speed, contractor quality, and overall efficiency. This reaffirmed the
          project&apos;s status as a catalyst for change in the way talent
          engagement operates in the modern professional landscape.
        </p>
        <p>
          In essence, my tenure at NetOne Talent encapsulated a journey of
          innovation, technical prowess, and strategic design. By reimagining
          the UI, introducing essential features, and fostering direct
          communication, I played a pivotal role in shaping a platform that not
          only empowers talents but also positions NetOne Talent at the
          forefront of Future of Work technology.
        </p>
      </>
    ),
  },
  {
    title: "Ace Mansion",
    imgSrc: "project-imgs/acemansion.png",
    code: "https://www.github.com/greatsamist/acemansion",
    projectLink: "https://www.acemansion.versel.app",
    tech: ["React", "Typescript", "Tailwind CSS"],
    description:
      "I crafted the Ace Mansion website as a platform to showcase my company's work, utilizing a combination of React, TypeScript, and Tailwind CSS.",
    modalContent: (
      <>
        <p>
          At Ace Mansion, I embarked on a journey that blended my passion for
          video production with my unwavering entrepreneurial spirit,
          co-founding a dynamic video production studio. Our studio&apos;s
          hallmark lies in its comprehensive service offerings, encompassing an
          eclectic array of visual storytelling realms—ranging from evocative
          Music Videos and comprehensive Event Coverage to engaging Promotional
          and Corporate Videos, all the way to cutting-edge Live-Streaming
          experiences that connect audiences in real time.
        </p>
        <p>
          Having always enjoyed video production as a hobby, I recognized the
          potential to transform this passion into a thriving venture. In the
          role of co-founder, I&apos;ve been instrumental in shaping the vision
          and direction of Ace Mansion. This journey has allowed me to merge my
          creative flair and strategic acumen, driving the studio&apos;s growth
          and its commitment to delivering exceptional visual narratives.
        </p>

        <p>
          A tangible testament to this commitment is the creation of the Ace
          Mansion website. This digital centerpiece, meticulously crafted using
          the dynamic trio of React, TypeScript, and Tailwind CSS, embodies our
          studio&apos;s ethos and offers a seamless user experience. Notably, my
          role in this venture has been marked by the design and development of
          the website—a canvas that reflects both our studio&apos;s versatility
          and my proficiency in modern web technologies.
        </p>
        <p>
          A highlight of the website is the captivating {`"Cases"`} page—a space
          dedicated to showcasing our projects as compelling case studies. This
          innovative feature not only offers a glimpse into our diverse
          portfolio but also provides potential clients with insights into our
          meticulous approach. Additionally, the website boasts an ingenious
          video price calculator. This tool empowers clients to estimate the
          costs of their envisioned video projects, demonstrating our commitment
          to transparency and client-centricity.
        </p>
        <p>
          Leveraging React&apos;s dynamic components, TypeScript&apos;s code
          integrity, and Tailwind CSS&apos;s design flexibility, the website
          exemplifies the synthesis of technology and creativity. As a
          co-founder and a passionate enthusiast of video production, I&apos;ve
          channeled my energies into creating a digital platform that not only
          showcases our studio&apos;s capabilities but also resonates with
          clients, offering a window into the captivating world of visual
          storytelling.
        </p>
      </>
    ),
  },
  {
    title: "XTRA",
    imgSrc: "project-imgs/0xxtra.png",
    code: "",
    projectLink: "https://app.0xxtra.com/",
    tech: ["React", "Javascript", "NodeJs", "SCSS", "Solidity", "RestAPI"],
    description:
      "At XTRA, Our vision is to empower people to create XtraOrdinary Digital Identities across games. A platform created for 10,000+ community of gamers and collectors. Drips made for 1500+ bluechip NFT Avatars; ",
    modalContent: (
      <>
        <p>
          During my impactful tenure at XTRA, I embarked on a transformative
          journey at the helm of the groundbreaking {`"XTRA Ascends"`} project.
          Here, my dual expertise in backend development and frontend finesse
          converged, breathing life into XTRA&apos;s vision of empowering users
          to forge remarkable digital identities in the immersive realm of
          gaming.
        </p>
        <p>
          At the epicenter of my role was the seamless integration of NFT
          avatars from users&apos; wallets with the coveted XTRA Ascends
          jackets—a feat accomplished through the ingenious synergy of Node.js,
          Empress, and Postgres. This dynamic backend infrastructure formed the
          cornerstone of a secure and fluid integration process, ensuring every
          avatar found its rightful place within the XTRA Ascends collection
        </p>
        <p>
          I also implemented a calculated touch of strategic allure using a
          random minting mechanism. By leveraging the capabilities of Node.js, I
          skillfully allocated rarity levels to every newly minted XTRA Ascends
          jacket. This ingenious technique injected an element of anticipation
          and exclusivity, amplifying user engagement and infusing a surge of
          excitement into each minting interaction.
        </p>
        <p>
          I meticulously crafted the frontend masterpiece, using React,
          Javascript, and SCSS yielded a simple but yet engaging and visually
          captivating user interface, one that beckoned users to explore and
          mint XTRA Ascends.
        </p>
        <p>
          My journey with {`"XTRA Ascends"`} was akin to orchestrating a
          symphony of backend and frontend artistry. This intricate interplay
          flawlessly echoed XTRA&apos;s mission, which centers on redefining
          digital identities and inviting users to shape extraordinary
          narratives within the ever-evolving tapestry of the gaming universe.
        </p>

        <p>
          Drip your NFT avatars by searching your wallet address or use this
          address to test 0x1E1936AdBa1d18bE91694727086e40647DeCF375 (no need to
          connect wallet)
        </p>
      </>
    ),
  },
  {
    title: "Web3Bridge",
    imgSrc: "project-imgs/web3bridge.png",
    code: "",
    projectLink: "https://www.web3bridge.com/",
    tech: ["React", "Javascript", "RestAPI", "NodeJS", "Empress"],
    description:
      "At Web3Bridge, I collaborated with expert team to Building sustainable Web3 economy in Africa",
    modalContent: (
      <>
        <p>
          Implemented React Testing Library for automated testing, resulting in
          improved code quality, reduced bugs, and seamless integration with
          CI/CD pipelines.
        </p>
        <p>
          Collaborated closely with designers and product managers, utilizing
          Git version control to enhance code integration and project workflows
          for efficient development cycles.
        </p>

        <p>
          Developed a successful DAO and NFT smart contract using Solidity,
          integrating it with React using ether.js. Minted NFTs valued at over
          $100k, showcasing the company&apos;s innovation and success in the
          blockchain space.
        </p>
      </>
    ),
  },
];
