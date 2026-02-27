import { Router } from 'express';
import multer from 'multer';
import { ApplicantsController } from './controller';
import { CreatorCommunityMemberService } from './services/create.service';

export class ApplicantsRoutes {

    static get routes(): Router {
        const router = Router();
        const upload = multer();

        const service = new CreatorCommunityMemberService();
        const controller = new ApplicantsController(service);

        router.post('/applicants', upload.single('cv'), controller.createApplicant);
        router.get('/applicants', controller.getAll);
        router.get('/applicants/:id', controller.getById);

        return router;
    }
}
