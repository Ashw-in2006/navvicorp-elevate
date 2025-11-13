import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductById, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Phone, Mail } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">
              Sorry, we couldn't find the product you're looking for.
            </p>
            <Button asChild>
              <Link to="/products">Back to Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <section className="py-6 border-b border-border">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" size="sm">
              <Link to="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-accent font-medium mb-2">
                    {product.category}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    {product.name}
                  </h1>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-bold text-primary">
                      {product.price}
                    </span>
                    <span className="text-muted-foreground">per piece</span>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Specifications */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4">Specifications</h3>
                    <dl className="space-y-3">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-border pb-2">
                          <dt className="font-medium text-muted-foreground">{key}</dt>
                          <dd className="text-right">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button asChild size="lg" className="w-full bg-gradient-primary">
                    <Link to="/contact">
                      <Mail className="mr-2 h-5 w-5" />
                      Enquire Now
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full">
                    <a href="tel:+911234567890">
                      <Phone className="mr-2 h-5 w-5" />
                      Call for Quote
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Related Products
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard
                    key={relatedProduct.id}
                    id={relatedProduct.id}
                    name={relatedProduct.name}
                    category={relatedProduct.category}
                    price={relatedProduct.price}
                    image={relatedProduct.image}
                    description={relatedProduct.description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
