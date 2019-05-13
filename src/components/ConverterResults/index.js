  import React from 'react'
import { Icon, List, Message } from 'semantic-ui-react'
import './index.css'

const ConverterResults = ({ convertResult }) => (
  <div className="converter-results">
    <div className="converter-wrapper">
      {convertResult.map(({ rate, result, from, to, amount }) => (
        <Message key={rate}>
          <List size="huge" verticalAlign="middle">
            <List.Item>
              <List.Content floated="right">
                <List.Header>
                  1 {from} <Icon name="long arrow alternate right" /> {to}{' '}
                  {rate}{' '}
                </List.Header>
              </List.Content>
              <List.Content>
                <List.Header>
                  {amount} {from} <Icon name="long arrow alternate right" />{' '}
                  {to} {result}
                </List.Header>
              </List.Content>
            </List.Item>
          </List>
        </Message>
      ))}
    </div>
  </div>
)

export default ConverterResults
