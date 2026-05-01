import { useMemo } from "react"
import { useSearchParams } from "react-router"
import { useQuery } from "@tanstack/react-query"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"

import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { SearchControl } from "../search/ui/SearchControl"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"


export const HomePage = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams);
  // console.log(searchParams.get('offsets'));
  // setSearchParams("?tab=all");

  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

  const { data: heroesResponse } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(+page, +limit),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // console.log({ heroesResponse });

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Superhero Universe"
          description="Discover, explore, and manage your favorite superheroes and villains"
        />

        <CustomBreadcrumbs currentPage="Super heroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Controls */}
        <SearchControl />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all"
              onClick={() => setSearchParams((prev) =>{
                prev.set('tab', 'all');
                return prev;
              })}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2"
              onClick={() => setSearchParams((prev) =>{
                prev.set('tab', 'favorites');
                return prev;
              })}>
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes"
              onClick={() => setSearchParams((prev) =>{
                prev.set('tab', 'heroes');
                return prev;
              })}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger value="villains"
              onClick={() => setSearchParams((prev) =>{
                prev.set('tab', 'villains');
                return prev;
              })}>
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
            <HeroGrid heroes={ heroesResponse?.heroes ?? [] } />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostrar todos los favoritos */}
            <HeroGrid heroes={[]} />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar todos los heroes */}
            <HeroGrid heroes={[]} />
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar todos los villanos */}
            <HeroGrid heroes={[]} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPage={8} />
      </>
    </>
  )
}