import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import './index.css'

const EmptyContent = ({ title, subtitle, icon }) => (
  <div className="empty-content">
    <Header as='h2'>
      <Icon name={icon} />
      <Header.Content>
        {title}
        <Header.Subheader>{subtitle}</Header.Subheader>
      </Header.Content>
    </Header>
  </div>
)

export default EmptyContent
