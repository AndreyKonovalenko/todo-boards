import { useParams } from "react-router-dom";

const BoardPage= (): JSX.Element => {
  const {name} = useParams()
 
    return (
        <>
          Boards Page {name}
          
        </>
    );
  };
  
  export default BoardPage;