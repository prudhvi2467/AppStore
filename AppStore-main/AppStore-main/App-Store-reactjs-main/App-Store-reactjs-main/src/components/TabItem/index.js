// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const tabButtonClassName = isActive ? 'tab-button active' : 'tab-button'
  return (
    <li className="tab-item">
      <button className={tabButtonClassName} onClick={onClickTab} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
