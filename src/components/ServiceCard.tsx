import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
}

const ServiceCard = ({ icon: Icon, title, description, price }: ServiceCardProps) => (
  <Card className="flex flex-col transition-shadow hover:shadow-lg">
    <CardHeader>
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-1">
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
    <CardFooter className="flex items-center justify-between">
      <span className="text-lg font-semibold text-foreground">{price}</span>
      <Button size="sm" asChild>
        <a href={`https://wa.me/6287786239607?text=${encodeURIComponent(`Halo, saya tertarik dengan layanan ${title} (${price}). Bisa info lebih lanjut?`)}`} target="_blank" rel="noopener noreferrer">Pesan</a>
      </Button>
    </CardFooter>
  </Card>
);

export default ServiceCard;
