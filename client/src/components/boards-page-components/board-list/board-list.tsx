import { Box, Button, Paper, Typography, useTheme, Stack, List, ListItem} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import CSS from 'csstype';

import CardComponent from '../card-component/card-component';
const BoardList = (props: { title: string }) => {
	const { spacing, palette } = useTheme();
	const { title } = props;
  const cardsMoch: any[] = [1,3,4];

  const listStyled: CSS.Properties = {
  display: 'flex',
  flexDirection: 'column',
  height: '400px',
  flex: '1 1 auto',
  overflow: 'auto',
  listStyle: 'none',
  scrollbarWidth: 'thin', 
  gap: '8px'
}


  const cardsList = cardsMoch.length > 0 ? <ul style={listStyled}>{cardsMoch.map(() => <li><CardComponent key={uuidv4()}/></li>)}</ul>: null;

	return (
		<Box sx={{flexShrink: 0, width: spacing(34), height: '100%'}}>
      <Box sx={{width: spacing(34), backgroundColor: palette.ochre.main, borderRadius: spacing(2), display: 'flex', flexDirection:"column" }}>
        <Typography variant="h6" p={1}>{title}</Typography>
         {cardsList} 
        <Button>
        + Add a card
        </Button>
      </Box>
		</Box>
	);
};

export default BoardList;
