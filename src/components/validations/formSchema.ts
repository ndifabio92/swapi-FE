import * as yup from 'yup';

export const formSchema = yup.object()
    .shape({
        name: yup
            .string()
            .min(2, 'The character count must be at least 2')
            .default('Enter the name to search')
    });