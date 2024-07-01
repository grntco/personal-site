import ToggleButton from './ToggleButton'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../../ThemeContext'

function ThemeToggleButton() {
    const theme = useContext(ThemeContext)

    return <ToggleButton />
}
