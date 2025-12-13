import { ContactHeader } from '../components/contact/ContactHeader';
import { EmailCard, WhatsAppCard, LinkedInCard } from '../components/contact/ContactCards';
import { ContactFooter } from '../components/contact/ContactFooter';

export function Contact() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <ContactHeader />
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <EmailCard />
          <WhatsAppCard />
          <LinkedInCard />
        </div>

        <ContactFooter />
      </div>
    </div>
  );
}