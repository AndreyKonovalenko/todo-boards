import { Card, CardContent, Typography, CardActionArea } from "@mui/material";

type TBoradCardProps= {
  name: string,
  id: string
}

const cardActionAreaStyles = {
  display: "flex", 
  flexDirection:'column',
  justifyContent: 'flex-start',
  minHeight: 'inherit',
  alignItems: 'flex-start'
};

const BoardCard = (props:TBoradCardProps) => {
  const {name, id} = props;
  return (
    <Card sx={{minHeight: 100, minWidth: 200}} onClick={()=> console.log(id)}> 
        <CardActionArea sx={cardActionAreaStyles}>     
            <CardContent>
              <Typography variant='h6'sx={(theme)=>({
                    color: theme.palette.text.primary})}>{name}</Typography>
            </CardContent> 
      </CardActionArea>
    </Card>

  )
}

export default BoardCard;