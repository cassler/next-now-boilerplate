import styled from 'styled-components';

const About = () => (
  <div>
    <Contrain>
      <h1>About</h1>
      <h2>Everything. Seriously v0233</h2>
      <p>
        Amazon is not just an online store—that’s not even the hardest thing to
        cut out of my life. Its global empire also includes Amazon Web Services
        (AWS), the vast server network that provides the backbone for much of
        the internet.
      </p>
      <Pill bg="#d3a" size="m">
        Get Started
      </Pill>
    </Contrain>
  </div>
);
export default About;

const Pill = styled.button`
  
  border-radius: 3em;
  background-color: ${props => (props.bg ? props.bg : '#ccc')}
  border: none;
  color: #fff;
  ${props => (props.size === 'm' ? `padding: 1em 2em` : null)};
`;
const Contrain = styled.div`
  width: 80%;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 20px;

  h1 {
    font-size: 72px;
    letter-spacing: -0.03em;
    position: relative;
    margin: 10px 0;
    padding: 0;

    &::before {
      content: '';
      width: 1em;
      height: 0;
      border-top: 0.1em solid orange;
      top: -0.5em;
      left: 0;
      position: absolute;
    }
  }

  h2 {
    font-size: 48px;
    color: #9a9ca2;
    font-weight: 100;
    margin: 10px 0 30px;
  }

  p {
    line-height: 1.62em;
    font-weight: 400;
    font-size: 18px;
    color: #345;
  }
`;
