// src/utils/apiUrls.js

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const API_URLS = {
  getWorkout: `${API_BASE_URL}/api/workouts/`,
  getWorkouts: `${API_BASE_URL}/api/workouts`,
  postWorkout: `${API_BASE_URL}/api/workouts/`,
  deleteWorkout: `${API_BASE_URL}/api/workouts/`,
  patcheWorkout: `${API_BASE_URL}/api/workouts/`,
  Login: `${API_BASE_URL}/api/user/login`,
  Signup: `${API_BASE_URL}/api/user/signup`,
};