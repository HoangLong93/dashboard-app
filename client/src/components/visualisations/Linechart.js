import React from 'react';
import PropTypes from 'prop-types';
import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from 'react-vis';

const LineChart = (props) => {
  return (
    <div>
      <XYPlot width={600} height={450}
        margin={{ left: 100, right: 50, top: 50, bottom: 50 }}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis />
        <YAxis />
        <ChartLabel
          text="Record No"
          includeMargin={false}
          xPercent={0.025}
          yPercent={1.25}
        />

        <ChartLabel
          text="meanSendingRateKbps"
          className="alt-y-label"
          includeMargin={false}
          xPercent={-0.15}
          yPercent={0.06}
          style={{
            transform: 'rotate(-90)',
            textAnchor: 'end'
          }}
        />
        <LineSeries
          className="first-series"
          data={props.data}
        />
      </XYPlot>
    </div>
  );
}

LineChart.propTypes = {
  data: PropTypes.array,
}
export default LineChart;