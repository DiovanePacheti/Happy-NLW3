import Router, {Request, Response} from 'express';
import multer from 'multer';
import { getRepository } from 'typeorm';
import Orphanages from '../models/Orphanages';
import uploadConfig from '../config/upload';
import orphanageView from '../views/orphanages_view';
import * as Yup from 'yup';

const orphanagesRoutes = Router();
const upload = multer(uploadConfig);

orphanagesRoutes.post('/', upload.array('images') , async(req:Request, res:Response) =>{
    
    const { 
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } =req.body;

    const orphanagesRepository = getRepository(Orphanages);
    
    //Express.Multer.File esta enfirindo uma tipagem para usarmos como array  
    const requestImages = req.files as Express.Multer.File[];

    const images = requestImages.map(image => {
        return {path: image.filename}
    })

    const data = {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends: open_on_weekends === 'true',
        // open_on_weekends: JSON.parse(open_on_weekends), talves tenha que utilizar para capturar o valor boolean
        images
    }

    const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório '),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
        about: Yup.string().required().max(300),
        instructions: Yup.string().required(),
        opening_hours: Yup.string().required(),
        open_on_weekends: Yup.boolean().required(),
        images: Yup.array(Yup.object().shape({
            path: Yup.string().required()
        }))
    });


    await schema.validate(data, {
        abortEarly:false,
    })

    const orphanagesCreate = orphanagesRepository.create(data);

     try{

         await orphanagesRepository.save(orphanagesCreate);
         
         return res.status(201).json(orphanagesCreate);
    }catch(err){
        console.log("erro encontrado",err);
        return res.status(400).json({"erro":err});
    }
});

orphanagesRoutes.get('/', async(req:Request, res:Response) =>{
    
    const orphanagesRepository = getRepository(Orphanages);

    try{
        const orphanagesList = await orphanagesRepository.find({
            relations:['images']
        });
        return res.status(200).json(orphanageView.renderMany(orphanagesList));
    }catch(err){
        console.log("erro encontrado",err);
        return res.status(400).json({"erro":err});
    }
});

orphanagesRoutes.get('/:id', async(req:Request, res:Response) =>{
    
    const { id } = req.params;
    
    const orphanagesRepository = getRepository(Orphanages);

    try{
        const orphanagesSingleList = await orphanagesRepository.findOneOrFail(id, {
            relations:['images']
        });
        return res.status(200).json(orphanageView.render(orphanagesSingleList))
    }catch(err){
        console.log("erro encontrado",err);
        return res.status(400).json({"erro":err});
    }
});

export default orphanagesRoutes;