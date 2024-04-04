import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserStore } from '../../services/user/user-store';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { TO_BOARDS } from '../../utils/route-constants';
import api from '../../utils/todo-boards-api';

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

	return (
		<Stack
			mt={6}
			direction={{ xs: 'column', sm: 'row' }}
			spacing={{ xs: 1, sm: 2, md: 4 }}
			justifyContent='center'>
      <Link to={TO_BOARDS}>TO BOARDS</Link>
			<Item>Item 1</Item>
			<Item>Item 2</Item>
			<Item>Item 3</Item>
		</Stack>
	);
};
export default MainPage;
