import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Instagram from '@material-ui/icons/Instagram';
import GitHub from '@material-ui/icons/GitHub';
import Email from '@material-ui/icons/Email';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Footer.css';


const useStyles = makeStyles({
  root: {
    width: '100%',
        backgroundColor: "#121212"
  },
});

const navTheme = createMuiTheme({
  palette: {
      primary: {
          main: '#FFFFFF'
      },
      text: {
          secondary: '#FFFFFF'
      }
  }
})

export default function SimpleBottomNavigation() {
  
  const classes = useStyles();
  
  return (
    <ThemeProvider theme = {navTheme}>
      <BrowserRouter>
      <div>
        <BottomNavigation
        showLabels
        className={classes.root}
        >
          <BottomNavigationAction label=" © 2021 Dulles CS "/>
          <BottomNavigationAction icon={<Email />} /> 
          <BottomNavigationAction icon={<Instagram />} component = {Link} to={"/route2"}/>
          <BottomNavigationAction icon={<GitHub />} component = {Link} to={"/route3"}/>
          </BottomNavigation>
        </div>
      <div>
    <Route path="/route2" component={() => {
      var link = document.createElement("a");
      link.target = "_blank";
      link.href = "https://www.instagram.com/dhscompsci/";
      document.body.appendChild(link);
      link.click();
      return null;
    }}
    />
    </div>
  <div>
    <Route path="/route3" component={() => {
      var link = document.createElement("a");
      link.target = "_blank";
      link.href = "https://github.com/dullescompsci";
      document.body.appendChild(link);
      link.click();
      return null;
    }}
    />
  </div>
  {}
  </BrowserRouter>
</ThemeProvider>
  );
 
}

