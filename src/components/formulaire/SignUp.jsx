import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import axios from '../../http-common'
import { Button, TextField } from '../controlles'
import { Formik, Form } from 'formik'

/* Yup schemas */
const INITIAL_FORM_STATE = { email: '', password: '' }
const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .email('E-mail invalide')
    .required('Veuiller saisir votre email'),
  password: Yup.string()
    .min(4, 'Trop court')
    .required('Veuiller saisir votre mot de passe'),
  username: Yup.string()
    .min(4, 'Nom utilisateur invalide')
    .required('Veuiller saisir votre email'),
  address: Yup.string()
    .min(4, 'Trop court')
    .required('Veuiller saisir votre mot de passe')
})

function SignUp() {
  const sleep = (time) => new Promise((acc) => setTimeout(acc, time))
  const [isMajor, setIsMajor] = useState(false)
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()




  const handleSubmit = async (value, helpers) => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude)

    })
    console.log(longitude);
    sleep(3)
    const data = {
      username: value.username,
      email: value.email,
      password: value.password,
      address: value.address,
      location: {
        type: 'Point',
        coordinates: [
          latitude,
          longitude
        ],
        formattedAddress: "Vangaindrano"
      }
    }

    axios({
      method: 'POST',
      url: `register`,
      data: data,
      validateStatus: (status) => {
        return status >= 200 && status < 500
      }
    })
      .then((res) => {
        console.log(res.data.location)
      })
      .catch((e) => {
        console.log(e.message)
      })
    // console.log(value)
  }

  return (
    <Formik
      initialValues={{ ...INITIAL_FORM_STATE }}
      validationSchema={FORM_VALIDATION}
      onSubmit={handleSubmit}
    >
      <Form
        autoComplete="off"
        style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}
      >
        <TextField label="Nom d'utilisateur" name="username" />
        <TextField label="E-mail" name="email" type="email" />
        <TextField label="mot de passe" name="password" type="password" />
        <TextField label="adresse" name="address" />
        <Button type="submit">S'incrirer</Button>
      </Form>
    </Formik>
  )
}

export default SignUp
