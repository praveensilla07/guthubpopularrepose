// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {filterButtons, onSelectLanguage, activeButtonId, isSelected} = props
  const {language} = filterButtons

  const onClickSelectLanguage = () => {
    onSelectLanguage(filterButtons.id)
    console.log(isSelected)
  }
  return (
    <li>
      <button type="button" onClick={onClickSelectLanguage}>
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
