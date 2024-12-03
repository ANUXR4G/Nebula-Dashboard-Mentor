import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Badge from '@mui/material/Badge';
import Popover from '@mui/material/Popover';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import logo from "../../../assets/nebula.png";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);  // State for Popover anchor element
  const [activeTab, setActiveTab] = useState(0);  // State to manage active tab

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);  // Set anchor element to the clicked notification icon
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);  // Close the Popover
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const drawer = (
    <div className='bg-[#4c5d34] h-screen'>
      <Toolbar className='bg-[#4c5d34]'/>
      <img src={logo} alt="Logo" />
      <Divider className='bg-[#4c5d34]'/>
      <List className='bg-[#4c5d34]'>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
              <HomeIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" primaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard/start-up">
            <ListItemIcon>
              <GroupIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Start-Up" primaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard/problem-statement">
            <ListItemIcon>
              <AssignmentIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Problem Statement" primaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard/calender">
            <ListItemIcon>
              <CalendarTodayIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Calendar" primaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard/add-session">
            <ListItemIcon>
              <EditCalendarIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Add Session" primaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List className='bg-[#4c5d34]'>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard/profile">
            <ListItemIcon>
              <AccountCircleIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Profile" primaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <ExitToAppIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Log Out" primaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className='bg-[#4c5d34]'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" onClick={handlePopoverOpen}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <AccountBalanceWalletIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Popover for Notifications */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box sx={{ p: 2, width: 300}} className='bg-[#4b5c34]'>
          <Typography variant="h6" component="h2" className='bg-[#a5a98f] text-[#4b5c34] p-2 rounded-lg'>
            Notifications
          </Typography>
          <Tabs value={activeTab} onChange={handleTabChange} aria-label="notification tabs" className='bg-[#a5a98f] p-2 rounded-lg mt-2'>
            <Tab label="General" />
            <Tab label="Personal" />
          </Tabs>
          <Box>
            {activeTab === 0 && (
              <Typography id="general-tab-content" sx={{ mt: 2 }} className='bg-[#a5a98f] text-white p-2 rounded-lg'>
                This is the General notifications section.
              </Typography>
            )}
            {activeTab === 1 && (
              <Typography id="personal-tab-content" sx={{ mt: 2 }} className='bg-[#a5a98f] text-white p-2 rounded-lg'>
                This is the Personal notifications section.
              </Typography>
            )}
          </Box>
        </Box>
      </Popover>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
