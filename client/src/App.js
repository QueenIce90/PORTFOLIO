import React, { useEffect } from 'react';
import './index.css';


function App() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxL2RZjYuRHyXbuKf82Ud_zM3OkoiKpXqW0OFZ4hcEgheSEnK5M5aNgA1jUNF_dafcY/exec';
  
  useEffect(() => {
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById('msg');
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          msg.innerHTML = "Message sent successfully"
          setTimeout(() => {
            msg.innerHTML = "";
          }, 5000)
          form.reset()
        })
        .catch(error => console.error('Error!', error.message));
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
      // Cleanup: remove the event listener when the component unmounts
      form.removeEventListener('submit', handleSubmit);
    };
  }, [scriptURL]);

  function opentab(tabname, clickEvent) {
    let tablinks = document.getElementsByClassName('tab-links');
    let tabcontents = document.getElementsByClassName('tab-contents');

    for (let link of tablinks) {
      link.classList.remove('active-link');
    }
    for (let content of tabcontents) {
      content.classList.remove('active-tab');
    }

    clickEvent.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
  }

  function openmenu() {
    document.getElementById('sidemenu').style.right = '0';
    document.getElementById('sidemenu').style.transition = '0.5s';
    document.getElementById('header').style.transition = '0.5s';
  }

  function closemenu() {
    document.getElementById('sidemenu').style.right = '-200px';
    document.getElementById('sidemenu').style.transition = '0.5s';
    document.getElementById('header').style.transition = '0.5s';
  }
  return (
    <>
      <div id='header'>
        <div className='container'>
          <nav className='navbar'>
            <img src="/logo1.png" className='logo' alt='logo' />
            <ul id='sidemenu'>
            <li><a href='#header'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#services'>Services</a></li>
              <li><a href='#projects'>Projects</a></li>
              <li><a href='#contact'>Contact</a></li>
              <i class="fas fa-times" onClick={() => closemenu()}></i>
            </ul>
            <i class="fa-solid fa-bars" onClick={() => openmenu()} style={{color: 'white'}}></i>
          </nav>
          <div className='header-text'>
            <p>Hi There, I'm</p>
            <h1>Isamar Banos</h1>
            <p>Full Stack Developer</p>
          </div>
        </div>
      </div>

      <div id='about'>
        <div className='container'>
          <div className='row'>
            <div className='about-col-1'>
              <img className='logo-pic' src='logo121.png' alt='Isamar Logo' />
            </div>
            <div className='about-col-2'>
              <h1 className='sub-title'> About Me</h1>
              <p>I'm a New York City-based software engineer
                passionate about turning innovative ideas into scalable solutions. 
                With expertise in programming and a commitment to continuous learning, 
                I bring a deep understanding of various technologies. 
                As a collaborative team player, I enjoy contributing to meaningful projects. 
                Let's connect and discuss how my skills can contribute to your next endeavor!
              </p>

              <div className='tab-titles'>
                {/* Use onClick with a function instead of a string */}
                <p className='tab-links active-link' onClick={(e) => opentab('skills', e)}>Skills</p>
                <p className='tab-links' onClick={(e) => opentab('experience', e)}>Experience</p>
                <p className='tab-links' onClick={(e) => opentab('education', e)}>Education</p>
              </div>
              <div className='tab-contents active-tab' id='skills'>
                <ul>
                  <li><span>Problem-Solving</span><br />Adept at creative problem-solving and logical thinking.</li>
                  <li><span>Programming Proficiency</span><br />Skilled coder with expertise in multiple languages</li>
                  <li><span>Continuous Learning</span><br />Enthusiastic about continuous learning, with a knack for rapidly embracing and integrating new technologies.</li>
                </ul>
              </div>
            <div className='tab-contents' id='experience'>
              <ul>
                <li><span>Flatiron School Bootcamp (2023-2024)</span><br/> Completed full-stack bootcamp, proficient in React, Ruby on Rails, and JavaScript. <br/>Deployed multiple web applications.</li>
                <li><span>Nature's Love Touch - E-Commerce Platform (2019-2024)</span><br/>Led secure e-commerce platform development</li>
                <li><span>Flatiron School Alumni Network (Ongoing)</span><br/>Actively engaged in alumni community.</li>
            
              </ul>
            </div>
            <div className='tab-contents' id='education'>
              <ul>
                <li><span>2023-2024</span><br/>Software Engineer Certification</li>
                <li><span>2013-2014</span><br/>Medical Assistant Certification</li>
                <li><span>2010-2010</span><br/>High School Diploma</li>
              </ul>
            </div>            
          </div>
          </div>
  
      </div>
      </div>
      <div id="services">
  <div className='container'>
    <h1 className='sub-title'>My Services</h1>
    <div className="services-list">
      
      <div className="service-item">
      <i class="fa-solid fa-code"></i>
        <h2 className='service-title'>Software Development</h2>
        <p className='service-desc'>Designing, coding, testing, and <br/> maintaining software applications.</p>
        <p>Developing custom solutions  <br/> tailored to the specific requirements of clients or projects.</p>
        <a href="#software-development">Learn more</a>
      </div>

      <div className="service-item">
      <i class="fa-brands fa-webflow"></i>
        <h2 className='service-title'>Web Development</h2>
        <p className='service-desc'>Implementing frontend and backend functionality using technologies like HTML, CSS, JavaScript, and various backend frameworks.</p>
        <p>Creating and maintaining websites, web applications, and web services.</p>
        <a href="#web-development">Learn more</a>
      </div>

    
      <div className="service-item">
      <i class="fa-brands fa-app-store"></i>
        <h2 className='service-title'>Mobile App Development</h2>
        <p>Building mobile applications for iOS, Android, or cross-platform using frameworks like React Native or Flutter.</p>
        <a href="#mobile-app-development">Learn more</a>
      </div>
      
      <div className="service-item">
      <i class="fa-solid fa-database"></i>
        <h2 className='service-title'>Database Design and Management</h2>
        <p>Designing database structures and <br/> ensuring efficient data storage and retrieval.</p>
        <a href="#database-design">Learn more</a>
      </div>
      
      <div className="service-item">
      <i class="fa-solid fa-wrench"></i>
        <h2 className='service-title'>Maintenance and Support</h2>
        <p className='service-desc'>Debugging and fixing issues that arise after deployment.</p>
        <p>Providing ongoing support and <br/> maintenance for software applications.</p>
        <a href="#software-development">Learn more</a>
      </div>

      <div className="service-item">
      <i class="fa-solid fa-code"></i>
        <h2 className='service-title'>System Architecture</h2>
        <p className='service-desc'>Designing the overall structure and architecture of software systems.</p>
        <p>Ensuring scalability, reliability, and maintainability of systems.</p>
        <a href="#software-development">Learn more</a>
      </div>
    </div>
  </div>
</div>

{/* -------------- Projects------------- */}

<div id="projects">
  <div className="container">
    <h1 className="sub-title">Projects</h1>

    <div className='btn-container'>
      <h3>Collaborative Projects with Fabolous People</h3>
      <a href="#projects" className='btn-12'>Schmooze</a>
      <a href="https://github.com/ian-a-frankel/schmooze/tree/Isamar"> <i class="fa-brands fa-github"></i></a>
      <h6> Ian Frankel<i class="fa-solid fa-person-circle-check"></i> <br/> Khrystyna Klapushchak<i class="fa-solid fa-person-circle-check"></i> <br/> Patnaree Johnson <i class="fa-solid fa-person-circle-check"></i></h6>


      <a href="#projects" className='btn-12'>Road Rage</a>
      <a href="https://github.com/Shokuninja/road-rage"> <i class="fa-brands fa-github"></i></a>
      <h6> Tom Marku <i class="fa-solid fa-person-circle-check"></i><br/> Lohan Myles <i class="fa-solid fa-person-circle-check"></i></h6>
          
      
      <a href="#projects" className='btn-12'>Crystal Harmony</a>
      <a href="https://github.com/KhrystynaKla/Crystal-Harmony-Project"> <i class="fa-brands fa-github"></i></a>
      <h6> Khrystyna Klapushchak <i class="fa-solid fa-person-circle-check"></i> <br/> Patnaree Johnson <i class="fa-solid fa-person-circle-check"></i></h6>
      
    </div>


    <div className="project-list">  
    {/* above is under work-list */}
      <div className="project-item">
        {/* above is under work */}
        <img className='project-img' src='holistic.gif' alt="holistic"/>
        <div className='project-info'>
          {/* this above is under layer */}
        <h3>Holistic Wellness Bot (AI)</h3>
        <p>Focuses on promoting a holistic approach to well-being</p>
        
        {/* <i class="fa-solid fa-arrow-up-right-from-square"></i> */}
        <a href="https://github.com/QueenIce90/HolisticWellnessBot"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>

  <div className="project-item">
  <img className='project-img' src='schmooze.png' alt="schmooze"/>
  <div className='project-info'>
  <h3>Schmooze</h3>
  <p>Schmooze provides a vibrant space for engaging discussions.</p>
  {/* <h5>Collaborative</h5> 
  <h6> Khrystyna Klapushchak</h6>
  <h6> Patnaree Johnson</h6>
  <h6> Ian Frankel</h6> */}
  {/* <i class="fa-solid fa-arrow-up-right-from-square"></i> */}
  
  <a href="https://github.com/ian-a-frankel/schmooze/tree/Isamar"><i class="fa-brands fa-github"></i></a>
  </div>
</div>



        <div className="project-item">
        <img className='project-img'src='roadragegame.png' alt="roadrage"/>
        <div className='project-info'>
        
        <h3>Road Rage Pygame</h3>
        <p>Embark on a journey through the intensity of road rage. Pygame</p>
        
        {/* <h5>Collaborative</h5> 
          <h6> Tom Marku</h6>
          <h6> Lohan Myles</h6> */}

        
          {/* <i class="fa-solid fa-arrow-up-right-from-square"></i> */}
          <a href="https://github.com/Shokuninja/road-rage"> <i class="fa-brands fa-github"></i></a>
        </div>
      </div>
      
      


    <div className="project-item">
        <img className="project-img" src='CrystalHarmony.png' alt="crystal-harmony"/>
        <div className='project-info'>
        <h3>Crystal Harmony Project</h3>
        <p>Our shop curates an exquisite collection of crystals with its own story and energy.</p>

        {/* <h5>Collaborative</h5> 
          <h6> Khrystyna Klapushchak</h6>
          <h6> Patnaree Johnson</h6> */}
<a href="https://github.com/KhrystynaKla/Crystal-Harmony-Project"> <i class="fa-brands fa-github"></i></a>
        </div>
      </div>  
      </div>
    </div>


  

    {/* <div>
      <a href="#projects" className='btn'>See more</a>
      </div> */}
  </div>



  {/* -------------CONTACT--------------- */}

  <div id="contact">
    <div className="container">
      <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p><i class="fa-solid fa-paper-plane"></i>Isamarcareerprospect@gmail.com</p>
            <p><i class="fa-solid fa-phone"></i> +1 917-657-7660</p>
            <div className="social-icons">

  <a href="https://www.linkedin.com/in/queenice90/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
  <a href="https://github.com/QueenIce90" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
  <a href="https://twitter.com/queenice90" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
  <a href="https://www.instagram.com/queenice90/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
  <a href="https://www.facebook.com/queenice90" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
</div>
<div>
  <a href="/seresume1.pdf" download className="btn btn2">
  Download CV
</a>
</div>
</div>
      
          <div className='contact-right'>
          <form name='submit-to-google-sheet' method="POST" data-netlify="true">
            <input type="text" name="Name" placeholder="Your Name" required/>
            <input type="email" name="Email" placeholder="Your Email" required/>
            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
            <button type="submit" className="btn btn2">Submit</button>
          </form>
          <span id="msg"></span>

          </div>
        </div>
        <div className='copyright'>
          <p>Copyright © 2024. Made with <i class="fa-solid fa-heart"></i> All rights reserved. </p>
        </div>
    </div>
  </div>


      </>
  );
}

export default App;
