"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommunityMemberDto = exports.CreateCommunityMemberSchema = void 0;
const zod_1 = require("zod");
exports.CreateCommunityMemberSchema = zod_1.z.object({
    name: zod_1.z
        .string({ required_error: 'name is required' })
        .min(3, 'name must be at least 3 characters')
        .max(100),
    email: zod_1.z
        .string({ required_error: 'email is required' })
        .email('email must be valid'),
    phone: zod_1.z
        .string({ required_error: 'phone is required' })
        .min(7, 'phone must be at least 7 characters')
        .max(20, 'phone must be at most 20 characters'),
    city: zod_1.z
        .string({ required_error: 'city is required' })
        .min(2, 'city must be at least 2 characters')
        .max(100),
    country: zod_1.z
        .string({ required_error: 'country is required' })
        .min(2, 'country must be at least 2 characters')
        .max(100),
    accepted_terms: zod_1.z
        .boolean({ required_error: 'accepted_terms is required' })
        .refine((val) => val === true, {
        message: 'You must accept the use of your data'
    }),
    message: zod_1.z
        .string()
        .max(1000, 'message must be at most 1000 characters')
        .optional(),
});
class CreateCommunityMemberDto {
    constructor(name, email, phone, city, country, accepted_terms, message) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.country = country;
        this.accepted_terms = accepted_terms;
        this.message = message;
    }
    static execute(input) {
        var _a, _b;
        const result = exports.CreateCommunityMemberSchema.safeParse(input);
        if (!result.success) {
            const error = (_b = (_a = result.error.errors[0]) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Validation failed';
            return [error];
        }
        const { name, email, phone, city, country, accepted_terms, message } = result.data;
        return [
            undefined,
            new CreateCommunityMemberDto(name, email, phone, city, country, accepted_terms, message)
        ];
    }
}
exports.CreateCommunityMemberDto = CreateCommunityMemberDto;
