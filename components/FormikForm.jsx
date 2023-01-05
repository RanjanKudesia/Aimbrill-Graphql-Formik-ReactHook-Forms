import { useFormik } from "formik";
import * as Yup from 'yup';

function Signup() {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Must be 15 Characters or less').required('Required'),
        }),
        onSubmit: (values) => {
            console.log(values);
            formik.errors.firstName ? alert(formik.errors.firstName) : null;
        }
    });

    console.log('Errors', formik.errors);
    // console.log(formik.values.firstName);

    return (
        <>
            <form>
                <div>
                    <input onChange={formik.handleChange} value={formik.values.firstName} id="firstName" name="firstName" type='text' placeholder="First Name" />
                    <input onChange={formik.handleChange} value={formik.values.lastName} id="lastName" name="lastName" type='text' placeholder="Last Name" />
                    <input onChange={formik.handleChange} value={formik.values.email} id="email" name="email" type='email' placeholder="Email" />
                </div>
                <button type="submit" onClick={formik.handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Signup