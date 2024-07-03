class Http {
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 10000
        })
        this.instance.interceptors.request.use(config => { //before
            const access_token = localStorage.getItem("access_token");
            access_token ? config.headers.authorization = `Bearer ${access_token}` : "";
            return config;
        }, error => Promise.reject(error)
        )
        this.instance.interceptors.response.use(
            config => {
                return config.data;
            },
            async error => {
                console.log('error: ', error);
                if (error.response.data.name === "EXPIRED_ACCESS_TOKEN" && error.response.status === 401) {
                    const originalRequest = error.config;
                    try {
                        const res = await refreshToken();
                        if (res) {
                            originalRequest.headers.authorization = `Bearer ${res.data.access_token}`;
                            return this.instance(originalRequest)
                        }
                    } catch (error_refresh_token) {
                        if (error_refresh_token && error_refresh_token.data.name === "EXPIRED_REFRESH_TOKEN") {
                            localStorage.clear();
                            alert("Your session has expired. Please log in again.");
                        }
                        return Promise.reject(error_refresh_token)
                    }
                }
                return Promise.reject(error)
            }
        )
    }
    get(url) {
        return this.instance.get(url)
    }
    post(url, body) {
        return this.instance.post(url, body)
    }
}
const http = new Http();
const fetchGet = (type) => {
    return http.get(type).then(res => {
        console.log('res: ', res);
        return res;
    }).catch(error => {
        console.log('error: ', error);
    })
}
const refreshToken = async () => {
    const refresh_token = localStorage.getItem("refresh_token");
    try {
        const res = await http.post("refresh-token", {
            refresh_token
        })
        localStorage.setItem("access_token", res.data.access_token);
        return res;

    } catch (error) {
        console.log('error: ', error);
        throw error.response;
    }
}
document.getElementById('login-form').addEventListener('submit', e => {
    e.preventDefault();
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    http.post('login', {
        username,
        password
    }).then(res => {
        console.log('res: ', res);
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
    }).catch(error => {
        console.log('error: ', error);
    })
}
)
document.getElementById("btn-get-profile").addEventListener("click", e => {
    fetchGet("profile");
})
document.getElementById("btn-get-products").addEventListener("click", e => {
    fetchGet("products");
})
document.getElementById("btn-get-both").addEventListener("click", async e => {
    try {
        const [profileRes, productsRes] = await Promise.all([
            fetchGet("profile"),
            fetchGet("products")
        ])
        console.log('productsRes: ', productsRes);
        console.log('profileRes: ', profileRes);
    } catch (error) {
        console.log('error: ', error);
    }
})
document.getElementById("btn-refresh-token").addEventListener("click", e => {
    refreshToken();
})