import React, {useState} from 'react'
import './about.css'
import useCollapse from 'react-collapsed'
import Navbar from '../Navbar/Navbar'

export default function About() {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  return (
    <>
    <Navbar />
    <div className='container'>
    
    <div className='content-section'>
				<div className='title'>
					<h1>About Us</h1>
				</div>
				<div className='content'>
					<h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
          <div>
            <div className='button'>
            <a className='button'
              {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
              })}
            >
            {isExpanded ? 'Read Less' : 'Read More'}
            </a>
          </div>
      <section className='content' {...getCollapseProps()}>
        <p className='content'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In order to raise awareness about this life-saving procedure, 
          the world observes
           14th June as Blood Donor Day. It promotes 
           blood donation and urges people to save lives by donating blood.
            Furthermore, this day is quite an important day as it makes people 
            about safe blood. People need to know the basics to be able to donate blood. For instance, there are certain criteria one must fulfill to donate blood. Not everyone knows that. Thus, this day helps in doing so.            
            </p>
        </section>
    </div>
					{/* <div className='button'>
						<a href="">Read More</a>
					</div> */}
				</div>
				
			</div>
			<div className='image-section'>
        <img src='./images/a.jpeg'></img>
			</div>
      {/* <div className='Afooter'>
      <div className='social'>
					<a href=""><i className='fab fa-facebook-f'></i></a>
					<a href=""><i className='fab fa-twitter'></i></a>
					<a href=""><i className='fab fa-instagram'></i></a>
				</div>
      </div> */}
    </div>
    <footer>
    <div className='social'>
					<a href=""><i className='fab fa-facebook-f'></i></a>
					<a href=""><i className='fab fa-twitter'></i></a>
					<a href=""><i className='fab fa-instagram'></i></a>
				</div>
    </footer>
    
    </>
  )
}

