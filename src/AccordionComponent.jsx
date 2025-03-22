import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionComponent = ({ items }) => {
  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto", marginTop: "20px" }}>
      {items.map((item, index) => (
        <Accordion
          key={index}
          sx={{
            background: "linear-gradient(to right, #2a2d43, #3c3f5a)", // Dark gradient background
            color: "#ffffff", // White text for contrast
            marginBottom: "10px",
            borderRadius: "10px",
            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              boxShadow: "8px 8px 20px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />} // White expand icon
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionComponent;
