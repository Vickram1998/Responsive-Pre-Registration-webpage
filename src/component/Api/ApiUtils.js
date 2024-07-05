const BASE_URL = 'http://localhost:8080';

const createPerson = (email) => {
    const requestData = { email: email }; 
    return fetch(`${BASE_URL}/person`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json' 
        },
        body: JSON.stringify(requestData) 
    })
    .then(res => res.json());
};


const getApiError = (response) => {
    return response.error;
};

export {
    createPerson,
    getApiError
};
