import ImageCard from "@/components/cards/imageCard";
import SearchInput from "@/components/form/searchInput";

const SearchVideo = () => {
  return (
    <div className="">
      <SearchInput placeholder="Search Videos... " />
      <div className="w-full mt-20 flex gap-6">
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
};

export default SearchVideo;
