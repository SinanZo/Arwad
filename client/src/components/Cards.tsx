import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { LucideIcon } from 'lucide-react';

// ValueCard - for core values/pillars
interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

// IndustryCard - for industries section
interface IndustryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link?: string;
  linkText?: string;
}

export function IndustryCard({ title, description, imageSrc, link, linkText }: IndustryCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{description}</CardDescription>
        {link && linkText && (
          <Button variant="link" className="p-0 h-auto" asChild>
            <a href={link}>{linkText}</a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

// ServiceCard - for services section
interface ServiceCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  children?: ReactNode;
}

export function ServiceCard({ title, description, icon: Icon, children }: ServiceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        {Icon && (
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        {children}
      </CardContent>
    </Card>
  );
}

// ProductCard - for products section
interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  onRequestQuote?: () => void;
  quoteButtonText?: string;
}

export function ProductCard({ title, description, imageSrc, onRequestQuote, quoteButtonText }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{description}</CardDescription>
        {onRequestQuote && quoteButtonText && (
          <Button variant="outline" size="sm" onClick={onRequestQuote} className="w-full">
            {quoteButtonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

// StatCard - for statistics/achievements
interface StatCardProps {
  value: string;
  label: string;
  icon?: LucideIcon;
}

export function StatCard({ value, label, icon: Icon }: StatCardProps) {
  return (
    <Card className="text-center bg-primary/5 border-primary/20">
      <CardContent className="pt-6">
        {Icon && (
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        )}
        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
}

// InfoCard - for contact information
interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

export function InfoCard({ icon: Icon, title, children }: InfoCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        {children}
      </CardContent>
    </Card>
  );
}
