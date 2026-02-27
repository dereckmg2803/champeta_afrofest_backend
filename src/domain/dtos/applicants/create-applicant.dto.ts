import { z } from 'zod';

export const CreateCommunityMemberSchema = z.object({
    name: z
        .string({ required_error: 'name is required' })
        .min(3, 'name must be at least 3 characters')
        .max(100),

    email: z
        .string({ required_error: 'email is required' })
        .email('email must be valid'),

    phone: z
        .string({ required_error: 'phone is required' })
        .min(7, 'phone must be at least 7 characters')
        .max(20, 'phone must be at most 20 characters'),

    city: z
        .string({ required_error: 'city is required' })
        .min(2, 'city must be at least 2 characters')
        .max(100),

    country: z
        .string({ required_error: 'country is required' })
        .min(2, 'country must be at least 2 characters')
        .max(100),

    accepted_terms: z
        .boolean({ required_error: 'accepted_terms is required' })
        .refine((val: boolean) => val === true, {
            message: 'You must accept the use of your data'
        }),

    message: z
        .string()
        .max(1000, 'message must be at most 1000 characters')
        .optional(),
});

export class CreateCommunityMemberDto {
    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly phone: string,
        public readonly city: string,
        public readonly country: string,
        public readonly accepted_terms: boolean,
        public readonly message?: string
    ) { }

    static execute(
        input: { [key: string]: any }
    ): [string?, CreateCommunityMemberDto?] {

        const result = CreateCommunityMemberSchema.safeParse(input);

        if (!result.success) {
            const error = result.error.errors[0]?.message ?? 'Validation failed';
            return [error];
        }

        const {
            name,
            email,
            phone,
            city,
            country,
            accepted_terms,
            message
        } = result.data;

        return [
            undefined,
            new CreateCommunityMemberDto(
                name,
                email,
                phone,
                city,
                country,
                accepted_terms,
                message
            )
        ];
    }
}