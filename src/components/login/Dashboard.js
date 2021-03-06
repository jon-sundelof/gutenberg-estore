import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components'

const Dashboard = ({ userdata }) => {

    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.pushState('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
            <DashboardContainer>
                <DashboardInnerContaier>
                    <DashHeader>Personal Infromation</DashHeader>
                    <InfromationContainer>
                        <LabelNdataCon><DashLabel>E-mail </DashLabel><DashDataCon>{currentUser.email}</DashDataCon></LabelNdataCon>
                        <LabelNdataCon><DashLabel>Phone Number </DashLabel><DashDataCon>{userdata.phonenumber}</DashDataCon></LabelNdataCon>
                        <LabelNdataCon><DashLabel>First Name </DashLabel><DashDataCon>{userdata.firstname}</DashDataCon></LabelNdataCon>
                        <LabelNdataCon><DashLabel>Last Name </DashLabel><DashDataCon>{userdata.lastname}</DashDataCon></LabelNdataCon>
                    </InfromationContainer>
                    <DashHeaderSmall>Physical Address</DashHeaderSmall>
                    <InfromationContainer>
                        <LabelNdataCon><DashLabel>Country </DashLabel><DashDataCon>{userdata.country}</DashDataCon></LabelNdataCon>
                        <LabelNdataCon><DashLabel>City </DashLabel><DashDataCon>{userdata.city}</DashDataCon></LabelNdataCon>
                        <LabelNdataCon><DashLabel>Address</DashLabel><DashDataCon>{userdata.address}</DashDataCon></LabelNdataCon>
                        <LabelNdataCon><DashLabel>Postal Code</DashLabel><DashDataCon>{userdata.postcode}</DashDataCon></LabelNdataCon>
                    </InfromationContainer>

                    <ButtonsContainer>
                        <UpdateProfileBtn to="/update-profile">Edit Profile<i class="fas fa-user-cog" style={{ marginLeft: '15px' }}></i></UpdateProfileBtn>
                        <LogoutBtn to="/" onClick={handleLogout}>Log Out</LogoutBtn>
                    </ButtonsContainer>
                </DashboardInnerContaier>
            </DashboardContainer>
        </>
    )
}

export default Dashboard

const DashboardContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`

const InfromationContainer = styled.div`    
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    margin-bottom: 45px;
`

const LabelNdataCon = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 8px;
    flex-grow: 1;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const DashboardInnerContaier = styled.div`
    background-color: #fff;
/*     margin-top: 20px; */
    padding: 45px;
    width: 50vw;
    height: 91.3vh;

    @media screen and (max-width: 768px) {
        height: 120vh;
        width: 80vw;
    }
    @media screen and (max-width: 350px) {
        height: 130vh;
        width: 100vw;
    }
`

const DashHeader = styled.h1`
    justify-self: center;
    color: #292929;
    text-align: center;
    margin-bottom: 35px;
`
const DashHeaderSmall = styled.h2`
    font-size: 1.4rem;
    color: #292929;
    text-align: center;
    margin-bottom: 35px;
`

const DashLabel = styled.label`
    margin-right: 8px;
    width: 110px;
  
`
const DashDataCon = styled.div`
    border: 1px solid rgba(210, 210, 210, 0.7);
    background: #fff;
    width: 200px;
    height: 26px;
    padding-left: 4px;
    overflow:hidden;
    @media screen and (max-width: 350px) {
        width: 150px;
    }
`

const ButtonsContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const UpdateProfileBtn = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 3px;
    color: #fff;
    background: #DE8066;
    
    :hover {
        text-decoration: none;
        color: #fff;
    }

    &:focus{
        outline: none;
    }
`

const LogoutBtn = styled.button`
    margin-top: 25px;
    color: #007bff;
    background: none;
    border: none;
`





