import { DiscordLogo, GithubLogo, Logo } from 'components/Svgs/Icons';
import { useWindowSize } from 'hooks';
import Link from 'next/link';
import styled from 'styled-components';
import { BREAKPOINT_SIZES } from '../../constants';
import columns from './columns';
import FooterColumn from './FooterColumn';

function Footer() {
  const { width } = useWindowSize();
  const isDesktop = width >= BREAKPOINT_SIZES.med;
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <CustomFooter>
        <Left>
          <LinksWrapper>
            <Link href="/" passHref={true}>
              <AnchorLink aria-label="Go to homepage">
                <Logo />
              </AnchorLink>
            </Link>
            <SocialLinks>
              <AnchorLink
                aria-label="My Github account"
                href="https://github.com/AnOrdinaryUsername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogo size="25" />
              </AnchorLink>
              <AnchorLink
                aria-label="My Discord profile"
                href="https://discordapp.com/users/324705092726947842"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordLogo size="20" />
              </AnchorLink>
            </SocialLinks>
          </LinksWrapper>
          {isDesktop && <Copyright>© {currentYear} Kyle Masa.</Copyright>}
        </Left>
        <Right>
          {columns.map((props, index) => (
            <FooterColumn {...props} key={index} />
          ))}
        </Right>
        {!isDesktop && <Copyright>© {currentYear} Kyle Masa.</Copyright>}
      </CustomFooter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 4.8rem 3.2rem;
  border-top: 1px solid var(--accent-secondary);
  background-color: var(--bg-primary);

  @media ${(p) => p.theme.breakpoints.sm} {
    padding-left: 9.6rem;
    padding-right: 9.6rem;
  }

  @media ${(p) => p.theme.breakpoints.med} {
    height: 25rem;
    padding-left: 6.4rem;
    padding-right: 6.4rem;
  }
`;

const CustomFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 110rem;
  height: 100%;
  width: 100%;
  margin: 0 auto;

  @media ${(p) => p.theme.breakpoints.med} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  @media ${(p) => p.theme.breakpoints.med} {
    justify-content: space-between;
    width: auto;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media ${(p) => p.theme.breakpoints.med} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;

  @media ${(p) => p.theme.breakpoints.med} {
    margin-top: 2.4rem;
  }
`;

const AnchorLink = styled.a`
  line-height: 0;
  padding: 0 1rem;

  & > svg * {
    transition: fill 200ms ease-out;
  }

  /* Primary accent for logo */
  &:hover > svg * {
    fill: var(--accent-primary);
  }

  /* Secondary accent for social links */
  ${SocialLinks} &:hover > svg * {
    transition: fill 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    fill: var(--accent-secondary);
  }
`;

const Right = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  margin: 4rem 0;
  /* Padding is for alignment with anchor links */
  padding: 0 1rem;

  & > *:last-child {
    text-align: right;
  }

  @media ${(p) => p.theme.breakpoints.med} {
    max-width: 30rem;
    margin: 0;
    padding: 0;

    & > *:last-child {
      text-align: left;
    }
  }
`;

const Copyright = styled.span`
  font-size: 1.4rem;
  color: var(--fg-tertiary);

  @media ${(p) => p.theme.breakpoints.med} {
    /* padding-top is for alignment with left side links */
    padding-left: 1rem;
    /* padding-bottom is for alignment with right side links.
       This isn't the best solution, but it works I guess.
    */
    padding-bottom: 0.4rem;
  }
`;

export default Footer;
