import useAuth from "../../../../Hooks/useAuth";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
const Userhome = () => {
  const { user } = useAuth();
  const theme = useTheme();

  return (
    <div className="mt-10 border-2 border-gray-300 min-h-screen">
      <div className="flex items-center  rounded-b-xl bg-[#6EACDA] h-14 justify-between"></div>
      <h1 className="text-3xl mt-5 flex items-center justify-center">
        <span className="mr-4">Hi, Wellcome </span>
        {user?.displayName ? user?.displayName : "Back"}
      </h1>
      <div className="flex justify-center items-center mt-10">
        <img src={user?.photoURL} alt="" />
      </div>
    </div>
  );
};

export default Userhome;
