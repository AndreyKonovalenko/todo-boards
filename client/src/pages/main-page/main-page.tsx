import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import api from '../../utils/todo-boards-api';
import { Box, CardActions, Card, Container, Divider, Typography, Button, Popper, Fade } from '@mui/material';
import { Person } from '@mui/icons-material';
import BoardCard from '../../components/main-page-components/board-card/board-card';
import {v4 as uuidv4} from 'uuid';
import { TBoard } from '../../services/boards/board-store';

// import { theme } from '../../styles/theme';

const useBoards = () => {
  return useQuery({
    queryKey: ['boards'],
    queryFn: api.boards.fetchBoards
  })
}

const MainPage = () => {
	const { data } = useBoards()
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const hadndleAddBoardClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previeousOpen) =>!previeousOpen );
  }

   
  const boards = data ? data.map((element: TBoard) => <BoardCard title={element.title} id={element._id} key={uuidv4()}/>): [] 

  const AddBoardPopper =  (
    <Popper     
        sx={{ zIndex: 1200}}
        open={open}
        anchorEl={anchorEl}
        placement={'right-end'}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
  </Popper>)

const AddBoradCard = (
  <>
  {AddBoardPopper}
  <Card sx={{minWidth: 180, minHeight:100}}>
    <Button  sx={{minHeight: 'inherit'}} fullWidth={true} onClick={hadndleAddBoardClick}> Create new board </Button>
  </Card>
  </>)

	return (
    <Box sx={{margin: 10}}>
      <Stack direction='row' spacing={2}>
        <Person fontSize="large" sx={(theme)=>({
          color: theme.palette.text.secondary
        })}/>
        <Typography variant='h6'sx={(theme)=>({
          color: theme.palette.text.secondary})}> Your boards</Typography>
      </Stack>
      <Divider/>
		  <Stack
        mt={6}
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 1, md: 4 }}
        justifyContent='left' flexWrap="wrap" useFlexGap>
        {boards}
        {AddBoradCard}
      </Stack>          
    </Box>
	);
};
export default MainPage;
