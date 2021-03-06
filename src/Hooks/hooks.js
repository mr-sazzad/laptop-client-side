import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.email;
        const currentUser = email;
        if (currentUser) {
            const url = `https://pacific-atoll-00696.herokuapp.com/user/${email}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify('email')
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }
    }, [user])
    return [token];
}
export default useToken;