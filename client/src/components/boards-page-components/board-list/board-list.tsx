import { Box, Button, Paper, Typography, useTheme, List, ListItem } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import CardComponent from '../card-component/card-component';
const BoardList = (props: { title: string }) => {
	const { spacing } = useTheme();
	const { title } = props;
  const cardsMoch: any[] = [1,3,3,4];
  const cardsList = cardsMoch.length > 0 ? <List sx={{maxHeight: '40%', overflow: 'auto'}}>{cardsMoch.map(element => <ListItem key={uuidv4()}> <CardComponent /></ListItem>)}</List>: null;

	return (
		<Box sx={{flexShrink: 0, width: spacing(34) }}>
        <Typography variant="h6" p={1}>{title}</Typography>
          {cardsList}
        <Button>
        + Add a card
        </Button>
		</Box>
	);
};

export default BoardList;
