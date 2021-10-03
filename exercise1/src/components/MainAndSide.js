import React from "react";
import SideSection from './SideSection';
import MainSection from './MainSection';

const MainSectionData = [
    {
      news: 'Tunnettu koreografi loukkaantui Hyvinkään lento-onnettomuudessa – Ilmailuharrastaja kertoo, mitä turmalennosta tähän mennessä tiedetään.',
      maintopic: 'HS Hyvinkää',
      image: 'onnettomuus.png'
    },
    {
      news: 'Poliisi: Göteborgin kerros­talon räjähdyksen syy ei ollut ”luonnollinen” – ainakin 16 ihmistä joutui sairaalaan.',
      maintopic: 'Ruotsi',
      image: 'kerrostalo.png'
    },
    {
      news: 'Kokoomus väläytti välikysymystä, jollei hallitus korjaa poliisin rahoitusta, Marin lupasi, että resurssit turvataan – suora lähetys eduskunnan budjettikeskustelusta juuri nyt.',
      maintopic: 'Eduskunta',
      image: 'eduskunta.png'
    }
  ]
  
  const SideSectionData = [
    {
      sidetitle: 'Koronavirus',
      sidebody: 'Korona­koordinaatio­ryhmä: Etä­työ­suositus päättyy pää­kaupunki­­seudulla loka­kuun puolessa­välissä.'
    },
    {
      sidetitle: 'Eläimet',
      sidebody: 'Stressaantuneet rotat pakenevat Helsingin suuria työmaita ja nousevat kaduille: ”Kolme rottaa lähti tulemaan suoraan minua kohti”.'
    },
    {
      sidetitle: 'Holokausti',
      sidebody: 'Saksassa 96-vuotiasta naista syytetään osallisuudesta yli 10 000 ihmisen murhaamiseen, nainen työskenteli teini-ikäisenä keskitysleirin sihteerinä.'
    },
    {
      sidetitle: 'Salibandy',
      sidebody: 'Korona muokkaa salibandyn MM-turnausta – Viro ja Filippiinit korvaavat Australian ja Japanin joukkueet.'
    },
    {
      sidetitle: 'Perhe',
      sidebody: 'Näytätkö ihan puolisoltasi? Etsimme kuvattavaksi keskenään samannäköisiä pariskuntia'
    },
    {
      sidetitle: 'Palvelut',
      sidebody: 'Palta: Palvelualojen toipuminen koronasta yhä pahasti kesken'
    }
  ]

export default function News() {

    return (
            
      <div className={'newsies'}>
      <div style={{display:'flex', flexDirection:'row'}}>
      <div style={{display:'flex', flexDirection:'column'}}>
      {
        MainSectionData.map(element =>  <MainSection data={element} />)
      }</div>
      <div style={{display:'flex', flexDirection:'column'}}>
        <div style={{fontSize:'30px', fontWeight:'700', paddingTop:'10px', paddingLeft:'20px', backgroundColor:'white', marginLeft:'15px', marginRight:'250px'}}>
          Luetuimmat</div>
      {
        SideSectionData.map(element =>  <SideSection data={element} />)
      }
      </div>
      </div>
      </div>
    )
}