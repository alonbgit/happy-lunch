import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Loader.scss';

class Loader extends Component {

    renderLoader = () => {
        return (
            <div className="loader">
                <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </div>
                <div className="overlay"/>
            </div>

        )
    }

    render() {
        return (
            <div className="loader">
                {this.props.showLoader && this.renderLoader()}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        showLoader: state.loader.showLoader
    }
}

export default connect(mapStateToProps)(Loader);