import styles from "./styles.module.css";
import * as React from "react";
import {
  alta1,
  alta2,
  ArrowRight,
  CaretDown,
  duckz1,
  duckz2,
  duckz3,
  kronos1,
  kronos2,
  kronos3,
  kryptoAlienz1,
  kryptoAlienz2,
  kryptoAlienz3,
  dmgd1,
  dmgd2,
  dmgd3,
} from "assets";
import { Button } from "components";

interface CollectionInfoProps {
  active?: number;
  changeActive: (x: number) => void;
  title: string;
  subTitle: string;
  text: any;
  state: number;
}

const CollectionInfo: React.FC<CollectionInfoProps> = ({ active, state, changeActive, title, subTitle, text }) => {
  return (
    <div className={`${styles.collectionItem} ${state === active ? styles.activeCollection : ""}`}>
      <p className={styles.collectionTtl} role="button" onClick={() => changeActive(state)}>
        {title}
      </p>
      <p className={styles.collectionSubTtl}>{subTitle}</p>
      <p className={styles.collectionTxt}>{text}</p>
    </div>
  );
};

const NFTCollection = () => {
  const [active, setActive] = React.useState(1);
  const [activeImg, setActiveImg] = React.useState(0);

  const collectionList: CollectionInfoProps[] = [
    {
      state: 1,
      changeActive: (x) => setActive(x),
      title: "ALTA",
      subTitle: "Esosa | 5 pieces",
      text: (
        <>
          In the year 4444, a tribe of 20 women emerged after the extinction of the pure human race. This society is
          called Alta (soaring). It is one of the five societies of Nasie. <br />
          Alta is known for its magic, advanced technology and female domination. When one of their own becomes an
          enemy, trust is broken and the future of Alta loses balance.
        </>
      ),
    },
    {
      state: 2,
      changeActive: (x) => setActive(x),
      title: " HEROES OF KRONOS",
      subTitle: "by Tade | 5 pieces",
      text: (
        <>
          Kronos is a small planet cursed by its inhabitants, a land of war, greed and betrayal. It’s a never-ending
          battlefield.
          <br />5 heroes arise to save their home or so we think. These five beings with different ideologies and
          different reasons to take control are the Heroes of Kronos.
        </>
      ),
    },
    {
      state: 3,
      changeActive: (x) => setActive(x),
      title: "KRYPTO ALIENZ",
      subTitle: "by HlyTobi | 3,333 pieces",
      text: (
        <>
          In an alternate metaverse, the Earth had been colonized by a single nation. Freedom fighting became a norm and
          with it’s efforts came the discovery of an outer worldly beacon. The beacon summoned 3000 Krypto Alienz who
          “agreed” to reclaim the earth for all of Mankind
        </>
      ),
    },
    {
      state: 4,
      changeActive: (x) => setActive(x),
      title: "UGLY DUCKZ",
      subTitle: "Onatiee | 10,000 pieces",
      text: (
        <>
          {" "}
          The year is 2020, mankind faces a deadly threat in the form of the LYGU virus. Scientists and medical
          practitioners work tireless to mitigate and eliminate this deadly virus. 100 ducks are chosen for medical
          testing of the anti-virus in a secret lab in area 51. The tests were a failure and the ducks were abandoned,
          left to perish in the wilderness. Unknowingly the anti-virus mutated the ducks, granting humanoid abilities
          and intelligence. United in a common goal the ducks created a society.
        </>
      ),
    },
    {
      state: 5,
      changeActive: (x) => setActive(x),
      title: "DAMAGED CITIZENS",
      subTitle: "Tade | 5,005 pieces",
      text: (
        <>
          Damaged Ctzns, an NFT pvp/p2e game collection of 5005 inhabitants of 'Kronos'. - Forced to relocation by the self-destruction of their home planet, They arrive on kronos, a small peaceful planet brimming with life, Where an all-out war for control begins
        </>
      ),
    },
  ];

  const alienz = [kryptoAlienz1, kryptoAlienz2, kryptoAlienz3];

  const left = () => {
    setActiveImg((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const right = () => {
    setActiveImg((prev) => (prev < 2 ? prev + 1 : 2));
  };

  return (
    <section className={styles.collectionBg}>
      <div className={`siteWrapper ${styles.collectionWrap}`}>
        <h3 className={styles.ttl}>Explore our NFT collections</h3>
        <div className={styles.collection}>
          <div className={styles.imgSec}>
            <div>
              <>
                <img src={alta2} className={`${styles.krypto2} ${active === 1 ? styles.imageSlide : ""}`} alt="" />
                <img src={alta1} className={`${styles.krypto1} ${active === 1 ? styles.imageSlide : ""}`} alt="" />
              </>
              <>
                <img src={kronos3} className={`${styles.krypto3} ${active === 2 ? styles.imageSlide : ""}`} alt="" />
                <img src={kronos2} className={`${styles.krypto2} ${active === 2 ? styles.imageSlide : ""}`} alt="" />
                <img src={kronos1} className={`${styles.krypto1} ${active === 2 ? styles.imageSlide : ""}`} alt="" />
              </>
              <>
                <img
                  src={kryptoAlienz3}
                  className={`${styles.krypto3} ${active === 3 ? styles.imageSlide : ""}`}
                  alt=""
                />
                <img
                  src={kryptoAlienz2}
                  className={`${styles.krypto2} ${active === 3 ? styles.imageSlide : ""}`}
                  alt=""
                />
                <img
                  src={kryptoAlienz1}
                  className={`${styles.krypto1} ${active === 3 ? styles.imageSlide : ""}`}
                  alt=""
                />
              </>
              <>
                <img src={duckz3} className={`${styles.krypto3} ${active === 4 ? styles.imageSlide : ""}`} alt="" />
                <img src={duckz2} className={`${styles.krypto2} ${active === 4 ? styles.imageSlide : ""}`} alt="" />
                <img src={duckz1} className={`${styles.krypto1} ${active === 4 ? styles.imageSlide : ""}`} alt="" />
              </>
              <>
                <img
                  src={dmgd2}
                  className={`${styles.krypto3} ${active === 5 ? styles.imageSlide : ""}`}
                  alt=""
                />
                <img
                  src={dmgd3}
                  className={`${styles.krypto2} ${active === 5 ? styles.imageSlide : ""}`}
                  alt=""
                />
                <img
                  src={dmgd1}
                  className={`${styles.krypto1} ${active === 5 ? styles.imageSlide : ""}`}
                  alt=""
                />
              </>
            </div>
            <div className={styles.btnWrap}>
              <Button
                type="transparent"
                onClick={() => window.open("https://opensea.io/solarsoft", "_blank")}
                className={styles.btn}
                Icon={ArrowRight}
              >
                View in marketplace{" "}
              </Button>
            </div>
          </div>

          <div className={styles.txtSec}>
            {collectionList.map((item, index) => (
              <CollectionInfo {...item} key={index} active={active} />
            ))}
          </div>
        </div>
        <div className={styles.collectionMobile}>
          <div className={styles.collectionMobileItem}>
            <div className={styles.kronos}>
              <button onClick={left} className={`${styles.leftCtrl} ${styles.ctrlMobile}`}>
                <CaretDown />
              </button>
              <div className={styles.imgSecMobile}>
                {alienz.map((item, index) => (
                  <img
                    className={`${styles.img} ${index === activeImg ? styles.showImg : ""}`}
                    src={item}
                    key={index}
                    alt=""
                  />
                ))}
              </div>
              <button onClick={right} className={`${styles.rightCtrl} ${styles.ctrlMobile}`}>
                <CaretDown />
              </button>
            </div>
            <CollectionInfo {...collectionList[2]} active={3} />
            <Button type="transparent" onClick={() => {}} className={styles.btn} Icon={ArrowRight}>
              View in marketplace
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export { NFTCollection };
