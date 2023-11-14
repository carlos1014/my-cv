import styled from "styled-components";

export const SwitchStyle = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  .switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 40px;
    height: 20px;
    background: grey;
    border-radius: 50px;
    position: relative;
    transition: background-color 0.2s;
  }

  .switch-label .switch-button {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 45px;
    transition: 0.25s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }

  .switch-checkbox:checked + .switch-label .switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  .switch-label:active .switch-button {
    width: 40px;
  }

  @media screen and (max-width: 960px) {
    height: 70px;
    margin-right:40px
  }
`;

export const MoonIcon = styled.div`
    svg {
      fill: #fff;
      margin-right: 0.4rem;
      margin-top: 0.19rem;
    }
  @media screen and (max-width: 960px) {
    z-index:2
  }
`;

export const SunIcon = styled.div`
    svg {
      fill: #fff;
      margin-left: 0.4rem;
      margin-top: 0.19rem;
    }
  @media screen and (max-width: 960px) {
    z-index:2
  }
`;
