import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function UpdateProfile({ setUserdata, userdata }) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const phoneNumberRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const countryRef = useRef()
    const cityRef = useRef()
    const addressRef = useRef()
    const postcodeRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()




    async function handleSubmit(e) {
        e.preventDefault()

        setUserdata(
            {
                phonenumber: phoneNumberRef.current.value,
                firstname: firstNameRef.current.value,
                lastname: lastNameRef.current.value,
                country: countryRef.current.value,
                city: cityRef.current.value,
                address: addressRef.current.value,
                postcode: postcodeRef.current.value
            }
        )

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        if (passwordRef.current.value.length) {
            if (passwordRef.current.value.length <= 6) {
                return setError('Password is too short. Must be at least 6 characters')
            }
        }

        const promises = []
        setLoading(true)
        setError('')

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/dashboard')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(setLoading(false))

        try {
            /* await signup(emailRef.current.value, passwordRef.current.value) */
            history.push('/dashboard')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <>
            < DashboardContainer >
                <DashboardInnerContaier>
                    <DashHeader>Personal Infromation</DashHeader>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <FormCon>
                        <InfromationContainer>
                            <LabelNdataCon><DashLabel>E-mail </DashLabel><DashDataCon type="email" ref={emailRef} required defaultValue={currentUser.email} /></LabelNdataCon>
                            <LabelNdataCon><DashLabel>Phone Number </DashLabel><DashDataCon type="tel" ref={phoneNumberRef} defaultValue={userdata.phonenumber} /></LabelNdataCon>
                            <LabelNdataCon><DashLabel>Password </DashLabel><DashDataCon type="password" ref={passwordRef} placeholder="Leave blank to keep password" /></LabelNdataCon>
                            <LabelNdataCon><DashLabel>Confirm Passw </DashLabel><DashDataCon type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep password" /></LabelNdataCon>
                            <LabelNdataCon><DashLabel>First Name </DashLabel><DashDataCon type="text" ref={firstNameRef} placeholder="Enter First Name" /></LabelNdataCon>
                            <LabelNdataCon><DashLabel>Last Name </DashLabel><DashDataCon type="text" ref={lastNameRef} placeholder="Enter Last Name" /></LabelNdataCon>
                        </InfromationContainer>
                        <DashHeaderSmall>Physical Address</DashHeaderSmall>
                        <InfromationContainer>
                            <LabelNdataCon><DashLabel>Country </DashLabel><DashDataCon type="text" ref={countryRef} /></LabelNdataCon>
                            <LabelNdataCon><DashLabel>City </DashLabel><DashDataCon type="text" ref={cityRef} /></LabelNdataCon>
                            <LabelNdataCon><DashLabel>Address</DashLabel><DashDataCon type="text" ref={addressRef} /></LabelNdataCon>
                            <LabelNdataCon><DashLabel>Postal Code</DashLabel><DashDataCon type="text" ref={postcodeRef} /></LabelNdataCon>
                        </InfromationContainer>
                    </FormCon>
                    <ButtonsContainer>
                        <UpdateProfileBtn disabled={loading} onClick={handleSubmit} type="submit">Update Profile</UpdateProfileBtn>

                        <LinkStyled to="/dashboard">Cancel</LinkStyled>
                    </ButtonsContainer>
                </DashboardInnerContaier>
            </DashboardContainer >
        </>
    )
}

const FormCon = styled.div`
`

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
const DashDataCon = styled.input`
    border: 1px solid rgba(210, 210, 210, 0.7);
    background: #fff;
    width: 200px;
    height: 26px;
    padding-left: 4px;

    ::placeholder {
        font-size: 0.8rem;
    }

    :focus {
        border: 1px solid #DE8066;
        outline: none;
    } 

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
const ErrorMessage = styled.p`
    margin: 0 auto;
    margin-bottom: 20px;
    text-align: center;
    color: #962121;
    background: #fc5656;
    width: 200px;
    border-radius: 3px;
    border: 2px solid #962121;
    padding: 6px;
`

const LinkStyled = styled(Link)`
  margin-top: 15px;
`

