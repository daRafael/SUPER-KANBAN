import './AboutPage.css'

export default function AboutPage() {

  return (
    <div className="background">
      <div className="about-container">
        <div className="profiles-container">

          <div className="profile-container">
            <div className="profile-img-container">
              <img className='profile-img' src="https://placehold.co/400" alt="" />
            </div>
            <div className="autor-container">
              <div className="author-name">
                <h2>Rafael Guerra</h2>
              </div>
              <div className="author-description">
                <div className='logo-container'>
                  <a href="https://github.com/daRafael" target='/blank'>
                    <img src="" alt="" className='logo-img' />
                  </a>
                  <a href="https://www.linkedin.com/in/rafael-guerra-full-stack-developer/" target='/blank'>
                    <img src="" alt="" className='logo-img' />
                  </a>
                </div>
                <div>
                  <p>
                    IronHack Bootcamp
                    <br />
                    <br />
                    Course: Web Developing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-container">
            <div className="profile-img-container">
              <img className='profile-img' src="https://placehold.co/400" alt="" />
            </div>
            <div className="autor-container">
              <div className="author-name">
                <h2>Edir Sequeira</h2>
              </div>
              <div className="author-description">
                <div className='logo-container'>
                  <a href="https://github.com/ejcsequeira" target='/blank'>
                    <img src="" alt="" className='logo-img' />
                  </a>
                  <a href="https://www.linkedin.com/in/edir-sequeira" target='/blank'>
                    <img src="" alt="" className='logo-img' />
                  </a>
                </div>
                <div>
                  <p>
                    IronHack Bootcamp
                    <br />
                    <br />
                    Course: Web Developing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="final-description-container">
          <div className="final-description">
            <p>It is a long established fact that a
              reader will be distracted by the readable
              content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here',
              making it look like readable English.
              Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text,
              and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose
              (injected humour and the like).</p>
          </div>
          <div className="thank-you">
            <p>Thank you!</p>
          </div>
        </div>
      </div>
    </div>
  )
}