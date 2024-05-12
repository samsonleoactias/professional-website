"use client";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  const [value, setValue] = useState(5);

  const largerDevice = useMediaQuery("(min-width:1000px)");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  if (largerDevice) {
    return (
      <>
        <Typography variant="h1" align="center">
          samson leo actias
        </Typography>
        <Image
          src={`/images/woods.jpg`}
          alt="trees"
          id="trees"
          width="800"
          height="127"
        />
        <Box width="60%" id="menu">
          <Tabs onChange={handleChange} centered>
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
        <CustomTabPanel value={value} index={0}>
          <Typography
            sx={{
              fontSize: "25px",
            }}
          >
            Who I am:
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            --a full stack software engineer
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            --a problem solver
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            --a constant learner and educator
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            --a former apprentice electrician, bar server, and New York Fashion
            Week photographer&#39;s assistant
          </Typography>
          <Typography
            sx={{
              fontSize: "25px",
              borderTop: "2px solid #DD5746",
              width: "45%",
              marginTop: "30px",
            }}
          >
            What I have:
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            --4 years of experience in front end, back end, API, and database
            engineering
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            --devotion to the customer and user experience, as evidenced by the
            Customer Shoes Award Honorable Mention I was given by my former
            employer Bandwidth
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            --first-hand experience with AI from my role at Librestream where I
            designed a new knowledge management product featuring machine
            learning for finding information quickly and where I built the first
            prototype of said project
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            --a proven track record of coding solutions to problems, including
            building an app at Bandwidth that enabled contracted pen testers to
            increase their testing coverage of my team&#39;s application from
            50% to 100%
          </Typography>
          <Typography
            sx={{
              fontSize: "25px",
              borderTop: "2px solid #DD5746",
              width: "45%",
              marginTop: "30px",
            }}
          >
            What I want to bring to your team:
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            --communication skills for discussing solutions to problems and
            deciding on design approaches for new software
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            --comfort in working on-call shifts
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            --technical skills and logical problem solving ability, which I
            developed both in software work and in my undergraduate education in
            mathematics
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            --a willingness to receive feedback so I can improve my work and
            skills
          </Typography>
          <Typography
            sx={{
              fontSize: "25px",
              borderTop: "2px solid #DD5746",
              width: "45%",
              marginTop: "30px",
            }}
          >
            How you can contact me:
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            --hello at samsonleoactias dot com
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            --linkedin.com/in/samsonleoactias
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Typography
            sx={{
              fontSize: "25px",
            }}
          >
            <Link
              href="https://docs.google.com/document/d/1nt7lgNoiZu-PiniS0I7-T7_UmCF1voFc9NeQX8KEKM0/edit?usp=sharing"
              target="_blank"
            >
              Link: Hosted on Google Docs
            </Link>
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Typography
            sx={{
              fontSize: "25px",
            }}
          >
            Chess:
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            Built with a React/NextJS front end, a NodeJS backend, and an
            GraphQL API.
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            Currently the computer player algorithm isn&#39;t very
            sophisticated.
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            It mostly only knows to prioritize capturing enemy pieces and how to
            get itself out of check.
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "30px",
            }}
          >
            Features on my to do list:
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "45px",
            }}
          >
            --auth so players can keep track of wins, loses, and ties
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              paddingLeft: "45px",
            }}
          >
            --a much smarter computer player
          </Typography>
          <Typography
            sx={{
              fontSize: "25px",
            }}
          >
            <Link
              href="https://github.com/samsonleoactias/chess-game-server"
              target="_blank"
            >
              Link: Github for server
            </Link>
          </Typography>
          <Typography
            sx={{
              fontSize: "25px",
            }}
          >
            <Link
              href="https://github.com/samsonleoactias/chess-ui"
              target="_blank"
            >
              Link: Github for UI
            </Link>
          </Typography>
          <Typography
            sx={{
              fontSize: "25px",
            }}
          >
            <Link
              href="https://chess-ui-de2f40ad29e2.herokuapp.com/game"
              target="_blank"
            >
              Link: Website
            </Link>
          </Typography>
        </CustomTabPanel>
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
            className="left-image"
          />
          <Image
            src={`/images/daisy2.jpg`}
            alt="Daisy"
            width="250"
            height="250"
            className="right-image"
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
            className="left-image"
          />
          <Image
            src={`/images/haruki2.jpg`}
            alt="Haruki"
            width="250"
            height="250"
            className="right-image"
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
            className="left-image"
          />
          <Image
            src={`/images/callie2.jpg`}
            alt="Callie"
            width="250"
            height="250"
            className="right-image"
          />
        </CustomTabPanel>
      </>
    );
  }

  return (
    <>
      <Typography variant="h3" align="center" sx={{ marginBottom: "15px" }}>
        samson leo actias
      </Typography>
      <Image
        src={`/images/woods.jpg`}
        alt="trees"
        id="trees-small"
        width="200"
        height="30"
      />
      <Typography
        align="center"
        sx={{
          fontSize: "30px",
          borderBottom: "2px solid #DD5746",
          borderTop: "2px solid #DD5746",
          marginBottom: "30px",
          marginTop: "30px",
        }}
      >
        bio
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
        }}
      >
        Who I am:
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "20px",
        }}
      >
        --a full stack software engineer
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "20px",
        }}
      >
        --a problem solver
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "20px",
        }}
      >
        --a constant learner and educator
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "20px",
        }}
      >
        --a former apprentice electrician, bar server, and New York Fashion Week
        photographer&#39;s assistant
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          marginTop: "30px",
        }}
      >
        What I have:
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "20px",
        }}
      >
        --4 years of experience in front end, back end, API, and database
        engineering
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "20px",
        }}
      >
        --devotion to the customer and user experience, as evidenced by the
        Customer Shoes Award Honorable Mention was given by my former employer
        Bandwidth
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "20px",
        }}
      >
        --first-hand experience with AI from my role at Librestream where I
        designed a new knowledge management product featuring machine learning
        for finding information quickly and where I built the first prototype of
        said project
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "20px",
        }}
      >
        --a proven track record of coding solutions to problems, including
        building an app at Bandwidth that enabled contracted pen testers to
        increase their testing coverage of my team&#39;s application from 50% to
        100%
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          marginTop: "30px",
        }}
      >
        What I want to bring to your team:
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "20px",
        }}
      >
        --communication skills for discussing solutions to problems and deciding
        on design approaches for new software
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "20px",
        }}
      >
        --comfort in working on-call shifts
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "20px",
        }}
      >
        --technical skills and logical problem solving ability, which I
        developed both in software work and in my undergraduate education in
        mathematics
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "20px",
        }}
      >
        --a willingness to receive feedback so I can improve my work and skills
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          marginTop: "30px",
        }}
      >
        How you can contact me:
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "20px",
        }}
      >
        --hello at samsonleoactias dot com
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "20px",
        }}
      >
        --linkedin.com/in/samsonleoactias
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: "30px",
          borderBottom: "2px solid #DD5746",
          borderTop: "2px solid #DD5746",
          marginBottom: "30px",
          marginTop: "30px",
        }}
      >
        resume
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
        }}
      >
        <Link
          href="https://docs.google.com/document/d/1nt7lgNoiZu-PiniS0I7-T7_UmCF1voFc9NeQX8KEKM0/edit?usp=sharing"
          target="_blank"
        >
          Link: Hosted on Google Docs
        </Link>
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: "30px",
          borderBottom: "2px solid #DD5746",
          borderTop: "2px solid #DD5746",
          marginBottom: "30px",
          marginTop: "30px",
        }}
      >
        portfolio
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
        }}
      >
        Chess:
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "30px",
        }}
      >
        Built with a React/NextJS front end, a NodeJS backend, and an GraphQL
        API.
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "30px",
        }}
      >
        Currently the computer player algorithm isn&#39;t very sophisticated.
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "30px",
        }}
      >
        It mostly only knows to prioritize capturing enemy pieces and how to get
        itself out of check.
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "30px",
        }}
      >
        Features on my to do list:
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "45px",
        }}
      >
        --auth so players can keep track of wins, loses, and ties
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingLeft: "45px",
        }}
      >
        --a much smarter computer player
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
        }}
      >
        <Link
          href="https://github.com/samsonleoactias/chess-game-server"
          target="_blank"
        >
          Link: Github for server
        </Link>
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
        }}
      >
        <Link
          href="https://github.com/samsonleoactias/chess-ui"
          target="_blank"
        >
          Link: Github for UI
        </Link>
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
        }}
      >
        <Link
          href="https://chess-ui-de2f40ad29e2.herokuapp.com/game"
          target="_blank"
        >
          Link: Website
        </Link>
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: "30px",
          borderBottom: "2px solid #DD5746",
          borderTop: "2px solid #DD5746",
          marginBottom: "30px",
          marginTop: "30px",
        }}
      >
        dogs
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: "20px",
        }}
      >
        Daisy!
      </Typography>
      <Image
        src={`/images/daisy1.jpg`}
        alt="Daisy"
        width="200"
        height="200"
        className="dog-small-device"
      />
      <Image
        src={`/images/daisy2.jpg`}
        alt="Daisy"
        width="200"
        height="200"
        className="dog-small-device"
      />
      <Typography
        align="center"
        sx={{
          fontSize: "20px",
        }}
      >
        Haruki!
      </Typography>
      <Image
        src={`/images/haruki1.jpg`}
        alt="Haisy"
        width="200"
        height="200"
        className="dog-small-device"
      />
      <Image
        src={`/images/haruki2.jpg`}
        alt="Haruki"
        width="200"
        height="200"
        className="dog-small-device"
      />
      <Typography
        align="center"
        sx={{
          fontSize: "20px",
        }}
      >
        Callie!
      </Typography>
      <Image
        src={`/images/callie1.jpg`}
        alt="Callie"
        width="200"
        height="200"
        className="dog-small-device"
      />
      <Image
        src={`/images/callie2.jpg`}
        alt="Callie"
        width="200"
        height="200"
        className="dog-small-device"
      />
    </>
  );
};

export default Page;
