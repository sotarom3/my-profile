import React from "react";
import persona from "./../../assets/AA_maejima.jpg";
import xIcon from "./../../assets/x_icon.png";
import kaggle from "./../../assets/kaggle.png";
import linkedin from "./../../assets/linkedin.png";
import github from "./../../assets/github-mark-white.png";
import { Avatar, Title2, Text, Button } from "@fluentui/react-components";
import { BookRegular } from "@fluentui/react-icons";

import styles from "./index.module.css";

const LinkButton: React.FC<{ href: string; name: string; img: string }> = ({
  href,
  name,
  img,
}) => (
  <Button
    icon={<img src={img} height={21} />}
    size="large"
    as="a"
    href={href}
    style={{ width: "160px" }}
  >
    {name}
  </Button>
);

// const LinkIconButton: React.FC<{
//   href: string;
//   name: string;
//   icon: FluentIcon;
// }> = ({ href, name, icon }) => (
//   <Button
//     icon={<>{icon}</>}
//     size="large"
//     as="a"
//     href={href}
//     style={{ width: "200px" }}
//   >
//     {name}
//   </Button>
// );

export const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <Avatar image={{ src: persona }} size={120} />
      <Title2>Sotaro Maejima</Title2>
      <div className={styles.affiliation}>
        <Text size={400}>株式会社 ALGO ARTIS</Text>
        <Text size={400}>Software engineer</Text>
      </div>
      <div>{""}</div>
      <LinkButton
        href="https://twitter.com/sotarom3"
        img={xIcon}
        name={"@sotarom3"}
      />
      <LinkButton
        href="https://github.com/sotarom3"
        img={github}
        name={"Github"}
      />
      <LinkButton
        href="https://jp.linkedin.com/in/%E7%B6%9C%E5%A4%AA%E6%9C%97-%E5%89%8D%E5%B3%B6-878075223"
        img={linkedin}
        name={"LinkedIn"}
      />
      <LinkButton
        href="https://www.kaggle.com/sotaromaejima"
        img={kaggle}
        name={"Kaggle"}
      />
      <Button
        icon={
          <>
            <BookRegular />
          </>
        }
        size="large"
        as="a"
        href={"https://researchmap.jp/soutarou-maejima"}
        style={{ width: "160px" }}
      >
        {"researchmap"}
      </Button>
    </div>
  );
};
