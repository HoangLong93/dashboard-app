import React, { Component }  from 'react';
import { connect } from 'react-redux';
import {
    fetchDataSource,
    setFilterBuildName,
    setFilterBuildVer,
  } from '../../store/actions';
import { FETCH_DATA_SOURCE, SET_BUILDNAME_FILTER, SET_BUILDVER_FILTER } from '../../store/actions/types';
class SideBar extends Component {
    handleChange(value, fieldName) {
      // fetch new data source base on selected appID
      if (fieldName === FETCH_DATA_SOURCE) {
        this.props.fetchDataSource(value);
      }
      // set filter on buildName
      if (fieldName === SET_BUILDNAME_FILTER) {
        this.props.setFilterBuildName(value);
      }
      // set filter on buildVer
      if (fieldName === SET_BUILDVER_FILTER) {
        this.props.setFilterBuildVer(value);
      }
    }

    render() {
        const { idList, buildNameList, buildVerList } = this.props;
        const idListOptions = idList.map((source, index) => {
          return <option key={index} value={source.appID}>{source.appID}</option>;
        });
        const buildNameListOptions = buildNameList.map((build, index) => {
          return <option key={index} value={build.buildName}>{build.buildName}</option>;
        });
        const buildVerListOptions = buildVerList.map((build, index) => {
          return <option key={index} value={build.buildVer}>{build.buildVer}</option>;
        });
        return (
            <div className="four wide column">
                <div className="ui secondary vertical pointing fluid form" style={{ width: '300px' }}>
                    <div className="field">
                        <label>Select Source Id</label>
                        <select defaultValue="default" id="selectSource"
                            onChange={(ev) => this.handleChange(ev.target.value, FETCH_DATA_SOURCE)}>
                            <option value="default">Select Source ID</option>
                            {idListOptions}
                        </select>
                    </div>
                    <div className="field">
                        <label>Select Build</label>
                        <select defaultValue="default" id="selectBuildName"
                            onChange={(ev) => this.handleChange(ev.target.value, SET_BUILDNAME_FILTER)}>
                            <option value="default">Select Build</option>
                            {buildNameListOptions}
                        </select>
                    </div>
                    <div className="field">
                        <label>Select Build Version</label>
                        <select defaultValue="default" id="selectBuildVer"
                            onChange={(ev) => this.handleChange(ev.target.value, SET_BUILDVER_FILTER)}>
                            <option value="default">Select Build</option>
                            {buildVerListOptions}
                        </select>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
  return {
    idList: Object.values(state.filterOptions.idList),
    buildNameList: Object.values(state.filterOptions.buildNameList),
    buildVerList: Object.values(state.filterOptions.buildVerList),
  };
};

export default connect(
    mapStateToProps,
    {
      fetchDataSource,
      setFilterBuildName,
      setFilterBuildVer,
    }
  )(SideBar);
