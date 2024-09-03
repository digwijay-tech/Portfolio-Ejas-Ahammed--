import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AboutTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            '& .MuiTabs-flexContainer': {
              flexWrap: 'wrap', // Allows tabs to wrap if there is not enough space
            },
          }}
          TabIndicatorProps={{
            sx: {
              bgcolor: '#ffeb3b', // Color of the indicator line
            },
          }}
        >
          <Tab
            label="Education"
            {...a11yProps(0)}
            sx={{
              '&.Mui-selected': {
                color: '#fff',
               
              },
              '&': {
                color: '#ffeb3b',
              },
              '&:hover': {
                color: '#fff',
              },
              '@media (max-width: 600px)': {
                fontSize: '0.775rem', // Smaller font size on small screens
              },
            }}
          />
          <Tab
            label="Tech"
            {...a11yProps(1)}
            sx={{
              '&.Mui-selected': {
                color: '#fff',
                
              },
              '&': {
                color: '#ffeb3b',
              },
              '&:hover': {
                color: '#fff',
              },
              '@media (max-width: 600px)': {
                fontSize: '0.775rem',
              },
            }}
          />
          <Tab
            label="Item Three"
            {...a11yProps(2)}
            sx={{
              '&.Mui-selected': {
                color: '#fff',
                
              },
              '&': {
                color: '#ffeb3b',
              },
              '&:hover': {
                color: '#fff',
              },
              '@media (max-width: 600px)': {
                fontSize: '0.775rem',
              },
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <ul style={{ listStyleType: 'none' }}>
          <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.25rem', 
              color: '#ffeb3b', 
            }}>
              &rarr;
            </span>
            Apple
          </li>
          <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.25rem', 
              color: '#ffeb3b', 
            }}>
              &rarr;
            </span>
            Apple
          </li>
          <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.25rem', 
              color: '#ffeb3b', 
            }}>
              &rarr;
            </span>
            Apple
          </li>
          </ul>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
         <ul style={{ listStyleType: 'none' }}>
          <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.25rem', 
              color: '#ffeb3b', 
            }}>
              &rarr;
            </span>
            Apple
          </li>
          <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.25rem', 
              color: '#ffeb3b', 
            }}>
              &rarr;
            </span>
            StrawBerry
          </li>
          <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.25rem', 
              color: '#ffeb3b', 
            }}>
              &rarr;
            </span>
            Apple
          </li>
          </ul>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
         <ul style={{ listStyleType: 'none' }}>
          <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.25rem', 
              color: '#ffeb3b', 
            }}>
              &rarr;
            </span>
            Apple
          </li>
          <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.25rem', 
              color: '#ffeb3b', 
            }}>
              &rarr;
            </span>
            Apple
          </li>
          <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.25rem', 
              color: '#ffeb3b', 
            }}>
              &rarr;
            </span>
            lemon
          </li>
          </ul>
      </CustomTabPanel>
    </Box>
  );
}
