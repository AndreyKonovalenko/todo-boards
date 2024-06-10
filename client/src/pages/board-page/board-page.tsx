import {
	Box,
	Paper,
	Typography,
	Stack,
	useTheme,
	Button,
	Card,
	IconButton,
	styled,
} from '@mui/material';
import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper';
import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Drawer from '@mui/material/Drawer';
import { useParams } from 'react-router-dom';
import BoardList from '../../components/boards-page-components/board-list/board-list';

const drawerWidth = 240;

const Content = styled('div', {
	shouldForwardProp: (prop) => prop !== 'open',
})<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginRight: -drawerWidth,
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: 0,
	}),
}));

interface PaperProps extends MuiPaperProps {
	open?: boolean;
}
const ContenPaperBar = styled('div', {
	shouldForwardProp: (prop) => prop !== 'open',
})<PaperProps>(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: drawerWidth,
	}),
}));

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

	const AddList = (
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
				display: 'flex',
				position: 'relative',
			}}>
			<Content open={open}>
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
					{AddList}
				</Stack>
			</Content>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						position: 'absolute',
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
