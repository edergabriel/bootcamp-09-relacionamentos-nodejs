import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1591750205755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'price',
                    type: 'numeric',
                    precision: 10,
                    scale: 2,
                },
                {
                    name: 'quantity',
                    type: 'integer',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                ],
            }),
            );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('products');
    }

}
