import multer from 'multer';
import path from 'path';
/** Arquivos que vai ter a responsabilidade de lidar com
 * o armazenamentos das imagens do upload
 */

export default{
    //vamos utilizar o storage e vamos utilizar o diskStorage pra guardar no disco
    storage: multer.diskStorage({
        
        //utilizand o path do node para apontar o caminho onde vai ser armazenado os arquivos
        destination: path.join(__dirname, '..', '..', 'uploads'),

        //redefinindo um novo nome do arquivo para ser armazendado pratica para evitar que nome iguas sobrescrevam um arquivo armazenado
        filename:(request, file, cb) => {
            
            const fileName = `${Date.now()}-${file.originalname}`;

            cb(null, fileName);
        },
    })

};