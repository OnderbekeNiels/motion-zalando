import React from 'react'

export default function Row(props: any) {
    return (
        <div className={`o-row ${props.className}`}>
            { props.children}
        </div>
    )
}