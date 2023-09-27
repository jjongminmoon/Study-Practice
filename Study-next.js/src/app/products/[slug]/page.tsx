import Image from "next/image";
import { getProduct, getProducts } from "@/service/products";
import { notFound, redirect } from "next/navigation";
import GoProductsButton from "@/components/goProductsButton";

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`
  };
}

export default async function ProductInfoPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    redirect("/products");
    // notFound();
  }

  return (
    <>
      <h1>{product.name} 정보 페이지입니다!</h1>
      <Image src={`/images/${product.image}`} alt={product.name} width={400} height={400} />
      <GoProductsButton />
    </>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id
  }));
}
