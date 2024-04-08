import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const BoardPage= (): JSX.Element => {
  const {name} = useParams()
 
    return (
        <Box sx={{padding: 4}}>
          Boards Page {name}
          
        </Box>
    );
  };
  
  export default BoardPage;