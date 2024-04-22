import { Card, CardContent, Typography, CardActionArea, Link } from "@mui/material";
import {Link as RouterLink} from 'react-router-dom';
import { TO_BOARDS } from "../../../utils/route-constants";

type TBoradCardProps= {
  title: string,
  id: string
}

const BoardCardStyled = {
  minHeight: 100,
  minWidth: 180
}

const cardActionAreaStyled = {
  display: "flex", 
  flexDirection:'column',
  justifyContent: 'flex-start',
  minHeight: 'inherit',
  alignItems: 'flex-start'
};

const BoardCard = (props:TBoradCardProps) => {
  const {title, id} = props;
  return (
  <Link component={RouterLink} variant="h6"  underline='none' to={`${TO_BOARDS}/${title}`} color="inherit" onClick={()=> console.info(id)}> 
    <Card sx={BoardCardStyled} onClick={()=> console.log(id)}> 
        <CardActionArea sx={cardActionAreaStyled}>     
            <CardContent>
              <Typography variant='h6'sx={(theme)=>({
                    color: theme.palette.text.primary})}>{title}</Typography>
            </CardContent> 
      </CardActionArea>
    </Card>
  </Link> 
  )
}

export default BoardCard;