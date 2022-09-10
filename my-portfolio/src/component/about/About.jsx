import './about.css'

const About = () => {
  return (
    <div className='a'>
      <div className='aLeft'>
        <div className='aCardBg'></div>
        <div className='aCard'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSutWf46QS-bREjBSa769T-HExc5pw8qF62gQ&usqp=CAU'
            alt=''
            className='aImg'
          />
        </div>
      </div>
      <div className='aRight'>
        <h1 className='aTitle'>About Me</h1>
        <p className='aSub'>
          It is a established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className='aDesc'>
          A highly motivated individual with proven technical skills in the
          field of Mechanical Engineering and web development seeking
          opportunities to improve my skills, proffer innovative solutions and
          build corporate relationships that accelerate corporate growth.
        </p>
      </div>
    </div>
  )
}

export default About
