import { Box, Container, Paper, Typography, Stack , useTheme} from "@mui/material";
import { useParams } from "react-router-dom";

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
        <Container sx={{pt:3}}>
          <Stack direction='row'spacing={2}>
            <Paper elevation={3} sx={{height: spacing(34), width: spacing(34), }} >
            </Paper>
            <Paper elevation={3} sx={{height: spacing(34), width: spacing(34), }} >
            </Paper>
          </Stack>
          
        </Container>
      </Box>          
    );
  };
  
  export default BoardPage;