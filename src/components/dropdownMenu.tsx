import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

interface DropdownMenuEl {
  onSubmit: () => void;
}

const DropdownMenuEl = (props: DropdownMenuEl) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertOutlinedIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={props.onSubmit}>Like</DropdownMenuItem>
        {/* <DropdownMenuItem>Favorites</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuEl;
