import axios from "axios";
import React, { useEffect, useState } from "react";
import { Parser } from "html-to-react";
import { useParams } from "react-router-dom";


import { API_BASE_URL } from "../../utils/constants";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import HowToRegSharpIcon from "@mui/icons-material/HowToRegSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AccessTimeFilledSharpIcon from "@mui/icons-material/AccessTimeFilledSharp";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Eventcrumb from "./Eventbredcrum";
import { Grid } from "@mui/material";

const EventView = () => {
  const boldStyle = {
    fontWeight: "bold",
    fontSize: "18px",
  };

  const { event_id } = useParams();

  const [event, setevent] = useState({
    event_topic: "",
    event_image: "",
    event_description: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/event/event/${event_id}`);
        console.log(event_id);
        setevent(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchContent();
  }, [event_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!event || Object.keys(event).length === 0) {
    return <div>Content not found</div>;
  }

  // return (
  //   <div>
  //     <h2>{content.title}</h2>

  //     <div>{new Parser().parse(content.description)}</div>
  //   </div>
  // );

  return (
    <div>
       
       <Grid container spacing={2}>
        <Grid container item sm={12} md={12} style={{ marginTop: "110px" }}>
          <Eventcrumb/>
        </Grid>
  
        <Grid
          container
          item
          sx={{ bgcolor: "#E8E8E8", width: "100%", height: "auto" }}
          marginLeft={2}
          marginTop={2}
          borderRadius={5}
        >
          
            
         
              <div className="content-use-of-terms">
                <p className="font-style-public-p">
                  {/* <b>Welcome to the ConnectSL website ('the website')!</b> */}
                </p>
                <p className="font-style-public-p">
                  <List sx={{ width: "100%", maxWidth: 360, bgcolor: "" }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <HowToRegSharpIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={<span style={boldStyle}>Status:</span>}
                        secondary={
                          <span style={boldStyle}>Closed for Registration</span>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <CalendarMonthSharpIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <span style={boldStyle}>Registration Period:</span>
                        }
                        secondary={
                          <span style={boldStyle}>
                            {new Parser().parse(event.registration_start_date)}{" "}
                            - {new Parser().parse(event.registration_end_date)}
                          </span>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <BeachAccessIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={<span style={boldStyle}>Event Date:</span>}
                        secondary={
                          <span style={boldStyle}>
                            {new Parser().parse(event.start_date)} -{" "}
                            {new Parser().parse(event.end_date)}
                          </span>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <AccessTimeFilledSharpIcon />
                        </Avatar>
                      </ListItemAvatar>

                      <ListItemText
                        primary={<span style={boldStyle}>Event Time:</span>}
                        secondary={
                          <span style={boldStyle}>
                            {new Parser().parse(event.event_start_time)} -{" "}
                            {new Parser().parse(event.event_end_time)}
                          </span>
                        }
                      />
                    </ListItem>
                  </List>
                  <hr />
                  <h1>DETAILS</h1>
                  <br></br>
                  {new Parser().parse(event.event_description)}
                </p>
              </div>
           
       
         
          </Grid>
   
 
     </Grid>
    </div>
  );
};

export default EventView;
