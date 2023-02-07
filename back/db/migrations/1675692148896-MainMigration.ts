import { MigrationInterface, QueryRunner } from "typeorm";

export class MainMigration1675692148896 implements MigrationInterface {
    name = 'MainMigration1675692148896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "gift" ("id" varchar PRIMARY KEY NOT NULL, "eventId" varchar NOT NULL, "userCreatorId" varchar NOT NULL, "userBookId" varchar NOT NULL DEFAULT (''), "title" varchar NOT NULL, "link" varchar NOT NULL, "description" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "event" ("id" varchar PRIMARY KEY NOT NULL, "userCreatorId" varchar NOT NULL, "dateCreate" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "title" varchar NOT NULL, "description" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (true), "userId" varchar)`);
        await queryRunner.query(`CREATE TABLE "temporary_gift" ("id" varchar PRIMARY KEY NOT NULL, "eventId" varchar NOT NULL, "userCreatorId" varchar NOT NULL, "userBookId" varchar NOT NULL DEFAULT (''), "title" varchar NOT NULL, "link" varchar NOT NULL, "description" varchar NOT NULL, CONSTRAINT "FK_9a73a0dc51e46fa12e29eb2b642" FOREIGN KEY ("eventId") REFERENCES "event" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_gift"("id", "eventId", "userCreatorId", "userBookId", "title", "link", "description") SELECT "id", "eventId", "userCreatorId", "userBookId", "title", "link", "description" FROM "gift"`);
        await queryRunner.query(`DROP TABLE "gift"`);
        await queryRunner.query(`ALTER TABLE "temporary_gift" RENAME TO "gift"`);
        await queryRunner.query(`CREATE TABLE "temporary_event" ("id" varchar PRIMARY KEY NOT NULL, "userCreatorId" varchar NOT NULL, "dateCreate" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "title" varchar NOT NULL, "description" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (true), "userId" varchar, CONSTRAINT "FK_01cd2b829e0263917bf570cb672" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_event"("id", "userCreatorId", "dateCreate", "title", "description", "isActive", "userId") SELECT "id", "userCreatorId", "dateCreate", "title", "description", "isActive", "userId" FROM "event"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`ALTER TABLE "temporary_event" RENAME TO "event"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" RENAME TO "temporary_event"`);
        await queryRunner.query(`CREATE TABLE "event" ("id" varchar PRIMARY KEY NOT NULL, "userCreatorId" varchar NOT NULL, "dateCreate" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "title" varchar NOT NULL, "description" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (true), "userId" varchar)`);
        await queryRunner.query(`INSERT INTO "event"("id", "userCreatorId", "dateCreate", "title", "description", "isActive", "userId") SELECT "id", "userCreatorId", "dateCreate", "title", "description", "isActive", "userId" FROM "temporary_event"`);
        await queryRunner.query(`DROP TABLE "temporary_event"`);
        await queryRunner.query(`ALTER TABLE "gift" RENAME TO "temporary_gift"`);
        await queryRunner.query(`CREATE TABLE "gift" ("id" varchar PRIMARY KEY NOT NULL, "eventId" varchar NOT NULL, "userCreatorId" varchar NOT NULL, "userBookId" varchar NOT NULL DEFAULT (''), "title" varchar NOT NULL, "link" varchar NOT NULL, "description" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "gift"("id", "eventId", "userCreatorId", "userBookId", "title", "link", "description") SELECT "id", "eventId", "userCreatorId", "userBookId", "title", "link", "description" FROM "temporary_gift"`);
        await queryRunner.query(`DROP TABLE "temporary_gift"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "gift"`);
    }

}
