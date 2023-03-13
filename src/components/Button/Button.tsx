import './Button.scss'
import { useState } from 'react'

type Props = {}

const Button = (props: Props) => {
    const [count, setCounter] = useState(0)
    return (
        <div>
            <button className="btn glass" onClick={() => setCounter(count + 1)}>
                change count ({count})
            </button>
        </div>
    )
}

export default Button
