import { Box, Grid, Typography, colors } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";

import UsefullinksBreadcrumb from "../components/usefulLinks/UsefullinksBreadcrumb";
export default function UsefulLinks() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid container item sm={12} md={12}>
          <UsefullinksBreadcrumb />
        </Grid>

        <Grid item xs={12} md={6} lg={6} marginLeft={3} marginTop={1}>
          <Box>
            <Link
              href="#"
              underline="hover"
              sx={{ fontWeight: { xs: "bold", md: "bold" }, color: "black" }}
              key="3"
              color="#00000"
              fontSize={{ xs: 18, md: 20 }}
            >
              Presidential Secretariat
            </Link>
            <br />
            <Link
              href="#"
              underline="hover"
              s
              sx={{
                fontWeight: { xs: "normal", md: "normal" },
                color: "black",
              }}
              key="3"
              color="#00000"
              fontSize={{ xs: 15, md: 18 }}
            >
              https://www.presidentsoffice.gov.lk/
            </Link>

            <hr style={{ width: "50%", textAlign: "left", marginLeft: 0 }} />
          </Box>
          <Box>
            <Link
              href="#"
              underline="hover"
              sx={{ fontWeight: { xs: "bold", md: "bold" }, color: "black" }}
              key="3"
              color="#00000"
              fontSize={{ xs: 18, md: 20 }}
            >
              Prime Minister's Office
            </Link>
            <br />
            <Link
              href="#"
              underline="hover"
              s
              sx={{
                fontWeight: { xs: "normal", md: "normal" },
                color: "black",
              }}
              key="3"
              color="#00000"
              fontSize={{ xs: 15, md: 18 }}
            >
              https://www.pmoffice.gov.lk/
            </Link>

            <hr style={{ width: "50%", textAlign: "left", marginLeft: 0 }} />
          </Box>
          <Box>
            <Link
              href="#"
              underline="hover"
              sx={{ fontWeight: { xs: "bold", md: "bold" }, color: "black" }}
              key="3"
              color="#00000"
              fontSize={{ xs: 18, md: 20 }}
            >
              Parliament
            </Link>
            <br />
            <Link
              href="#"
              underline="hover"
              s
              sx={{
                fontWeight: { xs: "normal", md: "normal" },
                color: "black",
              }}
              key="3"
              color="#00000"
              fontSize={{ xs: 15, md: 18 }}
            >
              https://www.parliament.lk/
            </Link>

            <hr style={{ width: "50%", textAlign: "left", marginLeft: 0 }} />
          </Box>
          <Box>
            <Link
              href="#"
              underline="hover"
              sx={{ fontWeight: { xs: "bold", md: "bold" }, color: "black" }}
              key="3"
              color="#00000"
              fontSize={{ xs: 18, md: 20 }}
            >
              Supreme Court
            </Link>
            <br />
            <Link
              href="#"
              underline="hover"
              s
              sx={{
                fontWeight: { xs: "normal", md: "normal" },
                color: "black",
              }}
              key="3"
              color="#00000"
              fontSize={{ xs: 15, md: 18 }}
            >
              https://www.supremecourt.lk/
            </Link>

            <hr style={{ width: "50%", textAlign: "left", marginLeft: 0 }} />
          </Box>
          <Box>
            <Link
              href="#"
              underline="hover"
              sx={{ fontWeight: { xs: "bold", md: "bold" }, color: "black" }}
              key="3"
              color="#00000"
              fontSize={{ xs: 18, md: 20 }}
            >
              Office Of The Cabinet Of Ministers
            </Link>
            <br />
            <Link
              href="#"
              underline="hover"
              s
              sx={{
                fontWeight: { xs: "normal", md: "normal" },
                color: "black",
              }}
              key="3"
              color="#00000"
              fontSize={{ xs: 15, md: 18 }}
            >
              https://cabinetoffice.gov.lk/
            </Link>

            <hr style={{ width: "50%", textAlign: "left", marginLeft: 0 }} />
          </Box>
        </Grid>
        <Grid item marginLeft={3} marginTop={1}>
          test
        </Grid>
      </Grid>
    </div>
  );
}
