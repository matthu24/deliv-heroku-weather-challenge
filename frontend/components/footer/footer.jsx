import React from 'react';

class Footer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className='footer'>
          <a className='linkedin' href="https://www.linkedin.com/in/matthew-hu-4a85752a/"><i className="fab fa-linkedin-in"></i></a>
          <a className='github' href="https://github.com/matthu24"><i className="fab fa-github"></i></a>

        </div>
      </div>
    )
  }
}

export default Footer;
