import { Container, ContactForm } from "..";

export default function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <div className="py-32 overflow-hidden bg-[#E3FF04] font-body text-center lg:text-left">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-5/12">
            <h2 className="text-7xl font-title font-semibold mb-8">
              Let's Work Together
            </h2>
            <p className="text-[18px] mb-4">
              We are digital agency that helps businesses develop immersive and
              engaging user experiences
            </p>
            <p className="text-[18px]">
              Copyright © {year}{" "}
              <a href="mailto:info@russdigital.co.uk">RussDigital</a>
            </p>
          </div>
          <div className="lg:w-6/12">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
