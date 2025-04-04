import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AboutTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap", // Allows tabs to wrap if there is not enough space
            },
          }}
          TabIndicatorProps={{
            sx: {
              bgcolor: "#ffeb3b", // Color of the indicator line
            },
          }}
        >
          <Tab
            label="Education"
            {...a11yProps(0)}
            sx={{
              "&.Mui-selected": {
                color: "#fff",
              },
              "&": {
                color: "#ffeb3b",
              },
              "&:hover": {
                color: "#fff",
              },
              "@media (max-width: 600px)": {
                fontSize: "0.740rem", // Smaller font size on small screens
              },
            }}
          />
          <Tab
            label="software"
            {...a11yProps(1)}
            sx={{
              "&.Mui-selected": {
                color: "#fff",
              },
              "&": {
                color: "#ffeb3b",
              },
              "&:hover": {
                color: "#fff",
              },
              "@media (max-width: 600px)": {
                fontSize: "0.740rem",
              },
            }}
          />
          <Tab
            label="Experience"
            {...a11yProps(2)}
            sx={{
              "&.Mui-selected": {
                color: "#fff",
              },
              "&": {
                color: "#ffeb3b",
              },
              "&:hover": {
                color: "#fff",
              },
              "@media (max-width: 600px)": {
                fontSize: "0.740rem",
              },
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <span className="h-60  block">
        <ul style={{ listStyleType: "none" }}>
          <li
            style={{
              position: "relative",
              paddingLeft: "1.5rem",
              paddingBottom: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "50%",

                transform: "translateY(-50%)",
                fontSize: "1.25rem",
                color: "#ffeb3b",
              }}
            >
              &rarr;
            </span>
            Diploma In Digital Image <br />
            G-Tec Computer Center
          </li>
          <li
            style={{
              position: "relative",
              paddingLeft: "1.5rem",
              paddingBottom: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "1.25rem",
                color: "#ffeb3b",
              }}
            >
              &rarr;
            </span>
            Diploma In Accounting <br />
            Sobha Institute, Vadakara
          </li>
          <li
            style={{
              position: "relative",
              paddingLeft: "1.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "1.25rem",
                color: "#ffeb3b",
              }}
            >
              &rarr;
            </span>
            Higher Secondary <br />
            GVHSS Madappally
          </li>
        </ul>
        </span>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
      <span className="h-60  block">
        <ul style={{ listStyleType: "none" }}>
          <li
            style={{
              position: "relative",
              paddingLeft: "1.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "1.25rem",
                color: "#ffeb3b",
              }}
            >
              &rarr;
            </span>
            Adobe Photoshop
          </li>
          <li
            style={{
              position: "relative",
              paddingLeft: "1.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "1.25rem",
                color: "#ffeb3b",
              }}
            >
              &rarr;
            </span>
            Adobe Illustrator
          </li>
          <li
            style={{
              position: "relative",
              paddingLeft: "1.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "1.25rem",
                color: "#ffeb3b",
              }}
            >
              &rarr;
            </span>
            CorelDraw
          </li>
          <li
            style={{
              position: "relative",
              paddingLeft: "1.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "1.25rem",
                color: "#ffeb3b",
              }}
            >
              &rarr;
            </span>
            InDesign
          </li>
        </ul>
        </span>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <span className="h-60 overflow-y-auto block">
          <div>
            <b>Graphic Designer</b> <br />
            The Fanto Technolab · Freelance <br />
            Dec 2024 - Mar 2025 · 4 mos <br />
            Kozhikode, Kerala, India · Remote
          </div>

          <div className="pt-4">
            <b>Graphic Designer</b> <br />
            FREEBIRD · Full-time <br />
            Feb 2023 - Aug 2024 · 1 yr 7 mos <br />
            Kozhikode, Kerala, India · Remote
          </div>

          <div className="pt-4">
            <b>Graphic Designer</b> <br />
            Be-Worldwide · Internship <br />
            Dec 2022 - Feb 2023 · 3 mos
          </div>

          <div className="pt-4">
            <b>Graphic Designer</b> <br />
            Thakkol Creatives · Internship <br />
            Sep 2022 - Nov 2022 · 3 mos
          </div>

          
        </span>
      </CustomTabPanel>
    </Box>
  );
}
