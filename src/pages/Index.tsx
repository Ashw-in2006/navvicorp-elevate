import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const featuredProducts = products.slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        {/* Services Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert consulting for strategic growth, digital transformation, and process improvement
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {featuredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Products Preview */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Premium quality products for safety and hygiene solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                />
              ))}
            </div>
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Navvi Corporations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your trusted partner for business transformation and quality products
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Quality Assured",
                  description: "Premium products and services backed by quality guarantees",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Experienced professionals dedicated to your success",
                },
                {
                  icon: TrendingUp,
                  title: "Proven Results",
                  description: "Track record of successful business transformations",
                },
                {
                  icon: CheckCircle,
                  title: "Customer First",
                  description: "Committed to exceeding client expectations",
                },
              ].map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialSlider />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
