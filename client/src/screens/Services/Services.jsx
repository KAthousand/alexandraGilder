import {useState} from 'react';
import MassageInfo from '../../components/MassageInfo/MassageInfo';
import "./Services.css"

import aleahiaHands from "../../assets/aleahia-hand.jpg"
import cbdIMG from "../../assets/cbd.JPG"
import cryoIMG from "../../assets/cryo.JPG"
import cupIMG from "../../assets/cupping.JPG"
import moxaIMG from "../../assets/moxa.JPG"
import infraredIMG from "../../assets/infared.JPG"
import swedishIMG from "../../assets/swedish.JPG"
import prenatalIMG from "../../assets/prenatal.JPG"

function Services(props) {
  const { visible } = props
  const [deepTissue, setDeepTissue] = useState({
    active: false,
    title: 'swedish massage',
    description: "Full body treatment sessions catered specifically to client needs with aromatherapy",
    img: swedishIMG,
    price: "60 min - $75",
    price2: "90 min - $100",
    price3: "Add Deep Tissue - $20"
  })
  const [hotStone, setHotStone] = useState({
    active: false,
    title: 'hot stone massage',
    description: 'Massage with basalt stones, hands and aromatherapy',
    img: cryoIMG,
    price: "60 min - $90",
    price2: "90 min - $120"
  })
  const [raindropTechnique, setRaindropTechnique] = useState({
    active: false,
    title: 'raindrop technique',
    description: 'Applying a blend of 7 different essential oils to the spine and bottoms of the feet helps to relieve respiratory discomfort, enhance positive emotions and relieve stress, ease muscle tensions and provide a powerful immunity boost',
    img: aleahiaHands,
    price: "90 min massage + oils - $120"
  })
  const [prenatalMassage, setPrenatalMassage] = useState({
    active: false,
    title: 'Prenatal Massage',
    description: "Customized massage therapy to support the growing body's natural transitions through childbirth",
    img: prenatalIMG,
    price: "60 min - $60",
    price2: "90 min - $90"
  })
  const [cupping, setCupping] = useState({
    active: false,
    title: 'cupping',
    description: 'Massage + cupping helps to relieve tension by creating suction in areas of need. This deep tissue effect helps promote circulation, decrease inflammation, and relieve pain',
    img: cupIMG,
    price: "Add $20 to Any Massage"
  })
  const [moxa, setMoxa] = useState({
    active: false,
    title: 'moxa',
    description: 'Moxa is a form of heat therapy in which dried plant matter is burned near the surface of your skin with intention to promote circulation and dispel certain pathogenic influences',
    img: moxaIMG,
    price: "Add $10 to Any Massage"
  })
  const [infrared, setInfrared] = useState({
    active: false,
    title: 'inrared',
    description: 'Bringing all of the benefits of an infrared sauna experience to the massage table ',
    img: infraredIMG,
    price: "Add $10 to Any Massage"
  })
  const [cryotherapyMassage, setCryotherapyMassage] = useState({
    active: false,
    title: 'cryotherapy Massage',
    description: 'Using this form of cold treatment with massage therapy helps boost the immune system response, decrease inflammation and swelling in areas of injury, and reduce pain',
    img: cryoIMG,
    price: "Add $10 to Any Massage"
  })
  const [cbdMassage, setCbdMassage] = useState({
    active: false,
    title: 'cbd massage',
    description: 'Massage with hands, forearms and CBD oil. Oil placed on joints, bottoms of feet and neck help aid with inflammation and relaxation',
    img: cbdIMG,
    price: "Add $10 to Any Massage"
  })
  
  return (
    <div className="services-container" id='services'>
      <div className="services-shape1"></div>
      <div className="services-shape2"></div>
      <div className="services-shape3"></div>
      <div className="services-shape4"></div>
      <div className="services-shape5"></div>
      <div className="services-plant1"></div>
      <div className="services-plant2"></div>
      <div className="services-content">
        <div className='services-top'>
          <button className="deep-tissue"
            onClick={() => setDeepTissue({ ...deepTissue, active: true })}>swedish</button>
          <button className="hot-stone"
            onClick={() => setHotStone({ ...hotStone, active: true })}>hot stone</button>
          <button className="raindrop-technique"
            onClick={() => setRaindropTechnique({ ...raindropTechnique, active: true })}>raindrop technique</button>
          <button className="prenatal-massage"
            onClick={() => setPrenatalMassage({ ...prenatalMassage, active: true })}>prenatal massage</button>
        </div>
        <div className={visible ? 'services-title services-title-transition' : 'services-title'}>services</div>
        <div className='services-bottom'>
          <button className="cupping"
            onClick={() => setCupping({ ...cupping, active: true })}>cupping</button>
          <button className="moxa"
            onClick={() => setMoxa({ ...moxa, active: true })}>moxa</button>
          <button className="infrared"
            onClick={() => setInfrared({ ...infrared, active: true })}>infrared</button>
          <button className="cbd-massage"
            onClick={() => setCbdMassage({ ...cbdMassage, active: true })}>cbd massage</button>
          <button className="cryotherapy-massage"
            onClick={() => setCryotherapyMassage({ ...cryotherapyMassage, active: true })}>cryotherapy massage</button>
        </div>
      </div>
      {deepTissue.active && <MassageInfo deepTissue={deepTissue} setDeepTissue={setDeepTissue} />}
      {hotStone.active && <MassageInfo hotStone={hotStone} setHotStone={setHotStone} />}
      {raindropTechnique.active && <MassageInfo raindropTechnique={raindropTechnique} setRaindropTechnique={setRaindropTechnique} />}
      {prenatalMassage.active && <MassageInfo prenatalMassage={prenatalMassage} setPrenatalMassage={setPrenatalMassage} />}
      {cupping.active && <MassageInfo cupping={cupping} setCupping={setCupping} />}
      {moxa.active && <MassageInfo moxa={moxa} setMoxa={setMoxa} />}
      {infrared.active && <MassageInfo infrared={infrared} setInfrared={setInfrared} />}
      {cbdMassage.active && <MassageInfo cbdMassage={cbdMassage} setCbdMassage={setCbdMassage} />}
      {cryotherapyMassage.active && <MassageInfo cryotherapyMassage={cryotherapyMassage} setCryotherapyMassage={setCryotherapyMassage}/>}
    </div>
  );
}

export default Services;