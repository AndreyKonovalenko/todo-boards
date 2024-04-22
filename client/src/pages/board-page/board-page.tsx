import { Box, Paper, Typography, Stack , useTheme, Button, Card} from "@mui/material";
import { useParams } from "react-router-dom";
import BoardList from "../../components/boards-page-components/board-list/board-list";

  const BoardPage= (): JSX.Element => {
  const {name} = useParams()
  const {spacing} = useTheme();

  const AddColumn = (
    <Card sx={{width: spacing(34) , height:spacing(4)}}>
      <Button  fullWidth={true} onClick={()=> console.log('hew column')}> Add new list</Button>
    </Card> 
  )

    return (
      <Box sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <Paper sx={{p:2}} >
         <Typography variant="h6">
            {name}
          </Typography> 
        </Paper>
          <Stack direction='row' spacing={2} sx={{p:2}}>
            <BoardList title="to Do"/>
            <BoardList title='in progress'/>
            {AddColumn}
          </Stack>
      </Box>          
    );
  };
  
  export default BoardPage;