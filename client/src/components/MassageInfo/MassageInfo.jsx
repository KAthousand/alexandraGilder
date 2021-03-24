
import "./MassageInfo.css"

function MassageInfo(props) {
  const {
    deepTissue, setDeepTissue,
    hotStone, setHotStone,
    raindropTechnique, setRaindropTechnique,
    prenatalMassage, setPrenatalMassage,
    cupping, setCupping,
    cryotherapyMassage, setCryotherapyMassage,
    moxa, setMoxa,
    infrared, setInfrared,
    cbdMassage, setCbdMassage
  } = props

  let massageType;

  if (deepTissue) {
    massageType = deepTissue;
  } else if (hotStone) {
    massageType = hotStone;
  } else if (raindropTechnique) {
    massageType = raindropTechnique;
  } else if (prenatalMassage) {
    massageType = prenatalMassage
  } else if (cupping) {
    massageType = cupping
  } else if (cryotherapyMassage) {
    massageType = cryotherapyMassage
  } else if (infrared) {
    massageType = infrared
  } else if (moxa) {
    massageType = moxa
  } else if (cbdMassage) {
    massageType = cbdMassage
  }
    

  return (
    <div className='info-container'>
      <div className='info-content-background'>
        <div className='exit-button-container'>
          <button onClick={() => {
            if (massageType === deepTissue) {
              setDeepTissue({ ...deepTissue, active: false });
            } else if (massageType === hotStone) {
              setHotStone({ ...hotStone, active: false });
            } else if (massageType === raindropTechnique) {
              setRaindropTechnique({...raindropTechnique, active: false});
            } else if (massageType === prenatalMassage) {
              setPrenatalMassage({ ...prenatalMassage, active: false });
            } else if (massageType === cupping) {
              setCupping({...cupping, active: false});
            } else if (massageType === cryotherapyMassage) {
              setCryotherapyMassage({...cryotherapyMassage, active: false});
            } else if (massageType === infrared) {
              setInfrared({...infrared, active: false});
            } else if (massageType === moxa) {
              setMoxa({...moxa, active: false});
            } else if (massageType === cbdMassage) {
              setCbdMassage({ ...cbdMassage, active: false });
            }
          }}>X</button>
        </div>
        <div className="info-title">
          <h1>{massageType.title}</h1>
        </div>
        <div className='info-description'>
          <div className='description-img' style={{backgroundImage: `url(${massageType.img})`}}>
          </div>
          <div className='description-text'>
            <p>{massageType.description}</p>
          </div>
          <div className='description-price'>
            <p>{massageType.price}</p>
            <p>{massageType.price2}</p>
            <p>{massageType.price3}</p>
          </div>
        </div>
        <div className='shape1'></div>
        <div className='shape2'></div>
        <div className='plant1'></div>
      </div>
    </div>
  );
}

export default MassageInfo;