import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className='users'>
            {props.users.map((user, id) => {
                const { avatar, first_name, last_name, email } = user;
                return (
                    <div className='card' key={id}>
                        <img src={avatar} alt='' className='avatar' />
                        <div className='details'>
                            <h2>{first_name} {last_name}</h2>
                            <p><i class="fa-solid fa-envelope"> </i>  {email}</p>
                            <p><i class="fa-brands fa-github"></i> <i class="fa-brands fa-linkedin-in"></i></p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}