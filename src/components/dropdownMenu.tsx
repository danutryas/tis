import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const DropdownMenuEl = () => {
  return (
    <DropdownMenu className="outline-none ring-0">
      <DropdownMenuTrigger>
        <MoreVertOutlinedIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Like</DropdownMenuItem>
        <DropdownMenuItem>Favorites</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuEl;
