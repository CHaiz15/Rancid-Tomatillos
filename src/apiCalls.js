export const fetchUser = async (email, password) => {

  const userInfo = {email, password};

  const options = {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {'Content-Type': 'application/json'}
  }

  const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v1/login', options);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  const user = await response.json();
  return user.user;
}

export const getMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
  .then(res => {
    if(!res.ok) {
      throw Error('Something is not right, try again later')
    }
    return res.json()})
}

export const getRatings = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${id}/ratings`)
    .then(res => {
      if(!res.ok) {
        throw Error('Something is not right, try again later')
      }
      return res.json()})
}

export const postRating = async (rating, id, movie_id) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      movie_id,
      rating,
    }),
    headers: {
      'Content-Type': 'application/json'  
    }
  }

  return await fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${id}/ratings`, options)
    .then(res => {
      if(!res.ok) {
        throw Error('Something is not right, try again later')
      }
      return res.json()})
}

export const deleteRating = async (rating_id, id) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return await fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${id}/ratings/${rating_id}`, options)
    .then(res => {
      if(!res.ok) {
        throw Error('Something is not right, try again later')
      }
    })
}