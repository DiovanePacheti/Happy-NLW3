import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateImages1602607732205 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'images',
            columns:[
                {
                    name:'id',
                    type:'integer',
                    unsigned:true,
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment'
                },
                {
                    name:'path',
                    type:'varchar'
                },
                {
                    name:'orphanage_id',//campo guarda o id do relacionamento
                    type:'interger'
                }
            ],
            /** configurando as chaves estrangeiras do relacinamento de 1 pra N
             * um orfanato tem muitas imagens / uma imagem pertence a um orfanato
             */
            foreignKeys:[
                {
                    name:'ImageOrphanage',
                    columnNames:['orphanage_id'],
                    referencedTableName:'orphanages',
                    referencedColumnNames:['id'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
