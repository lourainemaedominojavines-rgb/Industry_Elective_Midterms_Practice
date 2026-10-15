import ContactLink from "./ContactLink";
import SectionHeading from "./SectionHeading";

export default function ContactSection () {
    return (
        <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
          
          <SectionHeading title = "Contact" subtitle = "Say hi."></SectionHeading>
          
          <ul className="mt-8 space-y-3">
            
            <ContactLink 
            label = "Email" 
            href = "mailto:juan.delacruz@cit.edu" 
            text = "juan.delacruz@cit.edu"
            >
            </ContactLink>

            <ContactLink 
            label = "GitHub" 
            href = "https://github.com/juandelacruz" 
            text = "github.com/juandelacruz"
            ></ContactLink>
            
            <ContactLink 
            label = "LinkedIn" 
            href = "https://linkedin.com/in/juandelacruz" 
            text = "linkedin.com/in/juandelacruz"
            ></ContactLink>
            
          </ul>
        </section>
    );
}