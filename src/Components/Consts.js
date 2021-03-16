import React, { useState, useCallback } from 'react';


export const mockedMovies = [
    {
        id: 1,
        img: '',
        name: 'Pulp Fiction',
        genre: 'Action & Adventure',
        year: '2004',
        description: `Lorem ipsum dolor sit amet, onsectetur adipisicing elit.
                      Consectetur consequatur delectus\n dignissimos eaque harum labore 
                      maiores nisi non sed tempore. Accusamus Accusamus?`
    },
    {
        id: 2,
        img: '',
        name: 'Bohemian Rhapsody',
        genre: 'Drama, Biography, Music',
        year: '2003',
        description: `Lorem ipsum dolor sit amet, onsectetur adipisicing elit.
                      Consectetur consequatur delectus\n dignissimos eaque harum labore 
                      maiores nisi non sed tempore. Accusamus Accusamus?`
    },
    {
        id: 3,
        img: '',
        name: 'Kill Bill: Vol 2',
        genre: 'Oscar winning Movie',
        year: '1994',
        description: `Lorem ipsum dolor sit amet, onsectetur adipisicing elit.
                      Consectetur consequatur delectus\n dignissimos eaque harum labore 
                      maiores nisi non sed tempore. Accusamus Accusamus?`
    },
    {
        id: 4,
        img: '',
        name: 'Avengers',
        genre: 'Action & Adventure',
        year: '2004',
        description: `Lorem ipsum dolor sit amet, onsectetur adipisicing elit.
                      Consectetur consequatur delectus\n dignissimos eaque harum labore 
                      maiores nisi non sed tempore. Accusamus Accusamus?`
    },
    {
        id: 5,
        img: '',
        name: 'Inception',
        genre: 'Action & Adventure',
        year: '2004',
        description: `Lorem ipsum dolor sit amet, onsectetur adipisicing elit.
                      Consectetur consequatur delectus\n dignissimos eaque harum labore 
                      maiores nisi non sed tempore. Accusamus Accusamus?`
    },
    {
        id: 6,
        img: '',
        name: 'Reservoir dogs',
        genre: 'Oscar winning Movie',
        year: '2004',
        description: `Lorem ipsum dolor sit amet, onsectetur adipisicing elit.
                      Consectetur consequatur delectus\n dignissimos eaque harum labore 
                      maiores nisi non sed tempore. Accusamus Accusamus?`
    },
]

export const useToggle = (isComponentShown = false) => {
    const [flag, setFlag] = useState(isComponentShown);

    const toggle = useCallback(() => {
        setFlag(prev => !prev)
    }, [flag])
    return [flag, toggle]
}
