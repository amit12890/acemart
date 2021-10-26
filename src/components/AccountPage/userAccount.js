import React from 'react';
import AccountInformation from './accountInformation';


const UserAccount = props => {
    return (
        <div>
            <div>  
                <h1><span>My Account</span></h1>          
            </div>
            <AccountInformation />
        </div>
    )
}

export default UserAccount