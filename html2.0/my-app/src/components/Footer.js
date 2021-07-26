import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';
import GitHub from '@material-ui/icons/GitHub';


const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: "grey"
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="© 2021 Dulles Computer Science"/>
      <BottomNavigationAction label="dullecomputerscience@gmail.com"/>
      <BottomNavigationAction icon={<Instagram />} />
      <BottomNavigationAction icon={<Twitter />} />
      <BottomNavigationAction icon={<Facebook />} />
      <BottomNavigationAction icon={<GitHub />} />

    </BottomNavigation>
  );
}

