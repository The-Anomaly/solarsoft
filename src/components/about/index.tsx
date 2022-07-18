import { aboutHeroImg, amaku, ifere, LinkedinIcon, moore, TwitterIcon } from "assets";
import { Button } from "components/generalComponents";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "router";
import styles from "./styles.module.css";

const AboutUI = () => {
  const navigate = useNavigate();

  const members = [
    {
      name: (
        <>
          Immanuel <br /> Ifere
        </>
      ),
      image: ifere,
      role: "CEO/Co-Founder",
      twitter: "https://twitter.com/ifere__?s=21&t=CaKJfvWcxUzC1dfwnMLxbw",
      linkedin: "https://www.linkedin.com/in/immanuel-ifere-2b881b16a",
    },
    {
      name: (
        <>
          Moore <br />
          Dagogo-Hart
        </>
      ),
      image: moore,
      role: "CTO/Co-Founder",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/moore-dagogo-hart-33b419164",
    },
    {
      name: (
        <>
          David <br /> Amaku
        </>
      ),
      image: amaku,
      role: "Blockchain Developer",
      twitter: "https://twitter.com/maestrohwithit?s=21&t=ReVUp45xL5k1XxZY_ngc7w",
      linkedin: "https://www.linkedin.com/in/david-amaku",
    },
  ];
  return (
    <>
      <section className={styles.aboutHeroBg}>
        <div className={`siteWrapper ${styles.aboutHero}`}>
          <div className={styles.txtSec}>
            <p className={styles.label}>ABOUT US</p>
            <h1 className={styles.ttl}>Solarsoft is a global pioneer NFT and digital asset infrastructure company.</h1>
            <p className={styles.txt}>
              We are a new business and creative unit. We provide content creators and advertising partners with
              end-to-end blockchain ecosystem solutions and infrastructure to build, launch, manage and sell NFT content
              and experience.
            </p>
          </div>
          <div className={styles.heroImg}></div>{" "}
        </div>
      </section>
      <section className={styles.goalBg}>
        <div className={`siteWrapper ${styles.goal}`}>
          <p className={styles.txt2}>
            Our goal is to provide global acccess to digital assets and drive the <b>reinvention of value</b> using
            blockchain technology
          </p>
          <div className={styles.teamSec}>
            <p className={styles.teamTtl}>MEET THE Team</p>
            <div className={styles.teamList}>
              {members.map((item, index) => (
                <div key={index} className={styles.member}>
                  <img className={styles.memberImg} src={item.image} alt="team member" />
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.role}>{item.role}</p>
                  <div className={styles.socials}>
                    {item.linkedin ? (
                      <a href={item.linkedin}>
                        <LinkedinIcon />
                      </a>
                    ) : (
                      ""
                    )}
                    {item.twitter ? (
                      <a href={item.twitter}>
                        <TwitterIcon />
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={`siteWrapper ${styles.howSec}`}>
        <h2 className={styles.howTtl}>How We Work</h2>
        <p className={styles.howTxt}>
          At Solarsoft, we operate and function in high performance and humane environments characterised by iterative
          and adaptive teams whose primary objective is to deliver the highest value to all stakeholders and produce the
          highest quality of products.
        </p>
      </section>
      <section className={styles.convoBg}>
        <div className={styles.convo}>
          <p className={styles.convoTxt}>Start a conversation with us</p>
          <Button className={styles.convoBtn} type="light" onClick={() => navigate(Routes.contactUs)}>
            CONTACT US
          </Button>
        </div>
      </section>
    </>
  );
};

export { AboutUI };
