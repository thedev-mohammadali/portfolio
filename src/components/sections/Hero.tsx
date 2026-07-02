import Container from "../common/Container";
import Section from "../common/Section";

const Hero = () => {
  return (
    <Section id="home" className="flex min-h-[calc(100vh-5rem)] items-center">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>Left Content</div>

          <div>Right Content</div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
