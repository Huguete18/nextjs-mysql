import Link from "next/link";

function ProductCard({ product }) {
  return (
    <Link
      className="bg-white rounded-lg border-gray-800 mb-3 padding-4 text-black hover:bg-gray-100 hover:cursor-pointer"
      href={`/products/${product.id}`}
    >
      <h1 className="text-lg font-bold">{product.name}</h1>
      <h2 className="text-2xl text-slate-600">{product.price}</h2>
      <p>{product.description}</p>
    </Link>
  );
}

export default ProductCard;

/**
 * *01:21:18
 */
