import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CategoryCardProps {
  name: string;
  slug: string;
  image?: string;
}

const CategoryCard = ({ name, slug }: CategoryCardProps) => {
  return (
    <Link to={`/category/${slug}`}>
      <div className="group bg-muted rounded-lg p-8 text-center transition-smooth hover:shadow-lg cursor-pointer">
        <div className="mb-4 h-32 flex items-center justify-center">
          <div className="text-6xl">{slug === 'headphones' ? '🎧' : slug === 'speakers' ? '🔊' : '🎵'}</div>
        </div>
        <h3 className="text-xl font-bold uppercase tracking-wider mb-4">{name}</h3>
        <Button variant="link" className="text-muted-foreground group-hover:text-primary gap-2">
          Shop
          <ChevronRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
        </Button>
      </div>
    </Link>
  );
};

export default CategoryCard;
