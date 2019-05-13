// @flow
import React from 'react'
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from 'recharts'
import './index.css'

const Chart = ({ data }: any) => (
  <div className="chart-container">
    <LineChart
      width={1100}
      height={500}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="rate" stroke="#8884d8" />
    </LineChart>
  </div>
)

Chart.defaultProps = {
  data: []
}

export default Chart
