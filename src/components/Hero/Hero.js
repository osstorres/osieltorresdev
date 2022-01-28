import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import {Icon} from "../Projects/ProjectsStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
           <Icon src={"/images/bear.png"} className={"ico"}/>
        <SectionTitle main center>
          Osiel Torres <br />
  A place for Devs and not devs
        </SectionTitle>
        <SectionText>
A developer who is interested on keep learning about DevOps and web development. I pursue the most is the constant intellectual exchange and bring knowledge to the community.
          I aim to be part of a multi-skilled team whose passion is to enjoy the creative process of conceiving and evolving an idea.        </SectionText>
        {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
