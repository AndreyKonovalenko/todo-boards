import { Box, Container, Paper, Typography, Stack , useTheme} from "@mui/material";
import { useParams } from "react-router-dom";
import BoardColumn from "../../components/boards-page-components/board-column/board-column";

const BoardPage= (): JSX.Element => {
  const {name} = useParams()
  const {spacing} = useTheme();
 
    return (

      <Box sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <Paper sx={{p:2}} >
         <Typography variant="h6">
            {name}
          </Typography> 
        </Paper>
          <Stack direction='row'spacing={2} sx={{p:2}}>
            <BoardColumn title="to Do"/>
            <Paper elevation={3} sx={{height: spacing(34), width: spacing(34), }} >
            </Paper>
          </Stack>
      </Box>          
    );
  };
  
  export default BoardPage;