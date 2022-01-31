
import { Layout } from '../../layout/LayoutAlone';
import { ArticleText } from '../../styles/GlobalComponents';
import { Section, SectionTitle, SectionText, SectionDivider } from '../../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
        <Section>
    <SectionDivider divider />
    <SectionTitle>Ama el proceso</SectionTitle>
    <SectionText>
      En 1961 el artista Robert Morris publicó una obra titulada "Una caja con el sonido de su propia creación". Esta obra consiste en una caja de madera con una bocina por dentro emitiendo
      sonidos de personas trabajando con madera.
      Lo que Morris buscaba expresar con esta obra es que la belleza del arte no se encuentra en el producto final, en la caja, sino en su proceso de creación; la gente
      trabajando con la madera.
      </SectionText>
      <SectionText>
      Erróneamente apreciamos nuestras obras solo por su resultado y nos olvidamos del trabajo que hubo detrás de él y de su contexto.
      </SectionText>
      <SectionText>
      Bajo esta premisa, el construir una nueva funcionalidad solo es una experiencia agradable cuando se termina, y no cuando se está elaborando.
      </SectionText>
      <SectionText>
      Esto quiere decir que, como diseñadores, programadores y dueños de producto, la mayor parte de nuestro tiempo estamos esperando a que ocurra ese momento para poder disfrutar nuestro trabajo.
      </SectionText>
      <SectionText>
      Sin embargo, si cambiamos la perspectiva y entendemos que la belleza, no solo de nuestras obras sino de la vida, está en los aprendizajes y experiencias obtenidas en cada proyecto y no en su fin o su resultado,
      entonces tendremos un trabajo y una vida más placentera, pues gozaremos a diario de nuestros procesos y seremos más pacientes con nuestros resultados.
      </SectionText>

    </Section>
    </Layout>
  );
};

export default Home;
