import {
	Box,
	Button,
	Typography,
	useTheme,
	Stack,
	List,
	ListItem,
	TextField,
	Input,
} from '@mui/material';

import { v4 as uuidv4 } from 'uuid';

import CardComponent from '../card-component/card-component';
import { useState } from 'react';
const BoardList = (props: { title: string }) => {
	const { title } = props;
	const [listTitle, setListTitle] = useState(title);
	const { spacing, palette } = useTheme();
	const cardsMoch: any[] = [1, 3, 4, 4, 4, 4, 4];

	const cardsList =
		cardsMoch.length > 0 ? (
			<List
				sx={{
					display: 'flex',
					overflowX: 'auto',
					height: '100%',
					flexDirection: 'column',
					flex: '1 1 auto',
					scrollbarWidth: 'thin',
				}}>
				{cardsMoch.map((element) => (
					<ListItem key={uuidv4()}>
						<CardComponent />
					</ListItem>
				))}
			</List>
		) : null;

	return (
		<Box sx={{ width: spacing(34), height: '100%' }}>
			<Stack
				spacing={2}
				sx={{
					width: spacing(34),
					backgroundColor: palette.ochre.main,
					borderRadius: spacing(2),
					maxHeight: '100%',
					position: 'relative',
					flexShrink: 0,
				}}>
				<Box sx={{ flexShrink: 0 }}>
					<TextField
						sx={{ p: spacing(1), fontWeight: '900' }}
						fullWidth
						id='outlined-controlled'
						value={listTitle}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							setListTitle(event.target.value);
						}}
						variant='outlined'
					/>
				</Box>
				{cardsList}
				<Box sx={{ flexShrink: 0 }}>
					<Button>+ Add a card</Button>
				</Box>
			</Stack>
		</Box>
	);
};

export default BoardList;
