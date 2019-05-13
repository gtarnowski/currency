import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { URLS, MENU_ITEMS } from '../../constants/urls'
import classNames from 'classnames'
import './index.css'

const NavBar = ({ location: { pathname } }) => {
  const checkIsActive = url => !!pathname.match(url)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to={URLS.HOME}>
            <Icon name="connectdevelop" size="huge" color="black" />
          </Link>
        </div>
        <div className="navbar-menu">
          {MENU_ITEMS.map(({ url, name }) => (
            <Link
              key={name}
              to={url}
              className={classNames('navbar-item', {
                active: checkIsActive(url)
              })}
            >
              {name.toLowerCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default withRouter(NavBar)
