import {
  Container,
  Filters,
  ProductsGroupList,
  TopBar,
} from "@/shared/components/shared";
import { Title } from "@/shared/components/shared";
import { Suspense } from "react";
import { findCargos } from "@/shared/lib";
import { GetSearchParams } from "@/shared/lib/find-cargos";

export default async function Home({
  searchParams,
}: {
  searchParams: GetSearchParams;
}) {
  const categories = await findCargos(searchParams);

  return (
    <>
      <Container className="mt-10 pl-4 lg:pl-0">
        <Title text="Deliveries" size="lg" className="font-extrabold" />
      </Container>
      <TopBar
        categories={categories.filter(
          (category) => category.products.length > 0
        )}
      />
      <Container className="pb-14 mt-10 ">
        <div className="flex gap-[80px]  flex-col lg:flex-row">
          {/* Filtration */}
          <div className=" pl-12 lg:pl-0">
            <div className="w-[250px] ">
              <Suspense>
                <Filters />
              </Suspense>
            </div>
          </div>
          {/* List of Products  */}
          <div className="flex-1">
            <div className="flex flex-col p-4 md:p-0   gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
