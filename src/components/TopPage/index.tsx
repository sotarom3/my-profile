import React, { useState } from "react";
import {
  FluentProvider,
  TabList,
  Tab,
  webDarkTheme,
} from "@fluentui/react-components";
import styles from "./index.module.css";
import { About } from "../About";
import { Works } from "../Works";

type TabTypes = "About" | "Works";

export const TopPage: React.FC = () => {
  const [tabType, setTabType] = useState<TabTypes>("About");
  return (
    <FluentProvider
      theme={webDarkTheme}
      style={{
        height: "100vh",
        display: "flex",
        minWidth: "300px",
        width: "100%",
      }}
    >
      <div className={styles.tabList}>
        <TabList
          onTabSelect={(event, data) => {
            setTabType(data.value as TabTypes);
          }}
          size="large"
          defaultSelectedValue={"About"}
        >
          <Tab value="About">about</Tab>
          <Tab value="Works">works</Tab>
        </TabList>
      </div>
      <div className={styles.content}>
        {tabType === "About" ? <About /> : <Works />}
      </div>
    </FluentProvider>
  );
};
