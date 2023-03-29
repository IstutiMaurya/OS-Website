import React from 'react'
import './HomePage.css'
function HomePage() {
  return (
    <div className='HomePage'>
        <div className="Home">
          <h4 className="award">A hearty greatings from our team and </h4>
          <h1 className="title">WELCOME TO OUR  <br />O.S. PROJECT </h1>
          <p className="home">This wesite is a collection of our projects in O.S. course and our mentor is <br /> Dr.Rutvij Jhaveri. We have put our 100% to make this project Awesome.</p>
          <a href="/" className="explore">EXPLORE</a>
          <img src="Copy of Untitled designR.png" alt="Operating System" className="Frontimg" />
        </div>
        
        <p className="projecttitle">PROJECT'S OVERVIEW</p>
        {/* <div className="projectdetail">
          <img src="CircleBlue.png" alt="C1" className='C1' />
          <div className="Project1">
            <p className="headingofP1">PROJECT 1</p>
            <br />
            <p className="contentofP1">
          Preemptive Priority CPU Scheduling Algorithm is a pre-emptive method of CPU scheduling algorithm that works based 
on the priority of a process. In this algorithm, the scheduler schedules the tasks to work as per the priority, which 
means that a higher priority process should be executed first. In case of any conflict, i.e., when there is more than one 
process with equal priorities, then the pre-emptive priority CPU scheduling algorithm works on the basis of 
FCFS (First Come First Serve) algorithm.
            </p>
          </div>
        
          <img src="CirclePurple.png" alt="C2" className='C2' />
          <div className="Project2">
            <p className="headingofP2">PROJECT 2</p>
            <br />
            <p className="contentofP2">isuhfeufc fwu cwue uweg uwegfuu uu usuyuyu  iu vuf uusvu  eiu fef s wr uffuefuer uuwr rrufwriug wrrw uff wfu ruriu rg ri rg u r r ru ur gur u  ru ru guvu drud s vd e ddfdgg diu vcsf h d</p>
          </div>
          <br />
          <img src="CirclePurple.png" alt="C3" className='C3' />
          <div className="Project3">
            <p className="headingofP3">PROJECT 3</p>
            <br />
            <p className="contentofP3">isuhfeufc fwu cwue uweg uwegfuu uu usuyuyu  iu vuf uusvu  eiu fef s wr uffuefuer uuwr rrufwriug wrrw uff wfu ruriu rg ri rg u r r ru ur gur u  ru ru guvu drud s vd e ddfdgg diu vcsf h d</p>
          </div>
          <img src="CircleBlue.png" alt="C4" className='C4' />
          <div className="Project4">
            <p className="headingofP4">PROJECT 4</p>
            <br />
            <p className="contentofP4">isuhfeufc fwu cwue uweg uwegfuu uu usuyuyu  iu vuf uusvu  eiu fef s wr uffuefuer uuwr rrufwriug wrrw uff wfu ruriu rg ri rg u r r ru ur gur u  ru ru guvu drud s vd e ddfdgg diu vcsf h d</p>
          </div>
        </div> */}
        {/* <div class="card">
          <div class="card-header">
            <h2>Animated Card</h2>
          </div>
          <div class="card-body">
            <p>This is an animated card created with HTML and CSS.</p>
          </div>
        </div> */}
        {/* <div class="card">
  <div class="card-image"></div>
  <div class="card-content">
    <h2>Animated Card Design</h2>
    <p>This is another example of an animated card using HTML and CSS.</p>
    <a href="#" class="btn">Learn More</a>
  </div>
</div> */}
{/* <div class="Homecard">
  <div class="card-content">
    <h2>PROJECT 1</h2>
    <p>This is another example of an animated card using HTML and CSS, without an image.</p>
    <a href="#" class="btn">Learn More</a>
  </div>
</div> */}
<ul>
  <li>
  <div class="Homecard">
  <div class="card-content">
    <h2>PROJECT 1 </h2>
    <p> <br /> Preemptive Priority Scheduling Algorithm Project is an effort to create a simulator for the scheduling algorithm. The project includes the development of a Gantt chart and table to illustrate the behavior of the algorithm. The project aims to provide a better understanding of the algorithm and its behavior.</p>
    {/* <a href="#" class="btn">Learn More</a> */}
  </div>
  </div>
  </li>
  <li>
  <div class="Homecard">
  <div class="card-content">
    <h2>PROJECT 2  </h2>
    <p><br />Peterson Algorithm Project is a simulation of Peterson's Algorithm for mutual exclusion in concurrent systems. This project provides an animated visual representation of the algorithm, allowing users to gain a better understanding of how the algorithm works and how processes interact in a critical section. The project also includes an animation for better visualization of the algorithm.</p>
    {/* <a href="#" class="btn">Learn More</a> */}
  </div>
  </div>
  </li>
  <li>
  <div class="Homecard">
  <div class="card-content">
    <h2>PROJECT 3 </h2>
    <p> <br />The FCFS Disc Scheduling Algorithm Project is a simulator that allows users to easily visualize and understand the basic principles of the First Come First Serve (FCFS) disc scheduling algorithm. The simulator takes in user-provided data and uses it to generate a table and a graph that illustrate the scheduling of the disc. This project provides an intuitive way to explore the FCFS algorithm and gain a better understanding of how the algorithm works.</p>
    {/* <a href="#" class="btn">Learn More</a> */}
  </div>
  </div>
  </li>
  <li>
  <div class="Homecard">
  <div class="card-content">
    <h2>PROJECT 4  </h2>
    <p><br />The Optimal Page Replacement Algorithm project is an interactive simulator designed to accurately measure and compare the hit and miss ratios of various page replacement algorithms. The simulation includes tools to visualize the data in the form of table and chart,  providing a comprehensive understanding of the performance of each algorithm.</p>
    {/* <a href="#" class="btn">Learn More</a> */}
  </div>
  </div>
  </li>
</ul>





        
    </div>
  )
}

export default HomePage