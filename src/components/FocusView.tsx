import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TopNav from "./TopNav";
import "./FocusView.scss";
import { Alert, Snackbar } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import Divider from "@mui/material/Divider";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <TopNav />
      <div className="spacing"></div>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 504,
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab
            icon={<img src="fv1.png" className="imagePreview" />}
            {...a11yProps(0)}
          />
          <Tab
            icon={<img src="fv2.png" className="imagePreview" />}
            {...a11yProps(1)}
          />
          <Tab
            icon={<img src="fv3.png" className="imagePreview" />}
            {...a11yProps(2)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="mainContainer">
            <img src="fv1.png" />
            <RightContainer />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="mainContainer">
            <img src="fv2.png" />
            <RightContainer />
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="mainContainer">
            {/* controls autoPlay muted loop prop  */}
            <video width="100%" height="100%" autoPlay controls>
              <source src="product.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <RightContainer />
          </div>
        </TabPanel>
      </Box>
    </>
  );
}

const RightContainer = () => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
    setOpen(true);
  };

  const handleClose = (_event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <div className="rightContainer">
        <div className="title">Greater Than</div>
        <div className="price">$149.99</div>
        <Divider className="divider" />
        <div className="text">
          Work out safer than ever before with our most advanced health &
          fitness device.
        </div>
        {/* <img src="color.png" className="color" /> */}
        <div className="colorContainer">
          Color:
          <br />
          <span className="dot" style={{ backgroundColor: "#000000" }} />
          <span className="dot" style={{ backgroundColor: "#5f6368" }} />
          <span className="dot" style={{ backgroundColor: "#885418" }} />
          <span className="dot selected" style={{ backgroundColor: "#c00" }} />
          <span className="dot" style={{ backgroundColor: "#fb940b" }} />
          <br />
          <span className="dot" style={{ backgroundColor: "#ff0" }} />
          <span className="dot" style={{ backgroundColor: "#0c0" }} />
          <span className="dot" style={{ backgroundColor: "#00f" }} />
          <span className="dot" style={{ backgroundColor: "#762ca7" }} />
          <span className="dot" style={{ backgroundColor: "#ff98bf" }} />
          <br />
          Metallic Red
        </div>
        <Divider className="divider" />
        <div className="button" onClick={handleClick}>
          Buy Now
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Purchased Successfully! ({count})
        </Alert>
      </Snackbar>
    </>
  );
};
