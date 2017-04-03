import React from 'react';

if (typeof window !== 'undefined') {
    require('./navbar.scss');
}

const NAVBAR_TITLE = 'Haiku Browser';
const NAVBAR_INPUT_PLACEHOLDER = 'Search haikus for a keyword...';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.delayedQuery = null;
    }

    onChange(event) {
        const { value } = event.target;

        if (this.delayedQuery) {
            clearTimeout(this.delayedQuery);
        }

        this.props.clearAllHaikus();
        this.props.showLoading(true);

        this.delayedQuery = setTimeout(() => {
            this.props.requestKeywordSearch(value.trim());
        }, 2000);
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-column">
                    <i className="navbar-icon fa fa-align-left"></i>
                    <span className="navbar-brand">{NAVBAR_TITLE}</span>
                </div>
                <div className="navbar-column navbar-search">
                    <input 
                        type="text" 
                        placeholder={NAVBAR_INPUT_PLACEHOLDER}
                        onChange={this.onChange.bind(this)}
                    />
                </div>
            </div>
        );
    }
};

export default Navbar;