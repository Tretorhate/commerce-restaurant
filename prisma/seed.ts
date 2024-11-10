import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { categories, _ingredients, products } from "./constants";
import { Prisma } from "@prisma/client";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  cargoType,
  size,
}: {
  productId: number;
  cargoType?: 1 | 2;
  size?: 6 | 8 | 10;
}) => {
  return {
    productId,
    price: randomDecimalNumber(190, 600),
    cargoType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Admin",
        email: "admin@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.product.createMany({
    data: products,
  });

  await prisma.ingredient.createMany({
    data: _ingredients,
  });

  const cargotruck1 = await prisma.product.create({
    data: {
      name: "Standard Truck Freight",
      imageUrl: "/imageProducts/Standart_Truck.svg", // standard truck
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });
  const cargotruck2 = await prisma.product.create({
    data: {
      name: "Express Truck Delivery",
      imageUrl: "/imageProducts/Express_Truck_Delievery.svg", // express truck
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });
  const cargotruck3 = await prisma.product.create({
    data: {
      name: "Heavy Haul Trucking",
      imageUrl: "/imageProducts/Heavy_Haul_Trucking.svg", // heavy haul truck
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 15),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // chocalate
      generateProductItem({ productId: cargotruck1.id, cargoType: 1, size: 6 }),
      generateProductItem({ productId: cargotruck1.id, cargoType: 2, size: 8 }),
      generateProductItem({
        productId: cargotruck1.id,
        cargoType: 2,
        size: 10,
      }),

      // glazed cargo
      generateProductItem({ productId: cargotruck2.id, cargoType: 1, size: 6 }),
      generateProductItem({ productId: cargotruck2.id, cargoType: 1, size: 8 }),
      generateProductItem({
        productId: cargotruck2.id,
        cargoType: 1,
        size: 10,
      }),
      generateProductItem({ productId: cargotruck2.id, cargoType: 2, size: 6 }),
      generateProductItem({ productId: cargotruck2.id, cargoType: 2, size: 8 }),
      generateProductItem({
        productId: cargotruck2.id,
        cargoType: 2,
        size: 10,
      }),

      // strawberry cargo
      generateProductItem({ productId: cargotruck3.id, cargoType: 1, size: 6 }),
      generateProductItem({ productId: cargotruck3.id, cargoType: 2, size: 8 }),
      generateProductItem({
        productId: cargotruck3.id,
        cargoType: 2,
        size: 10,
      }),

      // Остальные продукты
      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "1111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "2222",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      },
    },
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
