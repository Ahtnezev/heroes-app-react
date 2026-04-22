import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControl } from "./ui/SearchControl";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de héroes"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />

      <CustomBreadcrumbs currentPage="Buscador de heroes"
         // breadcrumbs={
         //    [
         //       { label: 'Home', to: '/' },
         //       { label: 'Home1', to: '/' },
         //       { label: 'Home2', to: '/' },
         //    ]
         // }
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControl />
    </>
  )
}

export default SearchPage;
