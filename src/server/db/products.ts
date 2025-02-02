import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getBestSellers = cache(
  () => {
    const bestSellers = db.product.findMany({
      where: {
        orders: {
          some: {},
        },
      },
      orderBy: {
        orders: {
          _count: "desc",
        },
      },
      include: {
        sizes: true,
        extras: true,
      },
    });
    return bestSellers;
  },
  ["best-sellers"],
  { revalidate: 3600 }
);
