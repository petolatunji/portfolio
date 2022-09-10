import './intro.css'
import Me from '../../img/me.png'

const Intro = () => {
  return (
    <div className='i'>
      <div className='ileft'>
        <div className='iLeftWrapper'>
          <h2 className='iIntro'>Hello, My name is</h2>
          <h1 className='iName'>Peter Olatunji</h1>
          <div className='iTitle'>
            <div className='iTitleWrapper'>
              <div className='iTitleItem'>Web Developer</div>
              <div className='iTitleItem'>UI/UX Designer</div>
              <div className='iTitleItem'>Backend Developer</div>
              <div className='iTitleItem'>Writer</div>
            </div>
          </div>
          <p className='iDesc'>
            I design and develop services for cutomers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
      </div>
      <div className='iright'>
        <div className='iBg'></div>
        <img src={Me} alt='' className='iImg' />
      </div>
    </div>
  )
}

export default Intro
