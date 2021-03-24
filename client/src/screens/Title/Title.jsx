import {useEffect, useState} from 'react';
import RainbowBackground from '../../components/RainbowBackground/RainbowBackground';
import "./Title.css"

function Title(props) {
  const [colors, setColors] = useState(false);
  useEffect(() => {
    setTimeout(() => setColors(!colors), 10000);
  }, [colors])
  
  const firstName = 'ALEXANDRA';
  const lastName= 'GILDER'
  let delay = 500;
  let key = 0


  return (
    <div className="title-container" id='title'>
      <div className="title-content">
        <div className='name'>
          <div className='first-name'>
            {firstName.split('').map((letter) => {
              delay += 150;
              key += 1;
              return <h1 style={{animationDelay:`${delay}ms`}} key={ key }>{letter}</h1>
            })
          }
          </div>
          <div className='last-name'>
            {
              lastName.split('').map((letter) => {
                delay += 150;
                key += 1;
                return <h1 style={{ animationDelay: `${delay}ms` }} key={ key }>{letter}</h1>
              
            })
          }
          </div>
        </div>
        <div className='subtitle'>
            <h2>LICENSED MASSAGE THERAPIST</h2>
          </div>
      </div>
      <div className="rainbow-container">
        <RainbowBackground colors={colors}/>
      </div>
    </div>
  );
}

export default Title;