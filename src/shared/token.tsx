const getToken = () => localStorage.getItem('JWT');

const setToken = (token: string) => localStorage.setItem('JWT', token);

export { getToken, setToken };
