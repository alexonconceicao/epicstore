import "./home.css";
import Link from "next/link";

export const metadata = {
  charset: "UTF-8",
  title: "Epic Store - Home",
};

export default function Home() {
  return (
    <>
      <div class="cabecalho">
        <div class="logo">
          <img src="logo.jpg" alt="" />
        </div>
        <div class="telas">
          <Link class= "relative border-0 w-fit bg-black text-white " href={"/"}>Home</Link>
          <button id="telaS" type="button">
            <p class="nameT">Store</p>
          </button>
          <button id="telaN" type="button">
            <p class="nameT">News</p>
          </button>
          <div id="line">
            <img src="Line 1.jpg" alt="" />
          </div>
        </div>
        <div id="pesquisa">
          <label for="barraDePesquisa"></label>
          <input
            type="text"
            id="caixaDePesquisa"
            placeholder="🔍 Pesquise aqui"
          />
        </div>
        <button id="perfil" type="button">
          <img src="Person.png" alt="perfil" />
        </button>
        <button id="carrinho" type="button">
          <img src="Shopping Bag.png" alt="carrinho" />
        </button>
      </div>

      <div>
        <table>
          <tr>
            <th colspan="5">
              <b class="name">Marry On Fire</b>
            </th>
          </tr>
          <tr>
            <td class="categoMof">
              <p class="categorias">Ação</p>
            </td>
            <td class="categoMof">
              <p class="categorias">Novo</p>
            </td>
            <td class="categoMof">
              <p class="categorias">
                Free <br />
                Style
              </p>
            </td>
            <td class="categoMof">
              <p class="categorias">MAC</p>
            </td>
            <td class="categoMof">
              <p class="categorias">
                15.7 <br />
                PC
              </p>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <p class="descrition">
          Edição limitada de um jogo personalizado: Marry the Fire or die.{" "}
          <br /> Agora disponível no Xbox.
        </p>
      </div>
      <button type="button" class="infoMof">
        <p class="titleButt">veja mais</p>
      </button>
      <div class="Mof">
        <img src="MarryOnFire.jpg" alt="MarryOnFire" />
      </div>

      <div class="carrossel">
        <button type="button" class="arrowLeft">
          <img src="Frame 3.jpg" alt="" />
        </button>
        <div class="brawlStars">
          <img
            src="BrawlersGalaxy.jpg"
            alt="BrawlersGalaxy"
            class="logoBrawl"
          />
          <table class="infoBrawl">
            <tr>
              <th colspan="2">
                <b class="name2">Brawl Stars Galaxy</b>
              </th>
            </tr>
            <tr>
              <td class="categoBrawl">
                <p class="categorias">Ação</p>
              </td>
              <td class="categoBrawl">
                <p class="categorias">Novo</p>
              </td>
              <td class="categoBrawl">
                <p class="categorias">
                  Free <br />
                  Style
                </p>
              </td>
              <td class="categoBrawl">
                <p class="categorias">MAC</p>
              </td>
              <td class="categoBrawl">
                <p class="categorias">
                  15.7 <br />
                  PC
                </p>
              </td>
            </tr>
          </table>
          <div class="descricao">
            <p>Brawl Stars Galaxy é um jogo de blablablabla</p>
            <div class="description2">
              Limited edition of a custom game: Marry the Fire or die. Now
              Available on Xbox.
            </div>
          </div>
        </div>
        <div class="fortinite">
          <img src="Fortinite.jpg" alt="Fortinite" class="logoForti"></img>
          <table class="infoForti">
            <tr>
              <th colspan="2">
                <b class="name3">Fortinite</b>
              </th>
            </tr>
            <tr>
              <td class="categoForti">
                <p class="categorias">Ação</p>
              </td>
              <td class="categoForti">
                <p class="categorias">Novo</p>
              </td>
              <td class="categoForti">
                <p class="categorias">
                  Free <br />
                  Style
                </p>
              </td>
              <td class="categoForti">
                <p class="categorias">MAC</p>
              </td>
              <td class="categoForti">
                <p class="categorias">
                  15.7 <br />
                  PC
                </p>
              </td>
            </tr>
          </table>
          <div class="descricao">
            <p>Fortinite é um jogo de blablablabla</p>
            <div class="description2">
              Limited edition of a custom game: Marry the Fire or die. Now
              Available on Xbox.
            </div>
          </div>
        </div>
        <button type="button" class="arrowRight">
          <img src="Frame 4.jpg" alt=""></img>
        </button>
      </div>

      <div class="genders">
        <table>
          <tr>
            <td rowspan="4" class="gender">
              <div class="conteiner">
                <button type="button" id="buttonGender">
                  <img src="image 5.jpg" alt="" class="imgGender"></img>
                  <div>
                    <b class="nameGender">CASUAL</b>
                  </div>
                </button>
              </div>
            </td>
            <td rowspan="4" class="gender2">
              <div class="conteiner">
                <button type="button" id="buttonGender">
                  <img src="image 6.jpg" alt="" class="imgGender"></img>
                  <div>
                    <b class="nameGender2"> AÇÃO</b>
                  </div>
                </button>
              </div>
            </td>
            <td rowspan="4" class="gender3">
              <div class="conteiner">
                <button type="button" id="buttonGender">
                  <img src="image 7.jpg" alt="" class="imgGender"></img>
                  <div>
                    <b class="nameGender">ARCADE</b>
                  </div>
                </button>
              </div>
            </td>
            <td rowspan="4" class="gender4">
              <div>
                <button type="button" id="buttonGender">
                  <img src="image 8.jpg" alt="" class="imgGender"></img>
                  <div>
                    <b class="nameGender">CORRIDA</b>
                  </div>
                </button>
              </div>
            </td>
            <td rowspan="4" class="gender5">
              <div>
                <button type="button" id="buttonGender">
                  <img src="image 9.jpg" alt="" class="imgGender"></img>
                  <div>
                    <b class="nameGender2"> RPG</b>
                  </div>
                </button>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div class="jogo">
        <table class="jogos">
          <tr>
            <th colspan="2" class="name4">
              Novidades
            </th>
            <th colspan="2" class="name4">
              Mais Jogados
            </th>
            <th colspan="2" class="name4">
              Em Prefere
            </th>
          </tr>
          <tr class="linhaJogos">
            <td class="colunaJogos">
              <img
                src="classic-car-simulator.jpg"
                alt=""
                class="logoGame"
              ></img>
              <div class="nameGame">
                <p>Classic Car Simulator Car Driving</p>
              </div>
              <div class="epic">
                <p class="name5">Agora na Epic</p>
              </div>
              <p class="valor">R$ 0,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
            <td class="colunaJogos2">
              <img src="DeadCells.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>Dead Cells</p>
              </div>
              <p class="valor">R$ 24,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
            <td class="colunaJogos3">
              <img
                src="the-lord-of-the-rings.jpg"
                alt=""
                class="logoGame"
              ></img>
              <div class="nameGame">
                <p>
                  The Lord Of The Rings
                  <br />
                  Return To Moria
                </p>
              </div>
              <p class="valor">R$ 39,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
          </tr>
          <tr class="linhaJogos2">
            <td class="colunaJogos">
              <img src="there-is-no-game.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>There Is No Game - Wrong…</p>
              </div>
              <div class="epic">
                <p class="name5">Agora na Epic</p>
              </div>
              <button type="button" id="compra">
                ADD To Card
              </button>
              <div class="desconto">
                <p>-10%</p>
              </div>
              <p class="valorTraco">R$ 12,99</p>
              <p class="valorDesc">R$ 11,69</p>
            </td>
            <td class="colunaJogos2">
              <img src="Ooblets.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>Ooblets</p>
              </div>
              <p class="valor">R$ 29,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
            <td class="colunaJogos3">
              <img src="AlanWake2.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>Alan Wake 2</p>
              </div>
              <p class="valor">R$ 49,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
          </tr>
          <tr class="linhaJogos3">
            <td class="colunaJogos">
              <img src="tintin-reporter.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>Tintin Reporter - Cigars of the…</p>
              </div>
              <div class="epic">
                <p class="name5">Agora na Epic</p>
              </div>
              <p class="valor">R$ 39,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
            <td class="colunaJogos2">
              <img src="RimWorld.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>RimWorld</p>
              </div>
              <p class="valor">R$ 34,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
            <td class="colunaJogos3">
              <img src="assassins-creed.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>
                  Assassins Creed
                  <br />
                  VALHALLA
                </p>
              </div>
              <p class="valor">R$ 59,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
          </tr>
          <tr class="linhaJogos4">
            <td class="colunaJogos">
              <img src="asterix-and-obelix.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>Asterix and Obelix Slap Them All 2</p>
              </div>
              <p class="valor">R$ 24,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
            <td class="colunaJogos2">
              <img src="Recipe for Disaster.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>Recipe For Disaster</p>
              </div>
              <p class="valor">R$ 16,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
            <td class="colunaJogos3">
              <img src="GTAV.jpg" alt="" class="logoGame"></img>
              <div class="nameGame">
                <p>Grand Theft Auto 5</p>
              </div>
              <p class="valor">R$ 16,99</p>
              <button type="button" id="compra">
                ADD To Card
              </button>
            </td>
          </tr>
        </table>
      </div>

      <div class="infosEpic">
        <div class="logo">
          <img src="logo.jpg" alt="" class="logoFim"></img>
        </div>
        <div class="apoieUmCriador">
          <span>
            <p>
              Recursos
              <br />
              Apoie-um-Criador
              <br />
              Distribuir na Epic Games
              <br />
              Carreiras
              <br />
              Empresa
            </p>
          </span>
        </div>
        <div class="polTicaDeFanart">
          <span>
            <p>
              Política de Fanart
              <br />
              UX Research
              <br />
              EULA da Loja <br />
            </p>
          </span>
        </div>
        <div class="servicos">
          <span>
            <p>
              Serviços On-line
              <br />
              Regras da comunidade
              <br />
              Epic Newsroom
              <br />
            </p>
          </span>
        </div>
      </div>
      <div class="rodape">
        <div class="EpicGames">
          <p>
            © 2023, Epic Games, Inc. Todos os direitos reservados. Epic, Epic
            Games, o logotipo da Epic Games, Fortnite,
            <br />
            o logotipo do Fortnite, Unreal, Unreal Engine, o logotipo do Unreal
            Engine, Unreal Tournament e o logotipo <br />
            do Unreal Tournament são marcas comerciais ou registradas da Epic
            Games, Inc. nos Estados Unidos da América <br />e em outros lugares.
            Outras marcas e nomes de produtos são marcas registradas de seus
            respectivos donos.
          </p>
        </div>
      </div>
    </>
  );
}
