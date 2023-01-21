import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1674327797702 implements MigrationInterface {
    name = 'NewMigration1674327797702'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "event" ("id_event" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "creator" text NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "userUserId" integer)`);
        await queryRunner.query(`CREATE TABLE "user" ("userId" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_event" ("id_event" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "creator" text NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "userUserId" integer, CONSTRAINT "FK_339e53bceb7929a7856e1cd7909" FOREIGN KEY ("userUserId") REFERENCES "user" ("userId") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_event"("id_event", "creator", "title", "description", "userUserId") SELECT "id_event", "creator", "title", "description", "userUserId" FROM "event"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`ALTER TABLE "temporary_event" RENAME TO "event"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" RENAME TO "temporary_event"`);
        await queryRunner.query(`CREATE TABLE "event" ("id_event" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "creator" text NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "userUserId" integer)`);
        await queryRunner.query(`INSERT INTO "event"("id_event", "creator", "title", "description", "userUserId") SELECT "id_event", "creator", "title", "description", "userUserId" FROM "temporary_event"`);
        await queryRunner.query(`DROP TABLE "temporary_event"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "event"`);
    }

}
