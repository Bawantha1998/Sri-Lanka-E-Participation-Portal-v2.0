import { Grid, Typography } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FaqsBreadcrumb from "../components/FAQS/FaqsBreadcrumb";

export default function FAQs() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid container item sm={12} md={12} style={{ marginTop: "110px" }}>
          <FaqsBreadcrumb />
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ color: "" }}>
        <Grid item lg={2}>
          {/* <div className="images-public-style"></div> */}
        </Grid>
        <Grid item lg={8}>
          <div className="content-body-top">
            <Typography variant="h5">
              <br />
              <b>FAQs on ConnectSL's Feedback Process</b>
            </Typography>
            <br />

            {/* What is ConnectSL's role in the feedback */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="body1">
                  <b>
                    What is ConnectSL's role in the feedback process? Does
                    ConnectSL filter or censor feedback received from
                    contributors?
                  </b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  eParticipation Portal serves as the vital link between
                  citizens and government agencies in Sri Lanka, actively
                  fostering communication and gathering feedback on various
                  policy issues. All feedback submitted to eParticipation
                  Portal, regardless of sentiments expressed, undergoes a
                  thorough review by our dedicated staff. We commit to conveying
                  the feedback, in its entirety, to the relevant agencies for
                  their information and consideration. eParticipation Portal
                  adheres to a policy of not editing or filtering any feedback
                  received.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <hr />
            <br />

            <Typography variant="h5">
              <b>Other FAQs</b>
            </Typography>

            <br />

            {/* What happens to my feedback after..... */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="body1">
                  <b>
                    What happens to my feedback after I have filled out the
                    Online Feedback Form and submitted it?
                  </b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Rest assured that your feedback will be directed to the
                  relevant agency for their review and necessary follow-up.
                </Typography>
              </AccordionDetails>
              {/* Add more Accordion items as needed */}
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="body1">
                  <b>
                    What happens to feedback that I submit through the Public
                    Consultations page?
                  </b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Feedback received through the Public Consultations page is
                  promptly sent directly to the government agency responsible
                  for the posted consultation paper.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="body1">
                  <b>
                    I would like to join the ConnectSL mailing list to stay
                    informed about events and receive newsletters. How can I
                    sign up, and can I unsubscribe later?
                  </b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Stay updated on our latest events by visiting our [Events
                  page](#). Consider subscribing to our weekly newsletter,
                  ConnectBytes, by clicking [here](#).
                </Typography>
              </AccordionDetails>
              {/* Add more Accordion items as needed */}
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="body1">
                  <b>
                    I use browsers like Firefox and Mozilla. Why can't I submit
                    my feedback using these browsers?
                  </b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  For optimal performance, the ConnectSL website is best viewed
                  using Internet Explorer 11 & above and the latest two
                  versions. If you encounter any issues accessing our website,
                  please inform us via our [feedback form](#), and we will be
                  happy to assist you.
                </Typography>
              </AccordionDetails>
              {/* Add more Accordion items as needed */}
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="body1">
                  <b>
                    I work from an Apple computer. Can I access the ConnectSL
                    website?
                  </b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Absolutely! You can easily view information on the ConnectSL
                  website and submit your feedback online.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="body1">
                  <b>Can I access the website via my mobile phone?</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Yes, the ConnectSL website is designed to be mobile-friendly,
                  ensuring easy access and engagement on your mobile devices.
                </Typography>
              </AccordionDetails>
              {/* Add more Accordion items as needed */}
            </Accordion>
            <br />
          </div>
        </Grid>
        <Grid item lg={2}></Grid>
      </Grid>
    </div>
  );
}
