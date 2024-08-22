import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";

const Designs = () => {
  return (
    <div className="" id="design">
      <div className="flex justify-center">
      <h2 className="font-bold text-3xl">Services</h2>
      </div>
      <div className="flex  justify-center">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 4,
              width: 350,
              height: 250,
            },
          }}
          
        >
          <Paper elevation={3} > <h2>Poster Design</h2></Paper>
          <Paper elevation={3} ><h2>Logo Design</h2></Paper>
          <Paper elevation={3} ><h2>Print Design</h2></Paper>
        </Box>
      </div>
    </div>
  );
};

export default Designs;
