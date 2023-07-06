// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard
  return (
    <li className={`${className} banner-card`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="desc">{description}</p>
        <button className="banner-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
