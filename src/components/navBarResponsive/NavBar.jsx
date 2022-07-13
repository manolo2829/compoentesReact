import React,{useState, useEffect} from 'react'
import styled from 'styled-components';

import BurguerBtn from './BurguerBtn';

const NavBar = () => {

    const [clicked, setClicked] = useState(false);

    let anchoVentana = window.innerWidth;
    console.log(anchoVentana)

    useEffect(() => {
        const updateWidth = () => {
          const width = document.body.clientWidth
          if(width > 768){
            setClicked(false)
        }
        }
        updateWidth()
        window.addEventListener("resize", updateWidth)
        return () => {
            window.removeEventListener("resize", updateWidth)
        }
      })

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <NavContainer>
            
            <h2>NavBar <span>Responsive</span></h2>
            <div className={`links ${clicked ? 'active' : ''}`}>
                <a onClick={handleClick} href="#">Home</a>
                <a onClick={handleClick} href="#">Shop</a>
                <a onClick={handleClick} href="#">About</a>
                <a onClick={handleClick} href="#">Contact</a>
                <a onClick={handleClick} href="#">Blog</a>
            </div>
            <div className='burguer'>
                <BurguerBtn clicked={clicked} handleClick={handleClick}/>
            </div>
            <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
        </NavContainer>
    )
}

export default NavBar

const NavContainer = styled.nav`

    h2{
        font-weight: 400;
        color: white;

        span{
            font-weight: bold;
        }
    }

    padding: .4rem;
    background-color: #333;
    display: flex;
    align-items:center;
    justify-content: space-between;
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }

    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center; 
        transition: .6s all ease;
        a{
            color: #fff;
            font-size: 2rem;
            display: block;
        }

        @media(min-width: 768px){

            position: initial;
            margin: 0;
            a{
                font-size:1rem;
                color: #fff;
                display: inline;
            }
            
        }
    }

    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align:center;
        a{
            font-size: 2rem;
            margin-top: 1rem;
            color: #fff;
        }
    }

    .burguer{
        @media(min-width: 768px){
            display: none;
        }
    }

`

const BgDiv = styled.div `
    position: absolute;
    background-color: #333;
    top: -1000px;
    left: -1000px   ;
    width: 100%;
    z-index: -1;
    height: 100%;
    transition: .6s all ease;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

    }
`