import React, { PropTypes } from 'react'

export const SearchBox = (props) => {
  return (
    <div className="search-box">
      <input onChange={props.onChange} placeholder="Search" type="text"/>
    </div>
  )
}
