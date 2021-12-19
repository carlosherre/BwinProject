const apiUrl = process.env.REACT_APP_URL_API;

export const get = async (endpoint) => {
    try {
        const response = await fetch(`${apiUrl}/${endpoint}`,{
            headers:{
                "Content-Type":"application/json",
            },
        });
        return response.json()
    } catch (error) {
        return console.log(error);
    }
}