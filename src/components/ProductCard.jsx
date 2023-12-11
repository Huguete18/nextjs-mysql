import Link from "next/link";
import Image from "next/image";

function ProductCard({ product }) {
  return (
    <Link
      className="bg-white rounded-lg border-gray-800 mb-3 text-black hover:bg-gray-100 hover:cursor-pointer"
      href={`/products/${product.id}`}
    >
      {product.image && (
        <Image
          src={product.image}
          className="rounded-t-lg"
          width={400}
          height={0}
          alt=""
        />
      )}
      <div className="p-4">
        <h1 className="text-lg font-bold">{product.name}</h1>
        <h2 className="text-2xl text-slate-600">{product.price}</h2>
        <p>{product.description}</p>
      </div>
    </Link>
  );
}

export default ProductCard;

/**
 * *01:21:18
 */
