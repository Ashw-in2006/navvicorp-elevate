import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px]" />

      <div className="container relative z-10 mx-auto px-4 py-24 lg:py-32">
        <div className={`max-w-6xl mx-auto text-center space-y-12 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Trust Badge with Glassmorphism */}
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full backdrop-blur-xl shadow-glass animate-scale-in">
            <Sparkles className="h-5 w-5 text-gold animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              Trusted by 100+ Enterprise Clients
            </span>
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-gold/80 border-2 border-primary flex items-center justify-center text-[10px] font-bold">
                  ★
                </div>
              ))}
            </div>
          </div>

          {/* Main Headline - Huge & Bold */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
              <span className="block text-primary-foreground">Transform Your</span>
              <span className="block text-gradient mt-2">Business Future</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed font-light">
              Premium consulting services and cutting-edge solutions designed for 
              <span className="text-gradient-gold font-semibold"> visionary enterprises</span> ready to dominate their industry.
            </p>
          </div>

          {/* CTA Buttons with Magnetic Effect */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button
              asChild
              size="lg"
              className="magnetic-button group h-14 px-10 text-lg bg-gradient-neon text-white border-0 shadow-glow hover:shadow-glow-gold"
            >
              <Link to="/services">
                <Sparkles className="mr-2 h-6 w-6 group-hover:rotate-180 transition-transform duration-700" />
                Explore Services
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              className="h-14 px-10 text-lg glass backdrop-blur-xl border-2 border-accent/30 text-primary-foreground hover:border-accent hover:shadow-glow transition-all duration-500"
            >
              <Link to="/products">
                <Shield className="mr-2 h-6 w-6" />
                View Products
              </Link>
            </Button>
          </div>

          {/* Animated Stats - Premium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 max-w-4xl mx-auto">
            {[
              { icon: TrendingUp, value: "5+", label: "Years Excellence", delay: "0ms" },
              { icon: Shield, value: "100+", label: "Happy Clients", delay: "200ms" },
              { icon: Sparkles, value: "50+", label: "Projects Delivered", delay: "400ms" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-dark p-8 rounded-2xl hover-lift group shadow-glass"
                style={{ animationDelay: stat.delay }}
              >
                <div className="w-16 h-16 bg-gradient-neon rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-glow">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
