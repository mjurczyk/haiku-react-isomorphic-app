import React from 'react';
import HaikuItem from '../haiku-item/HaikuItem';

if (typeof window !== 'undefined') {
    require('./haiku-list.scss');
}

const END_OF_RESULTS = 'end of results';
const LOADING = 'loading ...';

class HaikuList extends React.Component {
    renderLoadingStamp() {
        return (
            <div className="list-stamp">
                <i className="fa fa-circle-o-notch fa-spin"></i>
                {LOADING}
            </div>
        );
    }

    renderHaikus(haikus) {
        if (haikus.length > 0) {
            return haikus.map(item => <HaikuItem key={item.id} {...item} />);
        } else {
            return (
                <div className="list-stamp">
                    no matches.
                </div>
            );
        }
    }

    render() {
        const { haikus, loading } = this.props;
        let body;

        if (loading) {
            body = this.renderLoadingStamp();
        } else {
            body = this.renderHaikus(haikus);
        }

        return (
            <div className="haiku-list">
                {body}
                <div className="list-end">
                    <i className="fa fa-check-circle-o"></i>
                    {END_OF_RESULTS}
                </div>
            </div>
        );
    }
};

export default HaikuList;