import React from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { NInput, NinputWrapper, NTitle, Nwrapper, Nbutton, NvalidationField, NInputErrorMessage } from './styles'
import LoadingButton from '@mui/lab/LoadingButton';

export const Newsletter = () => {
    const schema = yup.object().shape({
        email: yup
          .string()
          .email('Favor digitar um e-mail válido')
          .required('Favor preencher corretamente o campo.'),
        username: yup.string().required('O nome é obrigatório')
      })
      const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm({ resolver: yupResolver(schema) })

      const onSubmitHandler = () => {
        console.log('submit')
      } 
    return (
        <Nwrapper>
            <NTitle>Participe de nossas news com promoções e novidades!</NTitle>
            <NinputWrapper>
                <NvalidationField>
                    <NInput
                        {...register('username')}
                        placeholder="Digite seu nome"
                        type="text"
                        required
                    />
                    {errors?.username && (
                        <NInputErrorMessage>{errors.email?.message}</NInputErrorMessage>
                    )}
                </NvalidationField>
                <NvalidationField>
                    <NInput 
                        {...register('email')}
                        placeholder="Digite seu e-mail"
                        type="email"
                        required
                    />
                    {errors?.username && (
                        <NInputErrorMessage>{errors.email?.message}</NInputErrorMessage>
                    )}
                </NvalidationField>
                <Nbutton>
                    <LoadingButton
                        onClick={handleSubmit(onSubmitHandler)}
                        loading={false}
                        variant="contained"
                        style={{
                            backgroundColor:"#000000",
                            color: "white",
                            width: "100%",
                            flexDirection: "row",
                            height: "48px",
                            border: "none",
                            fontSize: "12px",
                            fontWeight: 700,
                            borderRadius: "5px"
                        }}
                    >
                        Eu quero!
                    </LoadingButton>
                </Nbutton>
            </NinputWrapper>
        </Nwrapper>
    )
}

