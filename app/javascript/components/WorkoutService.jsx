import Auth from "./AuthService";

class WorkoutService {
  constructor(domain) {
    this.domain = domain || "http://localhost:5000";
  }

  getWorkouts = async () => {
    const response = await this.fetch("/workouts", {
      method: "GET"
    });

    if (response.status === 200) {
      const workouts = await response.json();
      return workouts;
    }

    return [];
  };

  getExerciseNames = async () => {
    const response = await this.fetch("/exercise_names", {
      method: "GET"
    });

    if (response.status === 200) {
      const exerciseNames = await response.json();
      return exerciseNames;
    }

    return [];
  };

  fetch = (url, options) => {
    const fullUrl = `${this.domain}${url}`;
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    };

    if (Auth.loggedIn()) {
      headers.Authorization = `Bearer ${Auth.getToken()}`;
    }

    return fetch(fullUrl, {
      headers,
      ...options
    });
  };
}

export default new WorkoutService();
