import Image from "next/image";
import Link from "next/link";

const ImageCard = () => {
  return (
    <div className="border border-blue-950 rounded-lg w-96 p-2">
      <div className="w-full h-80 relative">
        <Link href={`/${""}`}>
          <Image
            src={"/images/login.jpg"}
            layout="fill"
            objectFit="cover"
            alt="card-image"
            className="rounded-lg"
          />
        </Link>
      </div>
      <div className="p-2 pt-4 flex flex-col gap-2">
        <p className="text-lg">
          2016 Summer Series - Mark Kasevich: Quantum Mechanics at Macroscopic
          Scales
        </p>
        <div className="flex gap-2">
          <AlbumButton name={"Summer Series"} />
          <AlbumButton name={"Summer Series"} />
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
      href={`/album/${name.replace(/ /g, "-")}`}
      target="_blank"
      className="border border-black rounded-full w-fit py-1 px-2"
    >
      <p className="text-xs">{name}</p>
    </Link>
  );
};

//     "album": [
//         "Summer Series"
//     ],
//     "description": "The underpinning of the universe is quantum mechanics. It can be used to explain the observed particle and wave nature of atoms. Atom interferometry uses the wave characteristics of atoms to investigate fundamental physics and advance our understanding of the macroscopic world. NASA is working with Dr. Mark Kasevich to apply this technology to advance astrophysics and improve navigation. In his seminar, Kasevich will delve into the world of atom interferometry, gravitational waves and quantum sensors.",
//     "title": "2016 Summer Series - Mark Kasevich: Quantum Mechanics at Macroscopic Scales",
//     "photographer": "NASA Ames Video Group",
//     "location": "NASA Ames Research Center",
//     "nasa_id": "ARC-20160609-AAV2844-SummerSeries-02-MarkKasevich-Youtube",
//     "media_type": "video",
//     "keywords": [
//         "nasa ames",
//         "nasa in silicon valley",
//         "ames office of the chief scientist",
//         "ames ocs",
//         "2016 summer series",
//         "quantum mechanics",
//         "interferometry",
//         "physics",
//         "quantum sensors",
//         "atomic nature",
//         "atoms",
//         "fundamental physics",
//         "astrophysics"
//     ],
//     "date_created": "2016-06-09T00:00:00Z",
//     "description_508": "Lecture by Dr. Mark Kasevich discussing atom interferometry, gravitational wave and quantum sensors",
//     "center": "ARC"
