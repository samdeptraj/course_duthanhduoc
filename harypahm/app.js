// httpResquest
const xhttp = new XMLHttpRequest();
console.clear();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const reponseText = JSON.parse(this.responseText)
        console.log('this.readyState: ', reponseText);
    }
}
xhttp.open('GET', 'https://reqres.in/api/users?page=2', true);
xhttp.send();
// fetch 
fetch('https://reqres.in/api/users?page=2')
    .then(res => {
        console.log('res: ', res);
        return res.json()
    })
    .catch(err => {
        console.log('err: ', err);
    })
    .then(data => {
        console.log('data fetch: ', data);
    })
// Axios
const http = axios.create({
    baseURL: 'https://reqres.in/api',
})
http.get('/users?page=2')
    .then(res => {
        console.log('res axios: ', res);
    })
    .catch(err => {
        console.log('err: ', err);
    })
// axios post
http.post('/users', {
    "name": "morpheus",
    "job": "leader"
})
    .then(res => {
        console.log('res axios: ', res);
    })
    .catch(err => {
        console.log('err: ', err);
    })
http.interceptors.request.use(config => {
    console.log('config: ', config);
    return config;
}, error=>{
    return Promise.reject(error);
}) 