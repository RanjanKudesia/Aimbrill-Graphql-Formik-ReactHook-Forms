import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null])
})

function ReactHookForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <input {...register('firstName')} type='text' name='firstName' placeholder='First Name' />
                <p>{errors.firstName?.message}</p>
                <input {...register('lastName')} type='text' name='lastName' placeholder='Last Name' />
                <p>{errors.lastName?.message}</p>
                <input {...register('email')} type='email' name='email' placeholder='Email' />
                <p>{errors.email?.message}</p>
                <input {...register('age')} type='number' name='age' placeholder='Age' />
                <p>{errors.age?.message}</p>
                <input {...register('password')} type='password' name='password' placeholder='Password' />
                <p>{errors.password?.message}</p>
                <input {...register('changePassword')} type='password' name='confirmPassword' placeholder='Confirm Password' />
                <p>{errors.confirmPassword && 'Password should match'}</p>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default ReactHookForm;