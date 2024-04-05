import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { TO_BOARDS } from '../../utils/route-constants';
import api from '../../utils/todo-boards-api';
import { Box, CardActions, Card, Container, Divider, Typography, Button } from '@mui/material';
import { Person } from '@mui/icons-material';
import BoardCard from '../../components/board-card/board-card';
import {v4 as uuidv4} from 'uuid';

// import { theme } from '../../styles/theme';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const MainPage = () => {
	const { data } = useQuery({
		queryKey: ['groups'],
		queryFn: api.boards.fetchBoards,
	});

const mockBoards = [{name: 'may', id:"1"}, {name:'augast', id: '2'}, {name: 'march', id: '3'}];
const boards = mockBoards.map((elem) => (<BoardCard name={elem.name} id={elem.id}  key={uuidv4()}/>))

const AddBoradCard = (
    <Card sx={{minWidth: 180, minHeight:100}}>
      <Button  sx={{minHeight: 'inherit'}} fullWidth={true} onClick={()=> console.log('hew board')}> Create new board </Button>
    </Card> 
)


	return (
    <Container component='main' maxWidth='md'>
      <Stack direction='row' sx={{marginTop: 8}} spacing={2}>
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
    </Container>
	);
};
export default MainPage;
