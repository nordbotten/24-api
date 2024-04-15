import prisma from "../lib/prisma";

const getAllHotels = async () => {
  return await prisma.hotel.findMany();
};
const getSingleHotel = async (id: string) => {
  return await prisma.hotel.findFirstOrThrow({ where: { id } });
};

export { getAllHotels, getSingleHotel };
