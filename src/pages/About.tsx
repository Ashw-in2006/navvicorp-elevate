import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Award, Target, Eye, Heart, Shield, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Navvi Corporations
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Your trusted partner for business transformation and premium quality products
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6 text-lg">
              <p>
                At <strong>Navvi Corporations</strong>, we specialize in business transformation and consulting, 
                offering strategic insights, digital transformation solutions, and process improvement strategies 
                to help your business thrive in a competitive landscape.
              </p>
              <p>
                Our team of experts is dedicated to guiding businesses through their transformation journeys, 
                ensuring that every step is aligned with your goals and delivers measurable results for sustainable success.
              </p>
              <p>
                In addition to our consulting services, we are proud wholesalers and retailers of premium quality 
                products including safety equipment, sanitation solutions, and garments. Based in Virudhunagar, 
                Tamil Nadu, we serve clients across India with a commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses through strategic consulting and provide premium quality products 
                  that enhance safety, hygiene, and productivity.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted partner for business transformation and quality products, 
                  recognized for our excellence and commitment to client success.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-gold-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Our Values</h3>
                <p className="text-muted-foreground">
                  Integrity, excellence, innovation, and customer satisfaction drive everything we do. 
                  We believe in building lasting relationships based on trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Clients Choose Navvi Corporations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence sets us apart
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Award,
                  title: "5+ Years of Excellence",
                  description: "Proven track record in business consulting and quality product delivery",
                },
                {
                  icon: Shield,
                  title: "Quality Guaranteed",
                  description: "All products undergo strict quality control to ensure premium standards",
                },
                {
                  icon: TrendingUp,
                  title: "Results-Driven Approach",
                  description: "Focus on measurable outcomes and sustainable business growth",
                },
                {
                  icon: Target,
                  title: "Client-Centric Solutions",
                  description: "Customized strategies tailored to your specific business needs",
                },
                {
                  icon: Award,
                  title: "Expert Team",
                  description: "Experienced professionals with deep industry knowledge",
                },
                {
                  icon: Shield,
                  title: "GST Registered",
                  description: "Fully compliant and transparent business operations (GST: 33CFAPA0349P1ZN)",
                },
              ].map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover-lift">
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
