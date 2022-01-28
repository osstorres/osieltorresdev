import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import {Img} from "../Projects/ProjectsStyles";
import {Icon} from "../Projects/ProjectsStyles";
const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white"}}>
          {/*<Img src={"ico.png"} /> <DiCssdeck size="3rem" />*/}
          <Img src={"signature.png"} />
          {/*<span>Osiel Torres</span>*/}
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Articles</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About me</NavLink>
        </Link>
      </li>
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/osstorres">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/osiel-jacobo-torres-202a2a174/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
