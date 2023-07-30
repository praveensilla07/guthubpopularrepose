import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepose extends Component {
  state = {
    fetchedData: [],
    isLoading: false,
    activeButtonId: 'ALL',
  }

  componentDidMount() {
    this.getPopularRepos(languageFiltersData[0].id)
  }

  getPopularRepos = async activeButtonId => {
    this.setState({isLoading: true})

    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeButtonId}`,
    )
    const data = await response.json()

    const orderedData = data.popular_repos.map(eachItem => ({
      imgUrl: eachItem.avatar_url,
      id: eachItem.id,
      name: eachItem.name,
      forksCount: eachItem.forks_count,
      starsCount: eachItem.stars_count,
      issuesCount: eachItem.issues_count,
    }))

    this.setState({fetchedData: orderedData, isLoading: false})
  }

  onSelectLanguage = buttonId => {
    const {activeButtonId} = this.state
    this.setState({activeButtonId: buttonId}, () => {
      console.log(activeButtonId) // Log the updated state value inside the callback
    })

    this.getPopularRepos(buttonId) // Pass buttonId to the getPopularRepos function
  }

  render() {
    const {fetchedData, isLoading, activeButtonId} = this.state
    return (
      <div className="main-container">
        <h1 className="h1">Popular</h1>
        <ul>
          {languageFiltersData.map(button => (
            <LanguageFilterItem
              key={button.id}
              filterButtons={button}
              onSelectLanguage={this.onSelectLanguage}
              isSelected={button.id === activeButtonId}
            />
          ))}
        </ul>
        {isLoading ? (
          <div className="products-loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
          </div>
        ) : (
          <ul className="fetched-content">
            {fetchedData.map(item => (
              <RepositoryItem key={item.id} repositoryItemDetails={item} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepose
