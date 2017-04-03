import haikus from '../static/haikus';
import GoogleImages from 'google-images';
import config from '../../shared/config';

const { CSE_ID, API_KEY } = config.GOOGLE_API;

const googleImages = new GoogleImages(CSE_ID, API_KEY);

export default (keyword) => {
    const regex = new RegExp('[^.\n]*' + keyword + '[^.\n]*\.?', 'gmi');
    let promisedQueries = [];

    const matches = haikus.forEach(haiku => {
        const sentences = haiku.text.match(regex);

        if (sentences) {
            sentences.forEach(sentence => {
                const sentenceQueryPromise = new Promise((resolve, reject) => {
                    googleImages.search(sentence)
                    .then(images => {
                        const haikuResult = Object.assign({}, haiku, {
                            keyword: keyword,
                            images: images.slice(0, 10).map(image => image.url)
                        });

                        resolve(haikuResult);
                    })
                    .catch(reject);
                });

                promisedQueries.push(sentenceQueryPromise);
            });
        }
    });

    return Promise.all(promisedQueries);
};