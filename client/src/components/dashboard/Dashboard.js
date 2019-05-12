import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchIdList,
  getApplicationFields,
  getBuildNameList,
  getBuildVerList,
} from '../../store/actions';
import SideBar from './SideBar';
import ResponsiveHistogramChart from '../visualisations/ResponsiveHistogramChart';

class Dashboard extends Component {
  componentDidMount() {
    // fetch application data
    this.props.fetchIdList();
    this.props.getBuildNameList();
    this.props.getBuildVerList();
    this.props.getApplicationFields();
  }

  render() {
    const { userSelected, applicationData } = this.props;
    const { selectedDataSourceDetails, selectedBuildName, selectedBuildVer } = userSelected;

    // sending rate by selected appID
    let sendingRateByAppID = selectedDataSourceDetails
      // filter out record with empty or 0 meanSendingRateKbps or with too large meanSendingRateKbps which cause the graph to look weird
      .filter(x => x.meanSendingRateKbps !== "" && parseInt(x.meanSendingRateKbps, 10) !== 0 && x.meanSendingRateKbps < 10000)
      // filter by buildName if buildName filter is set
      .filter(x => (selectedBuildName && selectedBuildName !== 'default') ? x.buildName === selectedBuildName : true)
      // filter by buildVer if buildVer filter is set
      .filter(x => (selectedBuildVer && selectedBuildVer !== 'default') ? x.buildVer === selectedBuildVer : true)
      // map to chart data DTO
      .map(x => parseFloat(x.meanSendingRateKbps));
    // parse default value if empty
    if (!sendingRateByAppID.length) { sendingRateByAppID = [0] }

    // media type by selected appID
    let mediaTypeByAppID = selectedDataSourceDetails
      // filter out record with empty mediaType which cause the graph to look weird
      .filter(x => x.mediaType !== "")
      // filter by buildName if buildName filter is set
      .filter(x => (selectedBuildName && selectedBuildName !== 'default') ? x.buildName === selectedBuildName : true)
      // filter by buildVer if buildVer filter is set
      .filter(x => (selectedBuildVer && selectedBuildVer !== 'default') ? x.buildVer === selectedBuildVer : true)
      // map to chart data DTO
      .map(x => x.mediaType.toString());
    // parse default value if empty
    if (!mediaTypeByAppID.length) { mediaTypeByAppID = ["0"] }
    
    // sending rate accross all appIDs
    let overallSendingRate = applicationData
      // filter by buildName if buildName filter is set
      .filter(x => (selectedBuildName && selectedBuildName !== 'default') ? x.buildName === selectedBuildName : true)
      // filter by buildVer if buildVer filter is set
      .filter(x => (selectedBuildVer && selectedBuildVer !== 'default') ? x.buildVer === selectedBuildVer : true)
      // map to chart data DTO
      .map(x => parseFloat(x.meanSendingRateKbps))
      // filter out record with empty or 0 meanSendingRateKbps or with too large meanSendingRateKbps which cause the graph to look weird
      .filter(x => x < 10000 && x !== 0);
    // parse default value if empty
    if (!overallSendingRate.length) { overallSendingRate = [0] }
    return (
      <div className="ui grid">
        <SideBar />
        <div className="twelve wide column">
          <div className="ui segment grid">
            <div className="ui ten wide column" style={{ height: '400px', borderRight: '1px dotted black' }}>
              <h2 className="ui header">Sending rate per AppID</h2>
              <ResponsiveHistogramChart data={sendingRateByAppID} binType='numeric' xLabel="Sending rate(Kbps)" showDensitySeries={true} />
            </div>
            <div className="ui six wide column" style={{ height: '400px' }}>
              <h2 className="ui header">Media Type Distribution</h2>
              <ResponsiveHistogramChart data={mediaTypeByAppID} binType='categorical' xLabel="Media Type" showDensitySeries={false} />
            </div>
          </div>
          <div className="ui divider"></div>
          <div className="ui segment">
            <div style={{ width: '80%', height: '450px' }}>
              <h2 className="ui header">Sending rate accross all appIDs</h2>
              <ResponsiveHistogramChart data={overallSendingRate} binType='numeric' xLabel="Sending rate(Kbps)" showDensitySeries={true} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userSelected: state.userSelected,
    applicationData: state.applicationData.data,
  };
};

export default connect(
  mapStateToProps,
  {
    fetchIdList,
    getApplicationFields,
    getBuildNameList,
    getBuildVerList,
  }
)(Dashboard);
