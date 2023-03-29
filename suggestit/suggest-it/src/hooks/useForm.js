import { useState } from 'react';

export default function useForm(initValues, handleSubmit) {
    const [data, setData] = useState({
        initValues,
    });

    function handleChange(e) {
        // console.log(e)
        const { name, value, type, checked } = e.target;

        setData((prev) => {
            return {
                ...prev,
                [name]: type === 'checkbox' ? checked : value,
            };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(data);
        setData(data);
    }
}
