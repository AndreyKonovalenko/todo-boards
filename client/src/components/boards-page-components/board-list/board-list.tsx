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
  styled
} from '@mui/material';

import { v4 as uuidv4 } from 'uuid';

import CardComponent from '../card-component/card-component';
import { useState } from 'react';

const TextAreaStyled = styled('textarea')(({theme})=>({
  backgroundColor: theme.palette.background.default,
  borderRadius: '3px',
  borderStyle: 'solid',
  borderWidth: '2px',
  fontSize: '30px'
}))


// export const STextarea = styled.textarea`
//   background-color: ${({ theme }) => theme.colors.surface};
//   border-color: ${({ theme }) => theme.colors.primary.light};
//   border-radius: 3px;
//   border-style: solid;
//   border-width: 2px;
//   color: ${({ theme }) => theme.colors.text.onBackground};
//   font-size: 16px;
//   font-weight: 700;
//   margin-bottom: 10px;
//   margin: 10px 0;
//   max-width: 95%;
//   width: 95%;
//   resize: none;
//   padding: 2px;
//   overflow-y: hidden;
//   maxlength: 5;
//   &:hover {
//     opacity: 1;
//     border-color: ${({ theme }) => theme.colors.primary.main};
//   }
//   &:focus-visible {
//     outline: none;
//   }


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
					<TextAreaStyled
						id='outlined-controlled'
						value={listTitle}
						onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
							setListTitle(event.target.value);
						}}
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
