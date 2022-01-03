import React, { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { NInput, NinputWrapper, NTitle, Nwrapper, Nbutton, NvalidationField, NInputErrorMessage,NTitleDescription, NbuttonSuccess } from './styles'
import LoadingButton from '@mui/lab/LoadingButton';

export const Newsletter = () => {
    const [assign, setAssign] = useState(false)
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
    } = useForm({ resolver: yupResolver(schema) })

    const onSubmitHandler = () => {
        setAssign(true)
    }

    const goBackToAssign = () => {
        setAssign(false)
    }
    return (
        <Nwrapper>
            {!assign ? (
                <>
                    <NTitle>Participe de nossas news com promoções e novidades!</NTitle>
                    <NinputWrapper>
                        <NvalidationField>
                            <NInput
                                {...register('username')}
                                placeholder="Digite seu nome"
                                type="text"
                                required
                            />
                            <NInputErrorMessage>
                                {errors.username?.message}
                            </NInputErrorMessage>
                        </NvalidationField>
                        <NvalidationField>
                            <NInput
                                {...register('email')}
                                placeholder="Digite seu e-mail"
                                type="email"
                                required
                            />
                            <NInputErrorMessage>
                                {errors.email?.message}
                            </NInputErrorMessage>

                        </NvalidationField>
                        <Nbutton>
                            <LoadingButton
                                onClick={handleSubmit(onSubmitHandler)}
                                loading={false}
                                variant="contained"
                                style={{
                                    marginBottom: errors.email?.message || errors.email?.message ? "15px" : "",
                                    backgroundColor: "#000000",
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
                </>
            ) : (
                <>
                    <NTitle>
                        Seu e-mail foi cadastrado com sucesso!
                    </NTitle>
                    <NTitleDescription>
                        A partir de agora você receberá as novidade e ofertas exclusivas.
                    </NTitleDescription>
                    <NinputWrapper>
                        <NbuttonSuccess>
                            <LoadingButton
                                onClick={goBackToAssign}
                                loading={false}
                                variant="contained"
                                style={{
                                    marginBottom: errors.email?.message || errors.email?.message ? "15px" : "",
                                    backgroundColor: "#000000",
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
                                Cadastrar novo e-mail
                        </LoadingButton>
                        </NbuttonSuccess>
                    </NinputWrapper>
                </>
            )}
        </Nwrapper>
    )
}

