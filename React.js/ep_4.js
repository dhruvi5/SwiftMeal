import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-cont">
                <img className="logo" src="https://i.pinimg.com/564x/86/31/df/8631dff393e0b543175e6d4b84f5ca8e.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <img className="cart" src="https://i.pinimg.com/564x/65/d6/dd/65d6ddc76d5ddbf5788ba76205b8bec0.jpg"/>
                </ul>
            </div>;

        </div>
    );
};

const styleCard = 
    {
        
        backgroundColor : " #f0f0f0" };

const Body = () =>{
    return(
        <div className="body">
            <div className='search'>
                Search
            </div>
            <div className='res-cont'>
                <Res_card/>
                <Res_card/>
                <Res_card/>
                 <Res_card/>
            </div>
        </div>
    );
};

const Res_card = () =>{
    return(
        <div className='res-card '  style={styleCard}>
            <img className="noodles"   src='https://i.pinimg.com/564x/22/92/10/229210e7999a58a67afc0c4577bdda7d.jpg'/>
            <h3 className='res-name'>EMERALD</h3>
            <h4>Chinese, Asian</h4>
            <h4> 4.3 stars</h4>

        </div>
    );
};

const Applayout = () =>{
    return(
        <div className="App">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);
 