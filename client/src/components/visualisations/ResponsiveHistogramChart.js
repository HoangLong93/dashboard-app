import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Histogram, DensitySeries, BarSeries, withParentSize, XAxis, YAxis } from '@data-ui/histogram';

const ResponsiveHistogram = withParentSize(({ parentWidth, parentHeight, ...rest }) => (
  <Histogram
    width={parentWidth}
    height={parentHeight * 0.95}
    {...rest}
  />
));

class ResponsiveHistogramChart extends Component {
  render() {
    return (
      <ResponsiveHistogram
        ariaLabel="My histogram of ..."
        orientation="vertical"
        cumulative={false}
        normalized={false}
        binCount={10}
        valueAccessor={datum => datum}
        binType={this.props.binType}
        margin={{ top: 32, right: 32, bottom: 64, left: 50 }}
        renderTooltip={({ event, datum, data, color }) => (
          <div>
            <strong style={{ color }}>{datum.bin0} to {datum.bin1}</strong>
            <div><strong>count </strong>{datum.count}</div>
            <div><strong>cumulative </strong>{datum.cumulative}</div>
            <div><strong>density </strong>{datum.density}</div>
          </div>
        )}
      >
        <BarSeries
          animated
          rawData={this.props.data}
        />

        {this.props.showDensitySeries ?
        <DensitySeries
          stroke="#e64980"
          showArea={false}
          smoothing={0.01}
          kernel="parabolic"
          rawData={this.props.data}
        />
        : null}
        <XAxis label={this.props.xLabel} />
        <YAxis />
      </ResponsiveHistogram>
    );
  }
}


ResponsiveHistogramChart.propTypes = {
  data: PropTypes.array.isRequired,
  binType: PropTypes.string.isRequired,
  xLabel: PropTypes.string,
  showDensitySeries: PropTypes.bool.isRequired,
}
export default ResponsiveHistogramChart;