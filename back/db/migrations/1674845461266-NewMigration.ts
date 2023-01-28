import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1674845461266 implements MigrationInterface {
    name = 'NewMigration1674845461266'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "event" ("id" varchar PRIMARY KEY NOT NULL, "userCreatorId" varchar NOT NULL, "date" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "title" varchar NOT NULL, "description" varchar NOT NULL, "userId" varchar)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "gift" ("id" varchar PRIMARY KEY NOT NULL, "eventId" varchar NOT NULL, "userCreatorId" varchar NOT NULL, "userBookId" varchar NOT NULL, "title" varchar NOT NULL, "link" varchar NOT NULL, "description" varchar NOT NULL, "userId" varchar)`);
        await queryRunner.query(`CREATE TABLE "temporary_event" ("id" varchar PRIMARY KEY NOT NULL, "userCreatorId" varchar NOT NULL, "date" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "title" varchar NOT NULL, "description" varchar NOT NULL, "userId" varchar, CONSTRAINT "FK_01cd2b829e0263917bf570cb672" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_event"("id", "userCreatorId", "date", "title", "description", "userId") SELECT "id", "userCreatorId", "date", "title", "description", "userId" FROM "event"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`ALTER TABLE "temporary_event" RENAME TO "event"`);
        await queryRunner.query(`CREATE TABLE "temporary_gift" ("id" varchar PRIMARY KEY NOT NULL, "eventId" varchar NOT NULL, "userCreatorId" varchar NOT NULL, "userBookId" varchar NOT NULL, "title" varchar NOT NULL, "link" varchar NOT NULL, "description" varchar NOT NULL, "userId" varchar, CONSTRAINT "FK_9a73a0dc51e46fa12e29eb2b642" FOREIGN KEY ("eventId") REFERENCES "event" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_f7a55bd23f1651967522262f50f" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_gift"("id", "eventId", "userCreatorId", "userBookId", "title", "link", "description", "userId") SELECT "id", "eventId", "userCreatorId", "userBookId", "title", "link", "description", "userId" FROM "gift"`);
        await queryRunner.query(`DROP TABLE "gift"`);
        await queryRunner.query(`ALTER TABLE "temporary_gift" RENAME TO "gift"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gift" RENAME TO "temporary_gift"`);
        await queryRunner.query(`CREATE TABLE "gift" ("id" varchar PRIMARY KEY NOT NULL, "eventId" varchar NOT NULL, "userCreatorId" varchar NOT NULL, "userBookId" varchar NOT NULL, "title" varchar NOT NULL, "link" varchar NOT NULL, "description" varchar NOT NULL, "userId" varchar)`);
        await queryRunner.query(`INSERT INTO "gift"("id", "eventId", "userCreatorId", "userBookId", "title", "link", "description", "userId") SELECT "id", "eventId", "userCreatorId", "userBookId", "title", "link", "description", "userId" FROM "temporary_gift"`);
        await queryRunner.query(`DROP TABLE "temporary_gift"`);
        await queryRunner.query(`ALTER TABLE "event" RENAME TO "temporary_event"`);
        await queryRunner.query(`CREATE TABLE "event" ("id" varchar PRIMARY KEY NOT NULL, "userCreatorId" varchar NOT NULL, "date" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "title" varchar NOT NULL, "description" varchar NOT NULL, "userId" varchar)`);
        await queryRunner.query(`INSERT INTO "event"("id", "userCreatorId", "date", "title", "description", "userId") SELECT "id", "userCreatorId", "date", "title", "description", "userId" FROM "temporary_event"`);
        await queryRunner.query(`DROP TABLE "temporary_event"`);
        await queryRunner.query(`DROP TABLE "gift"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "event"`);
    }

}
