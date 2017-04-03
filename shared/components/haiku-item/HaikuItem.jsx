import React from 'react';

if (typeof window !== 'undefined') {
    require('./haiku-item.scss');
}

class HaikuItem extends React.Component {
    getHighlightedKeyword(text, keyword) {
        return text.split(keyword).join(`<b>${keyword}</b>`);
    }

    formatText(text) {
        return text.split(/\n/gmi).join(`<br/>`);
    }

    render() {
        const { id, text, author, images, keyword } = this.props;
        const highlightedText = this.getHighlightedKeyword(text, keyword);
        const formattedText = this.formatText(highlightedText);

        return (
            <div className="haiku-item">
                <div className="haiku-preview">
                    <div className="haiku-text" dangerouslySetInnerHTML={{ __html: formattedText }}></div>
                    <div className="haiku-author">
                        - {author}
                    </div>
                </div>
                <div className="keyword-images">
                    <div className="carousel">
                        {images.map((image, index) => {
                            return (
                                <img key={index} src={image} />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
};

export default HaikuItem;