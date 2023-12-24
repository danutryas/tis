import { DataCard } from "@/app/search/image/page";
import Image from "next/image";
import Link from "next/link";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DropdownMenuEl from "../dropdownMenu";

interface ImageCard {
  data?: DataCard;
}

const ImageCard = ({ data }: ImageCard) => {
  return (
    <div
      className="border border-blue-950 rounded-lg w-96 p-2 justify-self-center"
      onClick={() => console.log(data)}
    >
      <div className="w-full h-80 relative">
        <Link href={`/${""}`}>
          <Image
            src={
              data && data?.links.length > 0
                ? data?.links[0].href
                : "/images/login.jpg"
            }
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            alt="card-image"
            className="rounded-lg"
            width="0"
            height="0"
            sizes="100vw"
            priority
          />
        </Link>
      </div>
      <div className="p-2 pt-4 flex gap-2 justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-lg">{data?.data[0].title}</p>
          <div className="flex gap-2">
            {data && data?.data[0].album && data?.data[0].album.length > 0
              ? data?.data[0].album.map((albumName, index) => (
                  <AlbumButton name={albumName} key={index} />
                ))
              : null}
          </div>
        </div>
        <div className="w-4 justify-self-end">
          <DropdownMenuEl />
        </div>
      </div>
    </div>
  );
};
export default ImageCard;

interface AlbumButton {
  name: String;
}

const AlbumButton = ({ name }: AlbumButton) => {
  return (
    <Link
      // href={`/search/album/${name.replace(/ /g, "-")}`}
      href={`/search/album`}
      target="_blank"
      className="border border-black rounded-full w-fit py-1 px-2"
    >
      <p className="text-xs">{name}</p>
    </Link>
  );
};
