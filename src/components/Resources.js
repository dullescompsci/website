import React from "react";
import { useHistory } from "react-router-dom";
import "./Resources.css"
import ReactGoogleSlides from "react-google-slides";
import { makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import MuiExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
//import Iframe from 'react-iframe'
//import Pdf from "DHS_CS_Club_Problem_Set_0.pdf" // todo: replace this with a cdn url instead to save bandwidth

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
        backgroundColor: '#121212'

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      backgroundColor: '#1F1B24'
    },
}));

const StyledButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        borderRadius: '30px 0px 30px 0',
        backgroundColor: '#13151D',
        color: '000000',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: '#13151D',
        borderBottom: '1px solid backgroundColor: #13151D',
        marginBottom: -1,
        borderRadius: '30px 0px 30px 0',
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            backgroundColor: '#13151D',
            margin: '12px 0',
        },
    },
    expanded: { backgroundColor: '#13151D'},
})(MuiAccordionSummary);
const ExpandMoreIcon = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        color: 'FFFFFF',
    },
}))(MuiExpandMoreIcon);

const AccordionDetails = withStyles((theme) => ({
    root: {
        backgroundColor: '#13151D',
        padding: theme.spacing(2),
        color: '000000',
    },
}))(MuiAccordionDetails);

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
    <div className="resources" class="darktheme">
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
              src="https://github.com/dullescompsci/website/blob/4cea4bc66e8d2d11fca27e3f64ecd0e7174ee267/public/resourcesimage.jpg?raw=true" // this is jpg when rest are png?
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
            src={"DHSCS-arrays.pdf"}
            width="600px"
            height="500px"
            allowFullScreen
            />

          </div>


          <div>
          <h3>Want to see previous slides and handouts?</h3>
            <StyledButton variant="contained" color="secondary" size="large" onClick={slideClick}>Slides</StyledButton>
            <StyledButton variant="contained" color="primary" size ="large" onClick={handoutsClick}>Handouts</StyledButton>
          </div>

          <Accordion class="resourcesAccordian">
            <AccordionSummary
                          expandIcon={<ExpandMoreIcon style={{ color: "white" }}/>}
              aria-controls="panel1a-content"
                          id="panel1a-header"
                          class="accordianSummary"
            >
          <Typography className={classes.heading} class="resourcesTitle">Websites to Practice</Typography>
          </AccordionSummary>
          <AccordionDetails class="accordianDetails">
              <Typography>
              <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Visit W3Schools</a>
              <br></br>
              <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Visit W3Schools</a>
              </Typography>
            </AccordionDetails>
          </Accordion>

      <Accordion class="resourcesAccordian">
        <AccordionSummary
                          expandIcon={<ExpandMoreIcon style={{ color: "white" }}/>}
          aria-controls="panel2a-content"
                          id="panel2a-header"
                          class="accordianSummary"
        >
          <Typography className={classes.heading} class="resourcesTitle">Learning CP</Typography>
        </AccordionSummary>
        <AccordionDetails class="accordianDetails">
          <Typography>
          <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Visit W3Schools</a>
          <br></br>
          <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">Visit W3Schools</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion class="resourcesAccordian">
        <AccordionSummary
                          expandIcon={<ExpandMoreIcon style={{ color: "white" }}/>}
          aria-controls="panel2a-content"
                          id="panel2a-header"
                          class="accordianSummary"
        >
          <Typography className={classes.heading} class="resourcesTitle">Extra Resources</Typography>
        </AccordionSummary>
        <AccordionDetails class="accordianDetails">
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