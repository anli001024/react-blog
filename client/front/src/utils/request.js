
export default function request (method, url, body) {
    method = method.toUpperCase();
    url = 'http://localhost:3000/api/' + url;

    if (method === 'GET') {
        // fetch的GET不允许有body，参数只能放在url中
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }

    return fetch(url, {
        method
        })
        .then(res => res.json());
}

export const getPostList = () => {
    let url = 'post?sort=1'; //按时间倒序，新->旧
    return request('GET', url)
};
export const getPostById = (id) => request('GET', 'post/' + id);
export const getPostByTag = (tag) => {
    let url = `post?conditions={"tags":"${tag}"}`;
    return request('GET', url);
};
export const getTag = () => request('GET', 'tag');
export const getTagNum = (tag) => {
    let url = `post?conditions={"tags":"${tag}"}&count=1`;
    return request('GET', url);
};
// export const getCreatedAtTimeList = () => {
//     let url = `post?select={"createdAt":1}`;
//     return request('GET', url);
// }
