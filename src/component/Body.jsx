import React from 'react';


function Body() {
    return (
      
            <div className='body'>
                <div className='info'>
                    <h1>Nguyen Duc Toan</h1>
                    <h4>FRONTEND DEVELOPER</h4>
                    <p>Email: nguyenductoan308@gmail.com</p>
                    <p className='email'>
                        <i className='fa-solid fa-envelope'></i>
                        Email
                    </p>
                </div>
                <div className='decs'>
                    <h1>About</h1>
                    <p>About
                        I am a frontend developer with a particular interest in making things simple and automating daily tasks.
                        I try to keep up with security and best practices, and am always looking for new things to learn.
                    </p>
                </div>
                <div className='decs'>
                    <h1>Interests</h1>
                    <p>
                        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                    </p>
                </div>   
                <div className='note'>

                <p>Bí ý tưởng nên em Clone lại của bạn Vũ</p>
                </div>
            </div>
        
    );
}

export default Body;