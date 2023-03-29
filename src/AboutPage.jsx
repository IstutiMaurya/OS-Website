import React from 'react'
import './AboutPage.css'
const AboutPage = () => {
  return (
    <div className='Aboutpage'> 
     <h1>OUR OS PROJECT</h1>
     <h4>This web portal is to demonstrate our Operating system project, <br /> On which our whole team has worked with great enthusiam.</h4>
     <button type='button' className='AboutButton' >EXPLORE
      
     </button>
     <img className='Circle1' src="Circle1.png" alt="circle1" />
     <img className='Circle2' src="Circle2.png"  alt="circle2" />
     {/* <h2>OUR TEAM</h2> */}
     <style>
        @import url('https://fonts.googleapis.com/css2?family=Play&display=swap');
    </style>
    <div class="wrapper ten">
        <div>
            <h3 class="bounce">
                <span>O</span>
                <span>U</span>
                <span>R</span>
                &nbsp;&nbsp;&nbsp;
                <span>T</span>
                <span>E</span>
                <span>A</span>
                <span>M</span>
            </h3>
        </div>
    </div>
    <div class="row">
  <div class="column">
    <img src="haritwebsitepicR.png" alt="Snow" width={205}/>
  </div>
  <div class="column">
    <img src="karanwebsitepicR.png" alt="Forest"  width={187}/>
  </div>
  <div class="column">
    <img src="manyawebsitepicR.png" alt="Mountains" width={195} />
  </div>
</div>
<ul className='row1'>
      
      <li>HARIT DOBARIYA</li>
      <li>KARAN DATTANI</li>
      <li>MANYA SOLANKI</li>
      


    </ul>
    <div class="rowf">
  <div class="columnf">
    <img src="hetviwebsitepicR.png" alt="Snow" width={199}/>
  </div>
  <div class="columnf">
    <img src="istutiwebsitepicR.png" alt="Forest"  width={220 } />
  </div>
  <div class="columnf">
    <img src="gungunwebsitepicR.png" alt="Mountains" width={210} />
  </div>
</div>
    <ul className='row2'>
      <li>HETVI PRAJAPATI</li>
      <li>ISTUTI MAURYA</li>
      <li>GUNGUN KASERA</li>
    </ul>
     </div>
     
  
  )
}

export default AboutPage