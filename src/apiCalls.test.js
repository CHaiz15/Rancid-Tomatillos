import { fetchUser, getMovies,  getRatings, postRating } from './apiCalls';

describe('apiCalls', () => {
  describe('fetchUser', () => {
    let mockEmail, mockPassword, mockUserInfo;

    beforeEach(() => {
      mockEmail = 'ken@turing.io';
      mockPassword = '654321'
      mockUserInfo = {email: mockEmail,password: mockPassword}
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockUserInfo)
        })
      })
    })

    it.skip('should call fetch with url and options', () => {
      const mockOptions = {
        method: 'POST',
        body: JSON.stringify(mockUserInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      fetchUser(mockUserInfo);
      expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/login', mockOptions);
    });

    it('should return user when called', () => {
      expect(fetchUser(mockUserInfo)).resolves.toEqual(mockUserInfo);
    });

    it('should return an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      expect(fetchUser(mockUserInfo)).rejects.toEqual(Error('Error Message'));
    })

  })

  describe('getMovies', () => {
    let mockMovies;

    beforeEach( () => {
      mockMovies = [
        {title: 'Sonic', id: 21},
        {title: 'Parasite', id: 22},
        {title: 'Ip Man', id: 23}
      ];
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMovies)
        })
      })
    });

    it('should call fetch with the correct URL', () => {
      getMovies();
      expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    });

    it('should return a movies array', () => {
      expect(getMovies()).resolves.toEqual(mockMovies)
    });

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({ok: false})
      })
      expect(getMovies()).rejects.toEqual(Error('Something is not right, try again later'))
    });
  });

  describe('getRatings', () => {
    let mockId;
    let mockRatings;

    beforeEach(() => {
      mockId = 7;
      mockRatings = [
        { name: 'Sonic', rating: 6 },
        { name: 'Parasite', rating: 9 }
      ];
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockRatings)
        })
      })
    })

    it('should use fetch with url', () => {
      getRatings(mockId);

      expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/users/7/ratings');
    })

    it('should return an array of ratings', () => {
      expect(getRatings(mockId)).resolves.toEqual(mockRatings);
    });

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })
      expect(getRatings(mockId)).rejects.toEqual(Error('Something is not right, try again later'));
    })
  })

  describe('postRating', () => {
    let mockMovieId, mockRating, mockRatingObject, mockUserId, mockOptions;

    beforeEach(() => {
      mockMovieId = 21;
      mockRating = 9
      mockRatingObject = {
        movie_id: 21,
        rating: 9
      };
      mockUserId = 23;
      mockOptions = {
        method: 'POST',
        body: JSON.stringify({ movie_id: mockMovieId, rating: mockRating }),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockRatingObject)
        })
      });
    })

    it('should be called with the correct url and options', () => {
      postRating(mockRating, mockUserId, mockMovieId);

      expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/users/23/ratings', mockOptions)
    });

    it('should return a ratings object when called', () => {
      expect(postRating(mockRating, mockUserId, mockMovieId)).resolves.toEqual(mockRatingObject);
    });

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      expect(postRating(mockRating, mockUserId, mockMovieId)).rejects.toEqual(Error('Something is not right, try again later'));
    })
  })
});