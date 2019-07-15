import React from 'react'

const Site = props => {
    return (
        <a className={props.site.class} href={props.site.url}>
            {props.site.name}
            <p>{props.site.description}</p>
        </a>
    )
}

export default Site
