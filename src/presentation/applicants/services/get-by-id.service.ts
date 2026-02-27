// services/get-by-id.service.ts
import { CommunityMember } from '../../../data';

export class GetCommunityMemberByIdService {
    async execute(id: string) {
        const applicant = await CommunityMember.findOneBy({ id });

        if (!applicant) {
            throw new Error('Community member not found');
        }

        return applicant;
    }
}
