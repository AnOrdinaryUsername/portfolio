import styled from 'styled-components';

function Footer() {
  return <CustomFooter>Made with 💖 by AnOrdinaryUsername</CustomFooter>;
}

const CustomFooter = styled.footer`
  position: relative;
  z-index: 1;
  padding: 3.2rem;
  text-align: center;
  background-color: var(--bg-tertiary);

  @media ${(p) => p.theme.breakpoints.sm} {
    padding-left: 9.6rem;
    padding-right: 9.6rem;
  }

  @media ${(p) => p.theme.breakpoints.med} {
    padding-left: 6.4rem;
    padding-right: 6.4rem;
  }
`;

export default Footer;
