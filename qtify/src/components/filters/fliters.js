import styles from './filters.module.css';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



export default function Filters({filters,selectedFilter,setSelectedFilter}) {
 

  const handleChange = (event, newValue) => {
    setSelectedFilter(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className={styles.tab}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selectedFilter} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{style:{background:"var(--color-primary)",color: "var(--color-white)",fontWeight: "bold",
    textTransform: "none"}}}>
          <Tab className={styles.tab} label="All" {...a11yProps(0)} />
          <Tab className={styles.tab}label="Rock" {...a11yProps(1)} />
          <Tab className={styles.tab} label="Pop" {...a11yProps(2)} />
          <Tab className={styles.tab} label="Jazz" {...a11yProps(3)} />
          
        </Tabs>
      </Box>
      
    </div>
  );
}