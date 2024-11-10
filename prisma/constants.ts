export const categories = [
  {
    name: "Trucks",
  },
  {
    name: "Ships",
  },
  {
    name: "Flights",
  },
  {
    name: "Trains",
  },
  {
    name: "Cars",
  },
];

export const _ingredients = [
  {
    name: "Express Delivery",
    price: 49,
    imageUrl: "/imageProducts/Express_Delivery.svg",
  },
  {
    name: "Package Insurance",
    price: 39,
    imageUrl: "/imageProducts/Package_Insurance.svg",
  },
  {
    name: "Real-time Tracking",
    price: 29,
    imageUrl: "/imageProducts/Real-time_Tracking.svg",
  },
  {
    name: "Signature Required",
    price: 19,
    imageUrl: "/imageProducts/Signature_Required.svg",
  },
  {
    name: "Fragile Handling",
    price: 39,
    imageUrl: "/imageProducts/Fragile_Content.svg",
  },
  {
    name: "Temperature Control",
    price: 59,
    imageUrl: "/imageProducts/Temperature_Control.svg",
  },
  {
    name: "Same Day Pickup",
    price: 49,
    imageUrl: "/imageProducts/Same_Day_Pickup.svg",
  },
  {
    name: "Weekend Delivery",
    price: 39,
    imageUrl: "/imageProducts/Weekend_Delivery.svg",
  },
  {
    name: "Packaging Service",
    price: 29,
    imageUrl: "/imageProducts/Packaging_Service.svg",
  },
  {
    name: "Extra Large Items",
    price: 69,
    imageUrl: "/imageProducts/Extra_Large_Items.svg",
  },
  {
    name: "Customs Clearance",
    price: 79,
    imageUrl: "/imageProducts/Customs_Clearence.svg",
  },
  {
    name: "Warehouse Storage",
    price: 49,
    imageUrl: "/imageProducts/Warehouse_Storage.svg",
  },
  {
    name: "Priority Handling",
    price: 39,
    imageUrl: "/imageProducts/Priority_Handling.svg",
  },
  {
    name: "Proof of Delivery",
    price: 19,
    imageUrl: "/imageProducts/Proof_of_Delivery.svg",
  },
  {
    name: "Multiple Attempts",
    price: 29,
    imageUrl: "/imageProducts/Multiple_Attempts.svg",
  },
  {
    name: "Door-to-Door Service",
    price: 59,
    imageUrl: "/imageProducts/Door-to-Door_Service.svg",
  },
  {
    name: "Cargo Insurance Plus",
    price: 89,
    imageUrl: "/imageProducts/Cargo_Insurance_Plus.svg",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  // Ships (categoryId: 2)
  {
    name: "Container Shipping",
    imageUrl: "/imageProducts/Container_Shipping.svg",
    categoryId: 2,
  },
  {
    name: "Bulk Cargo Vessel",
    imageUrl: "/imageProducts/Bulk_Cargo_Vessel.svg",
    categoryId: 2,
  },
  {
    name: "Express Maritime",
    imageUrl: "/imageProducts/Express_Maritime.svg",
    categoryId: 2,
  },
  {
    name: "Coastal Shipping",
    imageUrl: "/imageProducts/Coastal_Shipping.svg",
    categoryId: 2,
  },

  // Flights (categoryId: 3)
  {
    name: "Next-Day Air",
    imageUrl: "/imageProducts/Next-Day_Air.svg",
    categoryId: 3,
  },
  {
    name: "International Air Freight",
    imageUrl: "/imageProducts/International_Air_Freight.svg",
    categoryId: 3,
  },
  {
    name: "Express Air Cargo",
    imageUrl: "/imageProducts/Express_Air_Cargo.svg",
    categoryId: 3,
  },
  {
    name: "Charter Air Freight",
    imageUrl: "/imageProducts/Charter_Air_Freight.svg",
    categoryId: 3,
  },

  // Trains (categoryId: 4)
  {
    name: "Intermodal Rail",
    imageUrl: "/imageProducts/Intermodal_Rail.svg",
    categoryId: 4,
  },
  {
    name: "Express Rail Freight",
    imageUrl: "/imageProducts/Express_Rail_Freight.svg",
    categoryId: 4,
  },
  {
    name: "Bulk Rail Transport",
    imageUrl: "/imageProducts/Bulk_Rail_Transport.svg",
    categoryId: 4,
  },
  {
    name: "Container Rail Service",
    imageUrl: "/imageProducts/Container_Rail_Transport.svg",
    categoryId: 4,
  },

  // Cars (categoryId: 5)
  {
    name: "Local Courier Service",
    imageUrl: "/imageProducts/Local_Courier_Service.svg",
    categoryId: 5,
  },
  {
    name: "Same-Day Delivery",
    imageUrl: "/imageProducts/Same-Day_Delivery.svg",
    categoryId: 5,
  },
  {
    name: "Express Van Delivery",
    imageUrl: "/imageProducts/Express_Van_Delivery.svg",
    categoryId: 5,
  },
  {
    name: "Urban Distribution",
    imageUrl: "/imageProducts/Urban_Distribution.svg",
    categoryId: 5,
  },
];
