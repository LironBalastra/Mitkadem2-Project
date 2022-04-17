import React from 'react'

export default function Contact(props) {
  return (
    <li class="clearfix">
    <img src={props.image} alt="avatar" />
    <div class="about">
        <div class="name">{props.name}</div>
        <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>
    </div>
</li>
  )
}
