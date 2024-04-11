import { Paper, useTheme } from "@mui/material"
const BoardColumn = (props: {title: string}) => {
  const {spacing} = useTheme();
  const {title} = props;
  return(
  <Paper elevation={3} sx={{height: spacing(34), width: spacing(34), }} >
    {title}
  </Paper>)
}

export default BoardColumn