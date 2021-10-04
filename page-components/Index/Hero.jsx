import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1 className="">
          <span className="text-2xl text-gray-500">illoMXFT</span>
          <span className="">nft market</span>
        </h1>
        <Container justifyContent="center" className="">
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className="">Explore Feed</ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
          <Container>
            <ButtonLink
              href="https://github.com/hoangvvo/nextjs-mongodb-app"
              type="secondary"
              className=""
            >
              GitHub
            </ButtonLink>
          </Container>
        </Container>
        <p className="">
          A Next.js and MongoDB web application, designed with simplicity for
          learning and real-world applicability in mind.
        </p>
      </div>
    </Wrapper>
  );
};

export default Hero;
