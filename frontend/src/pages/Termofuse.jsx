import React from "react";
import { Box, Grid, Typography, colors } from "@mui/material";

import Link from "@mui/material/Link";
import TermofuseBreadcrumb from "../components/termofuse/TermofuseBreadcrumb";

export default function Termofuse() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid container item sm={12} md={12}>
          <TermofuseBreadcrumb />
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            marginLeft: { xs: 3, md: 20 },
            marginRight: { xs: 3, md: 20 },
            marginTop: 1,
          }}
          
        >
          <Box>
            <Typography
              sx={{ fontWeight: { xs: "bold", md: "bold" }, color: "black",marginBottom:3 }}
              key="3"
              color="#00000"
              fontSize={{ xs: 17, md: 20 }}
            >
              TERMS OF USE FOR eParticipation PORTAL GOVERNMENT OF SRI LANKA
            </Typography>

            <Typography
              s
              sx={{
                fontWeight: { xs: "normal", md: "normal" },
                color: "black",textAlign:"justify"
              }}
              key="3"
              color="#00000"
              fontSize={{ xs: 15, md: 16 }}
            >
              Welcome to the eParticipation Portal, Government of Sri Lanka! We
              are excited to have you in our community and participate in the
              various activities and discussions offered on our platform. Before
              you get started, please take a moment to read and understand the
              applicable ‘Terms of Use’, as they govern your use of the portal.
              By accessing or using the eParticipation Portal, you agree to
              comply with and be bound by these ‘Terms of Use’. If you do not
              agree with any part of these terms, you may refrain from accessing
              and using the platform.
            </Typography>

            <hr />
          </Box>
          <Box>
            <Typography
              s
              sx={{
                fontWeight: { xs: "normal", md: "normal" },
                color: "black",textAlign:"justify"
              }}
              key="3"
              color="#00000"
              fontSize={{ xs: 15, md: 16 }}
            >
              <b>User Eligibility:</b> You must be at least 18 years of age to
              use the eParticipation Portal. If you are under 18, you may access
              and use our platform only with the involvement and supervision of
              a parent or legal guardian.
            </Typography>
            <hr />
          </Box>
          <Box>
            <Typography
              s
              sx={{
                fontWeight: { xs: "normal", md: "normal" },
                color: "black",textAlign:"justify"
              }}
              key="3"
              color="#00000"
              fontSize={{ xs: 15, md: 16 }}
            >
              <b>User Registration:</b>In order to fully and actively
              participate in the activities and discussions on eParticipation
              Portal, entering accurate user details is a must. Name of the user
              and the respective contact details should be verifiable and
              administration has the rights to obtain verifications.
            </Typography>
            <hr />
          </Box>
          <Box>
            <Typography
              s
              sx={{
                fontWeight: { xs: "normal", md: "normal" },
                color: "black",textAlign:"justify"
              }}
              key="3"
              color="#00000"
              fontSize={{ xs: 15, md: 16 }}
            >
              <b>User Conduct:</b>You are allowed to use eParticipation Portal
              for lawful purposes only and in a manner consistent with all
              applicable laws and regulations of the country. You will not be
              permitted to engage in any activity that disrupts the functioning
              of the platform or infringes the rights of others.
            </Typography>
            <hr />
          </Box>
          <Box>
            <Typography
              s
              sx={{
                fontWeight: { xs: "normal", md: "normal" },
                color: "black",textAlign:"justify"
              }}
              key="3"
              color="#00000"
              fontSize={{ xs: 15, md: 16 }}
            >
              <b>Content Submission:</b>By submitting content, such as comments,
              posts, or other materials, you grant eParticipation Portal, a
              non-exclusive, royalty-free, perpetual, irrevocable, and fully sub
              licensable right to use, reproduce, modify, adapt, publish,
              translate, create derivative work from, distribute, and display
              such content throughout the world in any media.
            </Typography>
            <hr />
          </Box>
          <Box>
            <Typography
              s
              sx={{
                fontWeight: { xs: "normal", md: "normal" },
                color: "black",textAlign:"justify"
              }}
              key="3"
              color="#00000"
              fontSize={{ xs: 15, md: 16 }}
            >
              <b>Intellectual Property:</b>All content and materials on
              eParticipation Portal, including but not limited to text,
              graphics, logos, images, and software, are the property of the
              Portal and are protected by copyright, trademark, and other
              intellectual property laws.
            </Typography>
            <hr />
          </Box>
          <Box>
            <Typography
              s
              sx={{
                fontWeight: { xs: "normal", md: "normal" },
                color: "black",textAlign:"justify"
              }}
              key="3"
              color="#00000"
              fontSize={{ xs: 15, md: 16 }}
            >
              <b>Termination:</b>The eParticipation Portal reserves the right to
              terminate or moderate your comments, for the best of the national
              interest.
            </Typography>
            <hr />
          </Box>
          <Box>
            <Typography
              s
              sx={{
                fontWeight: { xs: "normal", md: "normal" },
                color: "black",textAlign:"justify"
              }}
              key="3"
              color="#00000"
              fontSize={{ xs: 15, md: 16 }}
            >
              <b>Changes to Terms of Use:</b>eParticipation Portal, may update
              these ‘Terms of Use’ from time to time. We will notify you of any
              changes by updating the portal with the new ‘Terms of Use’. We
              expect your attentiveness towards respective changes and getting
              timely updated with the same.
            </Typography>
            <hr />
          </Box>
          <Box>
            <Typography
              s
              sx={{
                fontWeight: { xs: "normal", md: "normal" },
                color: "black",textAlign:"justify"
              }}
              key="3"
              color="#00000"
              fontSize={{ xs: 15, md: 16 }}
            >
              <b>Contact Information:</b>If you have any questions,
              clarifications or concerns about these ‘Terms of Use’, please
              refer the details in contact us. By using eParticipation Portal,
              Government of Sri Lanka, you agree to these ‘Terms of Use’. Thank
              you for being a part of our community!
            </Typography>
            <hr />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
