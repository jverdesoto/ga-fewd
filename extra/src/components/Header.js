import React, { version } from 'react'

export default function Header() {
    const name = 'Henry'
    
    for (let i = 0; i<10; i++) {
        version = i
    }
    return (
        <>
            <div>Hello {name}</div>
            <div>Version: v{version}</div>
        </>
  )
}
