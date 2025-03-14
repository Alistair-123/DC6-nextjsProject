"use server"


async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products; 
}

export default async function Home() {
  const products = await getProducts(); 

  return (
    <div className="p-6">
    <h1 className="text-2xl font-bold mb-6">Products</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {products.map((product: any) => (
        <div key={product.id} className="border rounded-lg w-[280px] h-[250px] p-4 bg-white">
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-700">{product.description}</p>
        </div>
      ))}
    </div>
  </div>
  );
}
