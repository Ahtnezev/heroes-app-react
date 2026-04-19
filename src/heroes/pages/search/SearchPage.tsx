import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControl } from "./ui/SearchControl";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de héroes"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControl />
    </>
  )
}

export default SearchPage;
