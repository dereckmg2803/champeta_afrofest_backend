import { Router } from 'express';
import multer from 'multer';
import { ApplicantsController } from './controller';
import { CreatorCommunityMemberService } from './services/create.service';


export class ApplicantsRoutes {

    static get routes(): Router {
        const router = Router();


        const service = new CreatorCommunityMemberService();
        const controller = new ApplicantsController(service);

        router.post('/community-members', controller.createApplicant);
        router.get('/community-members', controller.getAll);
        router.get('/community-members/:id', controller.getById);

        return router;
    }
}
