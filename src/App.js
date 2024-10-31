import Card from "./Components/Card";

export default function App() {
  return (
    <>
      <h1>Playlist de Janderson</h1>
      <Card
        artista="Fleetwood Mac"
        musica="Go Your Own Way"
        foto="https://media.gazetadopovo.com.br/2013/03/e478b3e8e11e9aea266e4d379d964057-gpLarge.jpg"
        dia="Segunda-feira"
      />
      <Card
        artista="Alice Cooper"
        musica="Poison"
        foto="https://whiplash.net/imagens_promo_22/alicecooper_earmusic_por_jenny_risher.jpg?nocache"
        dia="Quarta-feira"
      />
      <Card
        artista="TOTO"
        musica="Rosanna"
        foto="https://ucarecdn.com/f56ca6cd-00b3-4453-aa14-ba1cd93bd1ae/-/crop/1592x1080/164,0/-/resize/840x570/"
        dia="Sexta-feira"
      />
    </>
  );
}
