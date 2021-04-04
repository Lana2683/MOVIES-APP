import React, { useState, useCallback } from 'react';

export const FILTERS = ['Documentary', 'Comedy', 'Horror', 'Crime'];

export const useToggle = (isComponentShown = false) => {
    const [flag, setFlag] = useState(isComponentShown);

    const toggle = useCallback(() => {
        setFlag(prev => !prev)
    }, [flag])
    return [flag, toggle]
}
