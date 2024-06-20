import {
	Box,
	Paper,
	Typography,
	Stack,
	useTheme,
	Button,
	IconButton,
	styled,
	Divider,
	Toolbar,
} from '@mui/material';
import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper';
import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Drawer from '@mui/material/Drawer';
import { useParams } from 'react-router-dom';
import BoardList from '../../components/boards-page-components/board-list/board-list';
import { HEADER } from '../../layout/config-layout';

const drawerWidth = 240;

const Content = styled('div', {
	shouldForwardProp: (prop) => prop !== 'open',
})<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
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
	}),
}));

interface PaperProps extends MuiPaperProps {
	open?: boolean;
}
const ContentPaperBar = styled(MuiPaper, {
	shouldForwardProp: (prop) => prop !== 'open',
})<PaperProps>(({ theme, open }) => ({
	width: '100%',
	position: 'absolute',
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(1),
	justifyContent: 'flex-start',
	...theme.mixins.toolbar,
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
		<Paper sx={{ width: spacing(34), flexShrink: 0, height: spacing(4) }}>
			<Button fullWidth={true} onClick={() => {}}>
				Add new list
			</Button>
		</Paper>
	);

	return (
		<Box
			sx={{
				display: 'flex',
				height: '100%',
				flexDirection: 'column',
			}}>
			<ContentPaperBar open={open}>
				<Toolbar>
					<Typography variant='h6' component='div' noWrap sx={{ flexGrow: 1 }}>
						{name}
					</Typography>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						sx={{ ...(open && { display: 'none' }) }}>
						<MoreHorizIcon fontSize='medium' />
					</IconButton>
				</Toolbar>
			</ContentPaperBar>
			<Content open={open} sx={{ mt: `${HEADER.H_DESKTOP}px` }}>
				<Stack
					direction='row'
					spacing={2}
					sx={{ p: 2, height: '100%', overflowX: 'auto' }}>
					<BoardList title='to Do' />
					<BoardList title='in progress' />
					<BoardList title='to Do' />
					<BoardList title='in progress' />
					<BoardList title='to Do' />
					<BoardList title='in progress' />
					<BoardList title='to Do' />
					<BoardList title='in progress last' />
					{AddList}
				</Stack>
			</Content>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						marginTop: '64px',
					},
				}}
				variant='persistent'
				anchor='right'
				open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						<ChevronRightIcon />
					</IconButton>
				</DrawerHeader>
				<Divider />
			</Drawer>
		</Box>
	);
};

export default BoardPage;
