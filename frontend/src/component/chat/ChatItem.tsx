import { Box } from "@mui/material";
import { useAuth } from "../../context/AuthContext";


const ChatItem = ({
    content,
    role,
   }:{
    content:string;
    role:"user"|"assistant";
   }) => {
    const auth=useAuth();
  return role == "assistant"?(
    <Box 
      sx={{
        display:"flex",
        p:2,
        bgcolor:"#004d5612",
        gap:2,
        borderRadius:2,
        my:1,
      }}
      ></Box>
  ):(<Box
      ></Box>  
    )
}

export default ChatItem;