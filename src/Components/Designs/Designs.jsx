import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";


const Designs = () => {
  return (
    <div className="pt-28 px-4 md:px-4 lg:px-0" id="design">
      <div className="flex justify-center pb-3">
        <h2 className="text-yellow-400 font-bold text-3xl">Services</h2>
      </div>
      <div className="flex justify-center pb-24 ">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: {
                xs: "100%", // Full width on extra small screens
                sm: 300, // Medium size on small screens
                md: 350, // Default size on medium screens
                lg: 390, // Default size on large screens
              },
              height: 230,
            },
          }}
        >
          <Link to="/postergallery">
            <Paper
              elevation={3}
              className="h-52 lg:h-48  p-4 flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg"
              sx={{
                backgroundColor: "#facc15",
                
              }}
            >
              <h2 className="text-xl font-extrabold text-gray  p-2 rounded">
                Poster Design <br /> <span className=" font-normal text-base lg:hidden "> Click to view</span>
              </h2>
            </Paper>
          </Link>
          <Link to="/logogallery">
            <Paper
              elevation={3}
              className="h-52 lg:h-48 p-4 flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg"
              sx={{
                
                backgroundColor: "#facc15",
              }}
            >
              <h2 className="text-xl font-extrabold text-gray p-2 rounded">
                Logo Design <br /> <span className=" font-normal text-base lg:hidden">Click to view</span>
              </h2>
            </Paper>
          </Link>
          <Link to="/printgallery">
            <Paper
              elevation={3}
              className="h-52 lg:h-48 p-4 flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg"
              sx={{
                backgroundColor: "#facc15",

              }}
            >
              <h2 className="text-xl font-extrabold text-grayp-2 rounded">
                Print Design <br /> <span className=" font-normal text-base lg:hidden">Click to view</span>
              </h2>
              
            </Paper>
          </Link>
        </Box>
      </div>
    </div>
  );
};

export default Designs;
