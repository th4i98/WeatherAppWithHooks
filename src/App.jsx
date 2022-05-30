import * as React from 'react';
import { Container } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import NavBar from "./components/navbar/navbar";
import Sidebar from './components/Sidebar/Sidebar';
import { blue } from "@mui/material/colors";

function App() {
    const primary = blue[100];
    const secondary = blue[300];
    const [weatherDetail, setWeatherDetail] = useState({})

    const sendDataToApp = (data) => {
       console.log(data);
        setWeatherDetail(data);  
    }

  return (
       
      <div className="App">
          <Container fixed>
              <Box sx={{ display: "flex", m: 4 }}>
                  {/* Side Bar */}
                  <Box
                      sx={{
                          width: 1 / 4,
                          height: "90vh",
                          backgroundColor: primary,
                      }}
                  >
                      <Sidebar sendDataToApp={sendDataToApp}></Sidebar>
                  </Box>
                  {/* Nav bar */}
                  <Box
                      sx={{
                          width: 3 / 4,
                          height: "90vh",
                          backgroundColor: secondary,
                      }}
                  >
                      <Box sx={{ width: "100%", typography: "body1" }}>
                          <NavBar sendDataToNav={weatherDetail}></NavBar>
                      </Box>
                  </Box>
              </Box>
          </Container>
      </div>
  );
}

export default App;
