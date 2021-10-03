import React from 'react'
import './App.css';
import Topbar from './components/TopBar';
import NewsNotification from './components/NewsNotification.js';
import MainAndSide from './components/MainAndSide';

const NewsNotificationData = [
  {
    topic: 'HYVINVOINTI: ',
    body: 'Rajoitukset jäävät pian historiaan, mutta kaikki eivät siitä iloitse'
  },
  {
    topic: 'PÄIVÄN TIMANTTI: ',
    body: 'HS testasi suositut granolat – Ravitsemusterapeutti nosti esiin kaksi terveellisintä'
  },
  {
    adtopic: 'MAINOS: ',
    adbody: 'Lunasta kaksi viikkoa maksutonta lukuaikaa!'
  }
]


document.body.style.backgroundColor = "lightgray";

function App() {
  return (
    
    <div>
      <Topbar />
      <div style={{paddingBottom:'20px', paddingTop:'10px'}}>
                  {
        NewsNotificationData.map(element =>  <NewsNotification data={element} />)
      }
      
      </div>
      <MainAndSide />
    </div>
  );
}

export default App;
