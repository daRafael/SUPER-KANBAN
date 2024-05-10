import './AboutPage.css'

export default function AboutPage() {

  return (
    <div className="background">
      <div className="about-container">
        <div className='about-us-title'>
          About
        </div>
        <div className='about-us-info-container'>
          <div className="profiles-container">

            <div className="profile-container">
              <div className="profile-img-container">
                <img className='profile-img' src="/images/rafael-profile.png" alt="rafael-profile" />
              </div>
              <div className="author-container">
                <div className="author-name">
                  Rafael Guerra
                </div>
                <div className="author-links">
                  <div className='links-container'>
                    <a href="https://github.com/daRafael" target='/blank'>
                      <img className='link-logos' src='/images/github-logo.png' alt='github-img'/>
                    </a>
                    <a href="https://linkedin.com/in/rafael-guerra-full-stack-developer" target='/blank'>
                      <img className='link-logos' src='/images/linkedin-logo.png' alt='linkedin-logo'/>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-container">
              <div className="profile-img-container">
                <img className='profile-img' src="/images/edir-profile.jpg" alt="edir-profile" />
              </div>
              <div className="author-container">
                <div className="author-name">
                  Edir Sequeira
                </div>
                <div className="author-links">
                  <div className='links-container'>
                    <a href="https://github.com/ejcsequeira" target='/blank'>
                      <img className='link-logos' src='/images/github-logo.png' alt='github-img'/>
                    </a>
                    <a href="https://linkedin.com/in/edir-sequeira/" target='/blank'>
                      <img className='link-logos' src='/images/linkedin-logo.png' alt='linkedin-logo'/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-description-container">
            <div className="about-description">
              <div>We are proud to present...<br/>SUPER KANBAN!</div>
              A project marks our journey at IronHack, representing our second project in the bootcamp and our first dive into React. We used dnd-kit, a package used to build a fully fleshed out drag-and-drop feature. It was challenging, but very satisfying when we got it working. That being said, we sincerely hope you enjoy exploring it!
            </div>
            <div className='thank-you'>
              Thank you!
            </div>
          </div>

        </div>     
      </div>
    </div>
  )
}