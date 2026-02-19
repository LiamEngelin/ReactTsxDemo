const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export async function get<T>(path: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`);
    
    if(!response.ok){
        throw new Error(`Could not fetch data!! Code: ${response.status}`);
    }

    return response.json();
}

export async function post<TResponse, TBody>(path: string, body: TBody): Promise<TResponse>{
    const response = await fetch(`${API_BASE_URL}${path}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });

    if(!response){
        throw new Error("Could not post data!")
    }

    return response.json();
}