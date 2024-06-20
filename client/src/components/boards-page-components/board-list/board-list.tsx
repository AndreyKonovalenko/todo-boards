import { Paper, useTheme } from "@mui/material"
const BoardList = (props: {title: string}) => {
  const {spacing} = useTheme();
  const {title} = props;
  return(
  <Paper elevation={3} sx={{height: '100%',flexShrink: 0, width: spacing(34), }} >
    {title}
  </Paper>)
}

export default BoardList;