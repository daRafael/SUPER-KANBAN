import './AboutPage.css'

export default function AboutPage() {

  return (
    <div className="background">
      <div className="about-container">
        <div className="profiles-container">

          <div className="first-profile-container">
            <div className="profile-img-container">
              <img src="https://placehold.co/400" alt="" />
            </div>
            <div className="autor-container">
              <div className="author-name">
                <h2>Rafael Guerra</h2>
              </div>
              <div className="author-description">
                <p></p>
              </div>
            </div>
          </div>

          <div className="second-profile-container">
            <div className="profile-img-container">
              <img src="https://placehold.co/400" alt="" />
            </div>
            <div className="autor-container">
              <div className="author-name">
                <h2>Edir Sequeira</h2>
              </div>
              <div className="author-description">
                <p>Thank you!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="final-description-container">
          <div className="final-description">
            <p></p>
          </div>
          <div className="thank-you">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}