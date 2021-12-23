import * as R from "ramda"
import * as qs from "querystring"
import 'whatwg-fetch'

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"

type Url = string
type QueryParameters = {
    [key: string]: any
}


const BASE_URL = 'http://localhost:4000'

let Token = ''

function getHeaders() {
    return {
        "authorization": `token ${Token}`
    }
}

type ErrorMessage = string;

type ResponseT<T>
    = ["Err", ErrorMessage]
    | ["Ok", T]

async function handleReponse<T>(response: Response): Promise<ResponseT<T>> {
    if (response.statusText.startsWith('2')) {
        return ["Ok", await response.json()]
    } else {
        return ["Err", await response.text()]
    }
}

function get<T>(url: Url, query: QueryParameters = {}) {
    const param = qs.stringify(query, '&')
    return fetch(`${BASE_URL}${url}?${param}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            ...getHeaders(),
        },
    }).then<ResponseT<T>>(
        resp => {
            if (resp.ok) {
                return handleReponse(resp)
            } else {
                return ["Err", resp.statusText]
            }
        }
    )
}

function post<T>(url: Url, data: QueryParameters = {}) {
    return fetch(`${BASE_URL}${url}`, {
        method: 'POST',
        cache: 'no-cache',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            ...getHeaders(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then<ResponseT<T>>(
        resp => {
            if (resp.ok) {
                return handleReponse(resp)
            } else {
                return ["Err", resp.statusText]
            }
        }
    )
}

function put<T>(url: Url, data: QueryParameters = {}) {
    return fetch(`${BASE_URL}${url}`, {
        method: 'PUT',
        cache: 'no-cache',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            ...getHeaders(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then<ResponseT<T>>(
        resp => {
            if (resp.ok) {
                return handleReponse(resp)
            } else {
                return ["Err", resp.statusText]
            }
        }
    )
}

function delete_<T>(url: Url) {
    return fetch(`${BASE_URL}${url}`, {
        method: 'DELETE',
        cache: 'no-cache',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            ...getHeaders(),
        },
    }).then<ResponseT<T>>(
        resp => {
            if (resp.ok) {
                return handleReponse(resp)
            } else {
                return ["Err", resp.statusText]
            }
        }
    )
}




export const article = {
    list(limit: number, offset: number) {
        return get<any>(`/api/articles`, {limit, offset})
    },
    create(data: any) {
        return post(`/api/articles`, data)
    },
    update(id: number, data: any) {
        return put(`/api/article/${id}`, data)
    },
    delete_(id: number) {
        return delete_(`/api/article/${id}`)
    }
}

export const user = {
    async login(email: string, password: string) {
        fetch(`${BASE_URL}/api/users/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                // "authorization": "token __",
                "content-type": "application/json",
            },
            body: JSON.stringify({user: {email, password} })
        })
    }
    //     const user = await post<any>('/api/users/login', {user: {email, password} })
    //     if (user[0] === "Err") {
    //         return false
    //     } else {
    //         Token = user[1].token ?? ""
    //         return true 
    //     }
    // }
}
