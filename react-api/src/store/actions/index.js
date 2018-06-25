export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

const MY_API_KEY = '84da4ee752934382bb01f09ce86914a8';

export const getChannel = channel => ({
    type: SELECT_CHANNEL,
    channel,
});

export const requestPosts = () => ({
    type: REQUEST_POSTS,
});

export const receivedPosts = json => ({
    type: RECEIVE_POSTS,
    json: json.articles,
});

export function fetchPosts(channel) {
    // let url = `https://newsapi.org/v1/articles?source=${channel}&apiKey=${MY_API_KEY}`
    let url = `https://newsapi.org/v2/top-headlines?sources=${channel}&apiKey=${MY_API_KEY}`;
    return function (dispatch) {
        dispatch(requestPosts());
        return fetch(url)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((json) => {
                dispatch(receivedPosts(json));
            },
        );
    };
}