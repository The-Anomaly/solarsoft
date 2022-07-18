import { MinusIcon, PlusIcon } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

interface FAQITemProps {
  active: number;
  state: number;
  changeActive: (state: number) => void;
  question: string;
  answer: string;
}

interface FAQListProp {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQITemProps> = ({ active, state, changeActive, question, answer }) => {
  const contentEl = React.useRef<HTMLDivElement>(null);
  return (
    <div className={`${styles.faqItem} ${active === state ? styles.activeItem : styles.inactiveItem}`}>
      <button onClick={() => changeActive(active === state ? -1 : state)} className={styles.faqBtn}>
        <span>{question}</span> {state === active ? <MinusIcon /> : <PlusIcon />}
      </button>
      <div
        ref={contentEl}
        className={styles.faqBody}
        style={active === state && contentEl.current ? { height: contentEl.current.scrollHeight } : { height: "0px" }}
      >
        <div>{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [active, setActive] = React.useState(-1);

  const faqs: FAQListProp[] = [
    {
      question: "Who can partner with Solarsoft?",
      answer: `Global brands/businesses and anyone with an idea.`,
    },
    {
      question: "Does Solarsoft have a discord?",
      answer: `Yes, but the Friends of Solarsoft channels are NFT-gated (you must hold a … to enter) inside the Solarsoft Discord. Once inside, you will have access to private Friends of Solarsoft channels that will include information on staking, community events, upcoming drops, and more.`,
    },
    {
      question: "What blockchain technology do we work with?",
      answer: `We currently work with; Ethereum, Solana, Binance Smart Chains, EVM and WASM compatible chains.`,
    },
    {
      question: " How can I learn more about blockchain technology?",
      answer: `You can learn about blockchain technology at Solarsoft University. It is a free, open-source learning community that consists of users, developers, technologists, artists, miners, HODLers and enthusiasts, ranging from beginners to advanced`,
    },
    {
      question: "Can I leverage blockchain technology for my business/brand?",
      answer: `If your use case is digital, yes, you can leverage blockchain technology. If it isn’t clearly digital you can reach out and we will let you know if your business requirements can be configured to leverage blockchain.`,
    },
  ];
  return (
    <section className={`siteWrapper ${styles.faqSec}`}>
      <div className={styles.txtSec}>
        <h6 className={styles.ttl}>We know you might have some questions</h6>
        <p className={styles.txt}>We’ve answered a few questions you might have about our services</p>
      </div>
      <div className={styles.faqList}>
        {faqs.map((item, index) => (
          <FAQItem {...item} key={index} state={index} active={active} changeActive={(x) => setActive(x)} />
        ))}
      </div>
    </section>
  );
};

export { FAQ };
