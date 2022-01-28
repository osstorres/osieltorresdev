import React from 'react';
import {
  DiAtom,
  DiAws,
  DiCisco,
  DiCloud9,
  DiDjango,
  DiDocker,
  DiFirebase, DiGit,
  DiGo,
  DiGoogleCloudPlatform,
  DiKomodo,
  DiMongodb,
  DiMysql, DiNginx,
  DiPostgresql, DiPython,
  DiReact,
  DiTerminal,
  DiTerminalBadge,
  DiZend
} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
My greatest experience has been in backend development, it motivates me to create solutions from scratch, that is why I have practice with cloud tools and infrastructure.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            <ul>
                 <li><DiPython size="4rem" /> Python</li>
            <li><DiDjango size="4rem"/> Django</li>
            <li><DiPostgresql size="4rem" /> Postgresql</li>
              <li><DiDocker size="4rem" /> Docker</li>
              <li><DiMysql size="4rem" /> MySql</li>
                <li><DiGo size="4rem" /> Go</li>
               <li><DiMongodb size="4rem" /> MongoDb</li>

            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGoogleCloudPlatform size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>infrastructure</ListTitle>
          <ListParagraph>
            <ul>
            <li><DiAws size="4rem"/> Aws</li>
            <li><DiGoogleCloudPlatform size="4rem" /> Gcp</li>
              <li><DiTerminal size="4rem" /> Terraform</li>
              <li><DiTerminalBadge size="4rem" /> Ansible</li>
                <li><DiAtom size="4rem" /> Kubernetes</li>
              <li><DiNginx size="4rem" /> Nginx</li>
              <li><DiGit size="4rem" /> Git</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
