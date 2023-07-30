// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {repositoryItemDetails} = props
  const {
    imgUrl,
    name,
    forksCount,
    starsCount,
    issuesCount,
  } = repositoryItemDetails
  return (
    <li className="item-container ">
      <img className="img" src={imgUrl} alt={name} />
      <h1>{name}</h1>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="img-icon"
        />
        <p>{starsCount}</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="img-icon"
        />
        <p>{forksCount}</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="img-icon"
        />
        <p>{issuesCount}</p>
      </div>
    </li>
  )
}
export default RepositoryItem
