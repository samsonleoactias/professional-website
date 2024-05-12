"use client";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

interface TabPanelProps {
  index: number;
  value: number;
  children?: React.ReactNode;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { index, value, children } = props;

  return (
    <Box ml={2} mt={2}>
      {value === index && children}
    </Box>
  );
};

const Page = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography variant="h1" align="left">
        samson leo actias
      </Typography>
      <Box width="55%" id="menu">
        <Tabs onChange={handleChange}>
          <Tab
            label="bio"
            sx={{
              backgroundColor: value === 0 ? "#DD5746" : "#8b322c",
            }}
          />
          <Tab
            label="resume"
            sx={{
              backgroundColor: value === 1 ? "#DD5746" : "#8b322c",
            }}
          />
          <Tab
            label="portfolio"
            sx={{
              backgroundColor: value === 2 ? "#DD5746" : "#8b322c",
            }}
          />
          <Tab
            label="dogs"
            sx={{
              backgroundColor: value === 3 ? "#DD5746" : "#8b322c",
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}></CustomTabPanel>
      <CustomTabPanel value={value} index={1}></CustomTabPanel>
      <CustomTabPanel value={value} index={2}></CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Typography
          sx={{
            fontSize: "25px",
          }}
        >
          Daisy!
        </Typography>
        <Image
          src={`/images/daisy1.jpg`}
          alt="Daisy"
          width="250"
          height="250"
          id="left-image"
        />
        <Image
          src={`/images/daisy2.jpg`}
          alt="Daisy"
          width="250"
          height="250"
          id="right-image"
        />
        <Typography
          sx={{
            fontSize: "25px",
          }}
        >
          Haruki!
        </Typography>
        <Image
          src={`/images/haruki1.jpg`}
          alt="Haisy"
          width="250"
          height="250"
          id="left-image"
        />
        <Image
          src={`/images/haruki2.jpg`}
          alt="Haruki"
          width="250"
          height="250"
          id="right-image"
        />
        <Typography
          sx={{
            fontSize: "25px",
          }}
        >
          Callie!
        </Typography>
        <Image
          src={`/images/callie1.jpg`}
          alt="Callie"
          width="250"
          height="250"
          id="left-image"
        />
        <Image
          src={`/images/callie2.jpg`}
          alt="Callie"
          width="250"
          height="250"
          id="right-image"
        />
      </CustomTabPanel>
    </>
  );
};

export default Page;
