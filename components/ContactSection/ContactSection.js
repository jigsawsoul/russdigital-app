import { Container, ContactForm } from "../../components";

export default function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <div className="py-16 lg:py-32 overflow-hidden bg-[#E3FF04] font-body text-center xl:text-left">
      <Container>
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="w-full xl:w-5/12 mb-12 xl:mb-0">
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-title font-semibold mb-8">
              Let's Work Together
            </h2>
            <p className="lg:text-[18px] mb-4">
              We are digital agency that helps businesses develop immersive and
              engaging user experiences
            </p>
            <p className="lg:text-[18px]">
              Copyright © {year}{" "}
              <a href="mailto:info@russdigital.co.uk">RussDigital</a>
            </p>
          </div>
          <div className="w-full xl:w-6/12">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
