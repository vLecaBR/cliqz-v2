import { servicesData } from '../components/services/servicesData';
import { ServicesHeader } from '../components/services/ServicesHeader';
import { ServiceCategory } from '../components/services/ServiceCategory';
import { CTA } from '../components/services/CTA';

export function Services() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <ServicesHeader />

        <div className="space-y-32">
          {servicesData.map((category) => (
            <ServiceCategory
              key={category.category}
              {...category}
            />
          ))}
        </div>

        <CTA />
      </div>
    </div>
  );
}