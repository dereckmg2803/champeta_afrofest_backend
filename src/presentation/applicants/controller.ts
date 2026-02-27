import { Request, Response } from 'express';
import { CreatorCommunityMemberService } from './services/create.service';
import { GetAllCommunityMembersService } from './services/get-all.service';
import { GetCommunityMemberByIdService } from './services/get-by-id.service';

import { CommunityMember } from '../../data';
import { handleError } from '../common/handleError';

export class ApplicantsController {

    constructor(
        private readonly creatorService: CreatorCommunityMemberService,
        private readonly getAllService = new GetAllCommunityMembersService(),
        private readonly getByIdService = new GetCommunityMemberByIdService(),

    ) { }

    createApplicant = async (req: Request, res: Response) => {
        try {
            const result = await this.creatorService.execute(req.body);
            res.status(201).json(result);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };

    getAll = async (_: Request, res: Response) => {
        const data = await this.getAllService.execute();
        res.json(data);
    };

    getById = async (req: Request, res: Response) => {
        try {
            const data = await this.getByIdService.execute(req.params.id);
            res.json(data);
        } catch (error: any) {
            res.status(404).json({ message: error.message });
        }
    };

}
