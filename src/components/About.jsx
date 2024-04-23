import React from 'react'

const About = ({src = "https://via.placeholder.com/215" , about }) => {
  return (
    <aside>
        <img src={src} alt= "blog logo"
 />
        <p>{about}</p>

    </aside>
  )
}

export default About