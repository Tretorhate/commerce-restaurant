import {
  Container,
  Filters,
  ProductsGroupList,
  TopBar,
} from "@/components/shared";
import { Title } from "@/components/shared";
export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Donuts" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список Товаров  */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={"Donuts"}
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Chocalate Donut",
                    imageUrl: "/productslist/chocholate-donut-no-bg.png",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Chocalate Donut",
                    imageUrl: "/productslist/chocholate-donut-no-bg.png",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Chocalate Donut",
                    imageUrl: "/productslist/chocholate-donut-no-bg.png",
                    price: 550,
                    items: [{ price: 550 }],
                  },

                  {
                    id: 4,
                    name: "Chocalate Donut",
                    imageUrl: "/productslist/chocholate-donut-no-bg.png",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Chocalate Donut",
                    imageUrl: "/productslist/chocholate-donut-no-bg.png",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
              <ProductsGroupList
                title={"Cakes"}
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Chocalate Donut",
                    imageUrl: "/productslist/chocholate-donut-no-bg.png",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Chocalate Donut",
                    imageUrl: "/productslist/chocholate-donut-no-bg.png",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Chocalate Donut",
                    imageUrl: "/productslist/chocholate-donut-no-bg.png",
                    price: 550,
                    items: [{ price: 550 }],
                  },

                  {
                    id: 4,
                    name: "Chocalate Donut",
                    imageUrl: "/productslist/chocholate-donut-no-bg.png",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Chocalate Donut",
                    imageUrl: "/productslist/chocholate-donut-no-bg.png",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
