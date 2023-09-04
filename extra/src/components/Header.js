import React from 'react'

export default function Header() {
    const name = 'Henry'
    let version = 0
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
