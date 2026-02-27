// services/get-all.service.ts
import { CommunityMember } from '../../../data';

export class GetAllCommunityMembersService {
    async execute() {
        return CommunityMember.find({
            order: { created_at: 'DESC' },
        });
    }
}
