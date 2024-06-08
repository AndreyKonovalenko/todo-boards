import {
	Box,
	Paper,
	Typography,
	Stack,
	useTheme,
	Button,
	Card,
	IconButton,
} from '@mui/material';
import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Drawer from '@mui/material/Drawer';
import { useParams } from 'react-router-dom';
import BoardList from '../../components/boards-page-components/board-list/board-list';

const BoardPage = (): JSX.Element => {
	const [open, setOpen] = useState(false);
	const { name } = useParams();
	const { spacing } = useTheme();

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	const AddColumn = (
		<Card sx={{ width: spacing(34), height: spacing(4) }}>
			<Button fullWidth={true} onClick={() => console.log('hew column')}>
				{' '}
				Add new list
			</Button>
		</Card>
	);
	return (
		<Box
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
			}}>
			<Paper sx={{ p: 2 }}>
				<Stack
					direction='row'
					spacing={4}
					sx={{ justifyContent: 'space-between' }}>
					<Typography variant='h6'>{name}</Typography>
					<IconButton
						size='medium'
						aria-label='account of current user'
						aria-controls='menu-appbar'
						aria-haspopup='true'
						onClick={handleDrawerOpen}
						color='inherit'>
						<MoreHorizIcon fontSize='medium' />
					</IconButton>
				</Stack>
			</Paper>
			<Stack direction='row' spacing={2} sx={{ p: 2 }}>
				<BoardList title='to Do' />
				<BoardList title='in progress' />
				{AddColumn}
			</Stack>
			<Drawer
				sx={{
					width: '240px',
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: '240px',
						position: 'absolute',
						right: 0,
						top: 0,
					},
				}}
				variant='persistent'
				anchor='right'
				open={open}>
				Drawer
			</Drawer>
		</Box>
	);
};

export default BoardPage;
