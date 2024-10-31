import styled from "styled-components";

const Section = styled.section`
  border: 1px solid #ddd;
  width: 300px;

  img {
    width: 100%;
  }
`;

export default function Card({ artista, musica, foto, dia }) {
  return (
    <Section>
      {/* <h2>Entreguem o desafio da Lampada</h2> */}
      <h2>
        {artista} - {musica}
      </h2>
      <img src={foto} alt={`Foto do artista ${artista}`} />
      <p>{dia}</p>
    </Section>
  );
}
