import decode from "jwt-decode";

class AuthService {
  constructor(domain) {
    this.domain = domain || "http://localhost:5000";
  }

  createAccount = async userData => {
    const response = await this.fetch(`${this.domain}/users/create`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          ...userData
        }
      })
    });

    const data = await response.json();
    if (data.status === 200) {
      await this.login(userData.email, userData.password);
    }

    return data;
  };

  loggedIn = () => {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  };

  login = async (email, password) => {
    const response = await this.fetch(`${this.domain}/login`, {
      method: "POST",
      body: JSON.stringify({
        auth: {
          email,
          password
        }
      })
    });

    if (response.status === 201) {
      const data = await response.json();
      this.setToken(data.jwt);
      return true;
    }

    return false;
  };

  logout = () => {
    localStorage.removeItem("id_token");
  };

  setToken = token => {
    localStorage.setItem("id_token", token);
  };

  getToken = () => {
    return localStorage.getItem("id_token");
  };

  isTokenExpired = token => {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (error) {
      return true;
    }
  };

  fetch = (url, options) => {
    const headers = {
      // TODO: add new quote-props: consistent rule
      //       with next release of prettier (Yay!)
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    if (this.loggedIn()) {
      headers.Authorization = `Bearer ${this.getToken()}`;
    }

    return fetch(url, {
      headers,
      ...options
    });
  };
}

export default AuthService;
