import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

(async () => {
  const hotel = await prisma.hotel.create({
    data: {
      id: "6e8d7083-1718-49d9-a11f-6587f003e9f9",
      name: "24SevenHotel",
      description:
        "24SevenHotel is a luxury hotel located in the heart of Skien. The hotel offers a wide range of services and amenities to make your stay as comfortable as possible. Whether you are traveling for business or pleasure, 24SevenHotel is the perfect choice for your next trip to Skien.",
      image:
        "https://www.peninsula.com/-/media/images/the-peninsula-hotels/destination/phk_exterior_1280.jpg",
      address: "Uniongata 18",
      postCode: "3732",
      city: "Skien",
      latitude: 59.198329,
      longitude: 9.6113933,
    },
  });
  const singleRoom = await prisma.roomType.create({
    data: {
      id: "63252665-c6b4-4ddb-a446-5bbac9f12afe",
      name: "Single Room",
      description:
        "Our single rooms are perfect for solo travelers. Each room comes with a comfortable bed, a desk, and a private bathroom.",
      hotelId: hotel.id,
      price: 2000,
      image:
        "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp",
    },
  });
  const doubleRoom = await prisma.roomType.create({
    data: {
      id: "eee7d57c-7d04-45c3-9cc7-000e55178883",
      name: "Double Room",
      description:
        "Our double rooms are perfect for couples or friends traveling together. Each room comes with two comfortable beds, a desk, and a private bathroom.",
      hotelId: hotel.id,
      price: 3000,
      image:
        "https://aremorch.com/wp-content/uploads/2016/09/The-Details-That-Matter-Top-Things-Every-Luxury-Hotel-Room-Should-Have.png",
    },
  });
  const jrSuite = await prisma.roomType.create({
    data: {
      name: "Jr. Suite",
      description:
        "Our Jr. suites are perfect for couples or friends traveling together. Each room comes with two comfortable beds, a desk, and a private bathroom.",
      hotelId: hotel.id,
      price: 4000,
      image:
        "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
    },
  });
  await prisma.room.createMany({
    data: [
      {
        id: "184cfb77-b58c-45c2-8ed6-63b6a33072f8",
        name: "101",
        roomTypeId: singleRoom.id,
        hotelId: hotel.id,
      },
      {
        id: "75543799-f2bb-4145-9808-4ee8b6c9e679",
        hotelId: hotel.id,
        roomTypeId: singleRoom.id,
        name: "102",
      },
      {
        id: "0ce42ba1-25c6-4d00-99f1-ef12b116bc57",
        hotelId: hotel.id,
        roomTypeId: singleRoom.id,
        name: "103",
      },
      {
        id: "c892471b-640e-4053-9709-507943722955",
        hotelId: hotel.id,
        roomTypeId: singleRoom.id,
        name: "104",
      },
      {
        id: "9b475fa6-cc0c-4f11-a596-4627f2c13e5b",
        name: "201",
        roomTypeId: doubleRoom.id,
        hotelId: hotel.id,
      },
      {
        id: "e15c4838-b1f7-4db2-9c36-6a2afdc8937b",
        hotelId: hotel.id,
        roomTypeId: doubleRoom.id,
        name: "202",
      },
      {
        id: "14fc893f-72cc-4908-9dcb-96fe5102f803",
        hotelId: hotel.id,
        roomTypeId: doubleRoom.id,
        name: "203",
      },
      {
        id: "43a1c06e-9fc7-4a3b-b711-4c9848537e91",
        hotelId: hotel.id,
        roomTypeId: doubleRoom.id,
        name: "204",
      },
      {
        id: "29ec3f13-c985-48da-b9f6-ab6f8c7fea8e",
        hotelId: hotel.id,
        roomTypeId: jrSuite.id,
        name: "301",
      },
      {
        id: "f6099d08-bf11-43d6-8dac-142f45c557db",
        hotelId: hotel.id,
        roomTypeId: jrSuite.id,
        name: "302",
      },
    ],
  });
})();
