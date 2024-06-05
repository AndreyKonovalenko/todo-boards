import { Box, Paper, Typography, Stack , useTheme, Button, Card, IconButton} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useParams } from "react-router-dom";
import BoardList from "../../components/boards-page-components/board-list/board-list";

  const BoardPage= (): JSX.Element => {
  const {name} = useParams()
  const {spacing} = useTheme();
  
  const handleOpenMenu = ()=>{};

  const AddColumn = (
    <Card sx={{width: spacing(34) , height:spacing(4)}}>
      <Button  fullWidth={true} onClick={()=> console.log('hew column')}> Add new list</Button>
    </Card> 
  )
    return (
      <Box sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <Paper sx={{p:2}}  >
          <Stack direction="row" spacing={4} sx={{justifyContent: 'space-between'}}>
            <Typography variant="h6">
              {name}
            </Typography>
            <IconButton
                  size="medium"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenMenu}
                  color="inherit"
                >
                <MoreHorizIcon fontSize='medium'/>
              </IconButton> 
          </Stack>
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