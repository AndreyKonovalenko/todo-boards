import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { TO_BOARDS } from '../../utils/route-constants';
import api from '../../utils/todo-boards-api';
import { Box, CardActions, Card, Container, Divider, Typography, Button } from '@mui/material';
import { Person } from '@mui/icons-material';
import BoardCard from '../../components/main-page-components/board-card/board-card';
import {v4 as uuidv4} from 'uuid';
import { TBoard } from '../../services/boards/board-store';

// import { theme } from '../../styles/theme';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));


const useBoards = () => {
  return useQuery({
    queryKey: ['boards'],
    queryFn: api.boards.fetchBoards
  })
}


const MainPage = () => {
	const { data } = useBoards()
  const AddBoradCard = (
    <Card sx={{minWidth: 180, minHeight:100}}>
      <Button  sx={{minHeight: 'inherit'}} fullWidth={true} onClick={()=> console.log('hew board')}> Create new board </Button>
    </Card> 
)
const boards = data ? data.map((element: TBoard) => <BoardCard name={element.title} id={element._id} key={uuidv4()}/>): [] 

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
