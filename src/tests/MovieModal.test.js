import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MovieModal } from "../Components/MovieModal";

test('rendering and submitting Formik form', async () => {
    const handleSubmit = jest.fn()
    render(<MovieModal addMovie={handleSubmit} isEdit={false} text={"text"}/>)

    userEvent.type(screen.getByLabelText(/TITLE/i), 'Some film')
    userEvent.type(screen.getByLabelText(/RELEASE DATE/i), '12-12-2012')
    userEvent.type(screen.getByLabelText(/MOVIE URL/i), 'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg')
    userEvent.type(screen.getByLabelText(/GENRE/i), 'action')
    userEvent.type(screen.getByLabelText(/OVERVIEW/i), 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, minus')
    userEvent.type(screen.getByLabelText(/RUNTIME/i), '1234')

    userEvent.click(screen.getByRole('button', { name: /submit/i }))

    await waitFor(() =>
        expect(handleSubmit).toHaveBeenCalledWith({
            title: 'Some film',
            release_date: '12-12-2012',
            poster_path: 'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg',
            genres: 'action',
            overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, minus',
            runtime: '1234',
        }, expect.anything())
    )
})
