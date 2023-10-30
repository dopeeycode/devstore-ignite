import data from '../data.json'

export async function GET() {
  const { products } = data
  const featuredProducts = products.filter((product) => product.featured)

  return Response.json(featuredProducts)
}
