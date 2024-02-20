import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import { MenuItem } from "@mui/material";
export default function AccordionUsage() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Accordion>
        <AccordionSummary aria-controls="" id="">
          <MenuItem sx={{ display: "flex", gap: 1 }}>
            <HomeIcon fontSize="small" />
            HOME
          </MenuItem>
        </AccordionSummary>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <MenuItem sx={{ display: "flex", gap: 1 }}>
            <HomeIcon fontSize="small" />
            PARTICIPATE
          </MenuItem>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <MenuItem sx={{ display: "flex", gap: 1 }}>
            <HomeIcon fontSize="small" />
            READ
          </MenuItem>
        </AccordionSummary>
        <AccordionDetails>test</AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <MenuItem sx={{ display: "flex", gap: 1 }}>
            <HomeIcon fontSize="small" />
            PHOTO GALLERY
          </MenuItem>
        </AccordionSummary>
        <AccordionDetails>test</AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <MenuItem sx={{ display: "flex", gap: 1 }}>
            <HomeIcon fontSize="small" />
            WHO WE ARE
          </MenuItem>
        </AccordionSummary>
        <AccordionDetails>test</AccordionDetails>
      </Accordion>
    </div>
  );
}
