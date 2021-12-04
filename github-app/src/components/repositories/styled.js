import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import styled from 'styled-components';

export const WrapperTabs = styled(Tabs)`
font-size: 16px;
width: 100%;
margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
list-style-type: none;
padding: 4px;
display: flex;
margin: 0;
`;

WrapperTabList.tabsRole = 'Tablist'; 

export const WrapperTab = styled(Tab)`
border-radius: 16px;
border: 1px solid #CCC;
padding: 8px;
user-select: none;
cursor: pointer;
z-index: 99999;
background-color: "#fff";
margin: 8px;
box-shadow: 0 0 1em #CCC;

&:focus{
    outline: none;
}
&.is-selected{
    box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
}
`;

WrapperTab.tabsRole = 'Tab'; 

export const WrapperTabPanel = styled(TabPanel)`
padding: 16px;
border: 1px solid "#CCC";
margin-top: -5px;
display: none;

&.is-selected{
    display: block;
}

`;

WrapperTabPanel.tabsRole = 'TabPanel'; 

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;