import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as haikuActions from '../../actions/haiku-actions';
import * as runtimeActions from '../../actions/runtime-actions';
import Navbar from '../navbar/Navbar';
import HaikuList from '../haiku-list/HaikuList';
import ErrorBar from '../error-bar/ErrorBar';

if (typeof window !== 'undefined') {
    require('./app.scss');
}

class App extends React.Component {
    render() {
        const { haikus, runtime, dispatch } = this.props;

        let errorBar = null;

        if (runtime.error) {
            errorBar = <ErrorBar 
                error={runtime.error} 
                {...bindActionCreators(runtimeActions, dispatch)} 
            />
        }

        return (
            <div className="app">
                <Navbar 
                    {...bindActionCreators(haikuActions, dispatch)} 
                    {...bindActionCreators(runtimeActions, dispatch)}
                />
                {errorBar}
                <HaikuList 
                    haikus={haikus} 
                    loading={runtime.loading} 
                    {...bindActionCreators(haikuActions, dispatch)} 
                />
            </div>
        );
    }
};

let mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(App);