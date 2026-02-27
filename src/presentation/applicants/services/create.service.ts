import { CommunityMember } from '../../../data';
import { CreateCommunityMemberDto } from '../../../domain/dtos/applicants/create-applicant.dto';

export class CreatorCommunityMemberService {

    async execute(dto: CreateCommunityMemberDto) {

        const member = new CommunityMember();

        member.name = dto.name;
        member.email = dto.email;
        member.phone = dto.phone;
        member.city = dto.city;
        member.country = dto.country;
        member.accepted_terms = dto.accepted_terms;
        member.message = dto.message;

        try {
            await member.save();

            return {
                message: 'Community member registered successfully',
                data: member
            };

        } catch (error: any) {

            // Manejo específico si el email ya existe
            if (error.code === '23505') { // Postgres unique violation
                throw new Error('Email already registered');
            }

            console.error('Error creating community member:', error);
            throw new Error('Failed to register community member');
        }
    }
}