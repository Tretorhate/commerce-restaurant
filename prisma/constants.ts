export const categories = [
  {
    name: "Donuts",
  },
  {
    name: "Cakes",
  },
  {
    name: "Muffins",
  },
  {
    name: "Coctails",
  },
  {
    name: "Cinnamon rolls",
  },
];

export const ingredients = [
  {
    name: "Extra Glaze",
    price: 29,
    imageUrl:
      "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?w=300&q=80",
  },
  {
    name: "Chocolate Drizzle",
    price: 39,
    imageUrl:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=300&q=80",
  },
  {
    name: "Rainbow Sprinkles",
    price: 29,
    imageUrl:
      "https://images.unsplash.com/photo-1583691487572-13d741c1f9b4?w=300&q=80",
  },
  {
    name: "Chocolate Chips",
    price: 39,
    imageUrl:
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300&q=80",
  },
  {
    name: "Fresh Banana Slices",
    price: 49,
    imageUrl:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=300&q=80",
  },
  {
    name: "Whipped Cream",
    price: 39,
    imageUrl:
      "https://images.unsplash.com/photo-1635340266170-730a6c6e3f54?w=300&q=80",
  },
  {
    name: "Crushed Oreos",
    price: 49,
    imageUrl:
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=300&q=80",
  },
  {
    name: "Caramel Sauce",
    price: 39,
    imageUrl:
      "https://images.unsplash.com/photo-1607644536940-6c300b5784c3?w=300&q=80",
  },
  {
    name: "Fresh Strawberry Slices",
    price: 49,
    imageUrl:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&q=80",
  },
  {
    name: "Cream Cheese Frosting",
    price: 49,
    imageUrl:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=300&q=80",
  },
  {
    name: "Crushed Nuts",
    price: 39,
    imageUrl:
      "https://images.unsplash.com/photo-1619730318619-37bb5afb5132?w=300&q=80",
  },
  {
    name: "Fresh Blueberries",
    price: 59,
    imageUrl:
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=300&q=80",
  },
  {
    name: "Cookie Crumbs",
    price: 39,
    imageUrl:
      "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=300&q=80",
  },
  {
    name: "Extra Cinnamon",
    price: 29,
    imageUrl:
      "https://images.unsplash.com/photo-1514176463739-a16c09684b6c?w=300&q=80",
  },
  {
    name: "Marshmallows",
    price: 39,
    imageUrl:
      "https://images.unsplash.com/photo-1576645514141-8bf2bd9d27c0?w=300&q=80",
  },
  {
    name: "Fresh Raspberry",
    price: 59,
    imageUrl:
      "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?w=300&q=80",
  },
  {
    name: "White Chocolate Chips",
    price: 49,
    imageUrl:
      "https://images.unsplash.com/photo-1618914083847-5c079f3fa350?w=300&q=80",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  // Cakes (categoryId: 2)
  {
    name: "Red Velvet Cake",
    imageUrl:
      "https://images.unsplash.com/photo-1586788680434-30d324626f4c?w=292",
    categoryId: 2,
  },
  {
    name: "Chocolate Layer Cake",
    imageUrl:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=292",
    categoryId: 2,
  },
  {
    name: "Vanilla Bean Cake",
    imageUrl: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=292",
    categoryId: 2,
  },
  {
    name: "Carrot Cake",
    imageUrl:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=292",
    categoryId: 2,
  },

  // Muffins (categoryId: 3)
  {
    name: "Blueberry Muffin",
    imageUrl:
      "https://images.unsplash.com/photo-1607958996333-41aec66c4f2b?w=292",
    categoryId: 3,
  },
  {
    name: "Chocolate Chip Muffin",
    imageUrl:
      "https://images.unsplash.com/photo-1604882406195-d94d4888567d?w=292",
    categoryId: 3,
  },
  {
    name: "Banana Nut Muffin",
    imageUrl:
      "https://images.unsplash.com/photo-1592803816797-66512e11a804?w=292",
    categoryId: 3,
  },
  {
    name: "Double Chocolate Muffin",
    imageUrl:
      "https://images.unsplash.com/photo-1599785209796-786432b228bc?w=292",
    categoryId: 3,
  },

  // Cocktails (categoryId: 4)
  {
    name: "Oreo Milkshake",
    imageUrl:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=292",
    categoryId: 4,
  },
  {
    name: "Strawberry Banana Smoothie",
    imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=292",
    categoryId: 4,
  },
  {
    name: "Chocolate Frappe",
    imageUrl:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=292",
    categoryId: 4,
  },
  {
    name: "Vanilla Bean Shake",
    imageUrl:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=292",
    categoryId: 4,
  },

  // Cinnamon Rolls (categoryId: 5)
  {
    name: "Classic Cinnamon Roll",
    imageUrl:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=292",
    categoryId: 5,
  },
  {
    name: "Cream Cheese Frosted Roll",
    imageUrl:
      "https://images.unsplash.com/photo-1583916787340-0ae3da7539ab?w=292",
    categoryId: 5,
  },
  {
    name: "Caramel Pecan Roll",
    imageUrl:
      "https://images.unsplash.com/photo-1509365390695-33acd7879a57?w=292",
    categoryId: 5,
  },
  {
    name: "Maple Glazed Roll",
    imageUrl:
      "https://images.unsplash.com/photo-1600521853186-93b88b3a39f5?w=292",
    categoryId: 5,
  },
];
