import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

const ProductCard = ({ id, name, category, price, image, description }: ProductCardProps) => {
  return (
    <Card className="hover-lift overflow-hidden border-border bg-card group">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="pt-4">
        <div className="text-xs text-accent font-medium mb-2">{category}</div>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">{price}</span>
          <span className="text-xs text-muted-foreground">per piece</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-gradient-primary group/btn">
          <Link to={`/products/${id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
