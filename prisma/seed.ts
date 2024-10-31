import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { categories, ingredients, products } from "./constants";
import { Prisma } from "@prisma/client";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  donutType,
  size,
}: {
  productId: number;
  donutType?: 1 | 2;
  size?: 6 | 8 | 10;
}) => {
  return {
    productId,
    price: randomDecimalNumber(190, 600),
    donutType,
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
    data: ingredients,
  });

  const donut1 = await prisma.product.create({
    data: {
      name: "Chochalate Donut",
      imageUrl:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=292",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });
  const donut2 = await prisma.product.create({
    data: {
      name: "Classic Glazed Donut",
      imageUrl:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=292",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });
  const donut3 = await prisma.product.create({
    data: {
      name: "Strawberry Donut",
      imageUrl:
        "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // chocalate
      generateProductItem({ productId: donut1.id, donutType: 1, size: 6 }),
      generateProductItem({ productId: donut1.id, donutType: 2, size: 8 }),
      generateProductItem({ productId: donut1.id, donutType: 2, size: 10 }),

      // glazed donut
      generateProductItem({ productId: donut2.id, donutType: 1, size: 6 }),
      generateProductItem({ productId: donut2.id, donutType: 1, size: 8 }),
      generateProductItem({ productId: donut2.id, donutType: 1, size: 10 }),
      generateProductItem({ productId: donut2.id, donutType: 2, size: 6 }),
      generateProductItem({ productId: donut2.id, donutType: 2, size: 8 }),
      generateProductItem({ productId: donut2.id, donutType: 2, size: 10 }),

      // strawberry donut
      generateProductItem({ productId: donut3.id, donutType: 1, size: 6 }),
      generateProductItem({ productId: donut3.id, donutType: 2, size: 8 }),
      generateProductItem({ productId: donut3.id, donutType: 2, size: 10 }),

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
