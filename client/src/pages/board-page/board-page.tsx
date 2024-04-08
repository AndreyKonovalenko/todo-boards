import { Box, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const BoardPage= (): JSX.Element => {
  const {name} = useParams()
 
    return (

      <Box sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <Paper sx={{p:2}} >
         <Typography variant="h6">
            {name}
          </Typography> 
        </Paper>
      </Box>          
    );
  };
  
  export default BoardPage;