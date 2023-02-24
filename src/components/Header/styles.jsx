import styled from 'styled-components';
import colors from "../../constants/colors";

export const Container = styled.div`
    text-align: center;
    height: 120px;
    color: white;
    background-color: ${colors.primaryColor};
    position: relative;
    width: 100%;
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 960px;
    margin: auto;
    padding: 0 20px;
`;

export const NavList = styled.ul`
    display: flex;
    gap: 10px;
    font-size: 1.125rem;
    align-items: center;

    a:not(.bag-link) {
    font-weight: 500;
    border-radius: 10px;
    padding: 10px;
    padding: 1rem;
}
`;

export const NavItem = styled.li`
    transition: transform .15s ease-in-out;
    position: relative;

    &:hover::after {
        width: 60%;
    }

    &::after {
        content: "";
        display: block;
        width: 0px;
        height: 2px;
        position: absolute;
        background-color: white;
        left: 18px;
        transition: width .3s ease-in-out;
    }

    &:hover{
        transform: scale(1.1);
    }

    ${({ active }) => active && `
        &{
            position: relative;
        }

        &::after {
        content: "";
        display: block;
        width: 60%;
        height: 2px;
        position: absolute;
        background-color: white;
        left: 17px;
    }
    `}
    
`;

export const BagLink = styled.div`
   position: relative;

   & .bag-header{
        color: #e8f6ea;
        border-radius: 50px;
        font-weight: 500;
        font-size: 2.0625rem;
        padding: 6px;
        cursor: pointer;
        transition: all .4s ease;

        &:hover{
            background-color: #e8f6ea;
            color: ${colors.primaryColor};
        }
    }
`;

export const Notification = styled.div`
    top: 20px;
    left: 10px;
    border-radius: 50%;
    width:20px;
    line-height: 22px;
    height:22px;
    background-color: rgb(252, 99, 99);
    font-size: .8em;
    font-weight: bold;
    position: absolute;
    pointer-events: none;
`;