import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, Tech Solutions",
    content: "Navvi Corporations transformed our business with their strategic insights and exceptional digital solutions. Their consulting services are truly world-class.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager",
    content: "The process improvement strategies implemented by Navvi Corp have significantly enhanced our operational efficiency. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "Arun Patel",
    role: "Business Owner",
    content: "Outstanding quality products and excellent customer service. The foot pedal sanitizers have been perfect for our facility. Great team to work with!",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across industries for quality and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card hover-lift">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-gold mb-4" />
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  {testimonial.content}
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
