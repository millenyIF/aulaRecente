import { Accordion, Container } from 'react-bootstrap';
import Menu from './components/navbar';
import Footer from './components/footer';

export default function Lista() {
  var noticias = [
    {
      id: 1,
      titulo: "Nova vacina contra a gripe é aprovada",
      conteudo: "Uma nova vacina contra a gripe foi aprovada pelas autoridades de saúde, prometendo maior eficácia e proteção para a população durante a temporada de inverno",
    },
    {
      id: 2,
      titulo: "Tecnologia 5G chega a mais cidades do Brasil",
      conteudo: "O avanço da tecnologia 5G continua a expandir, com várias cidades brasileiras agora tendo acesso à internet de alta velocidade, trazendo benefícios para a comunicação e negócios",
    },
    {
      id: 3,
      titulo: "Mudanças climáticas afetam colheitas em todo o mundo",
      conteudo: "Relatórios recentes mostram que as mudanças climáticas estão impactando as colheitas, levando a uma diminuição na produção agrícola e aumentando a preocupação com a segurança alimentar",
    }
  ]
  return (
    <>
      <Menu />
      <Container>
        <Accordion>
          {noticias.map(noticias =>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{noticias.titulo}</Accordion.Header>
            <Accordion.Body>
              {noticias.conteudo}
            </Accordion.Body>
          </Accordion.Item>
          )}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
            </Accordion.Body>
          </Accordion.Item>
          
        </Accordion>
      </Container>
      <Footer />
    </>
  );
}

