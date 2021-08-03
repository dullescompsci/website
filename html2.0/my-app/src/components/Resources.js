import React from "react";
import { useHistory } from "react-router-dom";
import "./Resources.css"
import ReactGoogleSlides from "react-google-slides";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Iframe from 'react-iframe'
import Pdf from "../../src/DHS_CS_Club_Problem_Set_0.pdf"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    backgroundColor: 'darkred'

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Resources() {

  const classes = useStyles();
  const history = useHistory();

  const slideClick = () => {
    history.push("/slides");
    
  }

  const handoutsClick = () => {
    history.push("/handouts");
    
  }

  // const pdfClick = () => {
    
  // }

  return (
    <div className="resources">
      <div class="container">
        <div class="row align-items-center my-5">
        <div class="col-lg-12">
          </div>
          <div class="col-lg-6">
            <h1> </h1>
            <h1 class="font-weight-light">Member Resources</h1>
            <div class="col-lg-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="resourcesimage.jpg"
              alt=""
            />
          </div>
            <h1> </h1>
            <h2>
              Latest Slide and Handout
            </h2>
            <ReactGoogleSlides
              width={640}
              height={480}
              slidesLink="https://docs.google.com/presentation/d/1z_0Z0rfNzn0okJWKPZRLCo8Xos9qY8YTrcbpcbrqFk0/edit?usp=sharing"
              position={1}
              showControls
              loop
            />
            <br></br>
          </div>

          <div>
            <h1> </h1>
            <iframe 
            src={Pdf} 
            width="600px"
            height="500px"
            allowFullScreen
            />

          </div>


          <div>
          <h3>Want to see previous slides and handouts?</h3>
            <button onClick={slideClick} class="buttonFont">Slides</button>
            <button onClick={handoutsClick} class="buttonFont">Handouts</button>
          </div>

          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
          <Typography className={classes.heading} class="resourcesTitle1">Websites to Practice</Typography>
          </AccordionSummary>
            <AccordionDetails>
              <Typography>
              <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Visit W3Schools</a>
              <br></br>
              <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Visit W3Schools</a>
              </Typography>
            </AccordionDetails>
          </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} class="resourcesTitle2">Learning CP</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Visit W3Schools</a>
          <br></br>
          <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Visit W3Schools</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} class="resourcesTitle3">Extra Resources</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Visit W3Schools</a>
          <br></br>
          <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Visit W3Schools</a>
          
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h1> </h1>
        </div>
      </div>
    </div>
    
  );
}

export default Resources;