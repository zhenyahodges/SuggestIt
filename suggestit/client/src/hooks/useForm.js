import { useState } from 'react';

export default function useForm(initValues, onSubmit) {
    const [data, setData] = useState({
        initValues,
    });

    const handleChange = (e) => {
        // console.log(e)
        const { name, value, type, checked } = e.target;

        setData((prev) => {
            return {
                ...prev,
                [name]: type === 'checkbox' ? checked : value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        // handleSubmit(data);
        // setData(initValues);
    };

    return {
        data,
        handleChange,
        onSubmit,
    };
}
