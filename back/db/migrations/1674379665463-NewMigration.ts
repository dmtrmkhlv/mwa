import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1674379665463 implements MigrationInterface {
    name = 'NewMigration1674379665463'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("userId" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "event" ("id_event" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "creatorUserId" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_event" ("id_event" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "creatorUserId" integer, CONSTRAINT "FK_4212529a9a3872fe88de2b6cc96" FOREIGN KEY ("creatorUserId") REFERENCES "user" ("userId") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_event"("id_event", "title", "description", "creatorUserId") SELECT "id_event", "title", "description", "creatorUserId" FROM "event"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`ALTER TABLE "temporary_event" RENAME TO "event"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" RENAME TO "temporary_event"`);
        await queryRunner.query(`CREATE TABLE "event" ("id_event" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "creatorUserId" integer)`);
        await queryRunner.query(`INSERT INTO "event"("id_event", "title", "description", "creatorUserId") SELECT "id_event", "title", "description", "creatorUserId" FROM "temporary_event"`);
        await queryRunner.query(`DROP TABLE "temporary_event"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
