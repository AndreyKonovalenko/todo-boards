import {
	Box,
	Button,
	Typography,
	useTheme,
	Stack,
	List,
	ListItem,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import CardComponent from '../card-component/card-component';
const BoardList = (props: { title: string }) => {
	const { spacing, palette } = useTheme();
	const { title } = props;
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
          scrollbarWidth: 'thin'
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
          flexShrink:0,
				}}>
				<Box sx={{flexShrink: 0}}>
          <Typography variant='h6' p={1}>
            {title}
          </Typography>
        </Box>
				{cardsList}
        <Box sx={{flexShrink: 0}}>
          <Button>+ Add a card</Button>
        </Box>
			</Stack>
		</Box>
	);
};

export default BoardList;
