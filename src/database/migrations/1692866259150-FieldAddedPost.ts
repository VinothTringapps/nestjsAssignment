import { MigrationInterface, QueryRunner } from "typeorm";

export class FieldAddedPost1692866259150 implements MigrationInterface {
    name = 'FieldAddedPost1692866259150'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "user_phone_number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "User_created_details" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "User_updated_details" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "User_deleted_details" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "post" ADD "post_order" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "post_created_details" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" ADD "post_updated_details" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" ADD "post_deleted_details" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "post_deleted_details"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "post_updated_details"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "post_created_details"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "post_order"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "User_deleted_details"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "User_updated_details"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "User_created_details"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "user_phone_number"`);
    }

}
