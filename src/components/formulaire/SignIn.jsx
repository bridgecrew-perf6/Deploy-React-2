import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button, TextField } from '../controlles'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import axios from '../../http-common'
import { useNavigate } from 'react-router'

// formik validation
const INITIAL_FORM_STATE = { email: '', password: '' }
const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .email('Email invalide')
    .required('Veuiller saisir votre email'),
  password: Yup.string()
    .min(4, 'Trop court')
    .required('Veuiller saisir votre mot de passe')
})

function SignIn() {
  const navigate = useNavigate()
  const sleep = (time) => new Promise((acc) => setTimeout(acc, time))

  const handleSubmit = async (values) => {
    await sleep(200)
    const { email, password } = values

    axios({
      method: 'POST',
      url: `login`,
      data: values,
      validateStatus: (status) => {
        return status >= 200 && status < 500
      }
    }).then((res) => {
      console.log(res.data);
      localStorage.setItem("userInfo", JSON.stringify(res.data.token_user));
      navigate('/map', { replace: true })
    })
      .catch((e) => {
        console.log(e.message);
      })

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
        <TextField label="E-mail" name="email" type="email" />
        <TextField label="mot de passe" name="password" type="password" />
        <FormControlLabel control={<Checkbox />} label="Remember me" />
        <Button type="submit">Se connecter</Button>
      </Form>
    </Formik>
  )
}

export default SignIn
