import { MigrationInterface, QueryRunner } from 'typeorm';

export class newAddProfile1676998780355 implements MigrationInterface {
  name = 'newAddProfile1676998780355';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.commitTransaction();
    await queryRunner.query('PRAGMA foreign_keys=off');
    await queryRunner.startTransaction();
    await queryRunner.query(
      `CREATE TABLE "profile" ("id" varchar PRIMARY KEY NOT NULL, "photo" varchar NOT NULL DEFAULT (''), "firstname" varchar NOT NULL DEFAULT (''), "lastname" varchar NOT NULL DEFAULT (''), "phone" varchar NOT NULL DEFAULT (''), "email" varchar NOT NULL DEFAULT (''), "emailIsActive" boolean NOT NULL DEFAULT (0))`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_event" ("id" varchar PRIMARY KEY NOT NULL, "userCreatorId" varchar NOT NULL, "dateCreate" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "title" varchar NOT NULL, "description" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (true), "userId" varchar, CONSTRAINT "FK_01cd2b829e0263917bf570cb672" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_event"("id", "userCreatorId", "dateCreate", "title", "description", "isActive", "userId") SELECT "id", "userCreatorId", "dateCreate", "title", "description", "isActive", "userId" FROM "event"`,
    );
    await queryRunner.query(`DROP TABLE "event"`);
    await queryRunner.query(`ALTER TABLE "temporary_event" RENAME TO "event"`);
    await queryRunner.commitTransaction();
    await queryRunner.query('PRAGMA foreign_keys=on');
    await queryRunner.startTransaction();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.commitTransaction();
    await queryRunner.query('PRAGMA foreign_keys=off');
    await queryRunner.startTransaction();
    await queryRunner.query(`ALTER TABLE "event" RENAME TO "temporary_event"`);
    await queryRunner.query(
      `CREATE TABLE "event" ("id" varchar PRIMARY KEY NOT NULL, "userCreatorId" varchar NOT NULL, "dateCreate" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "title" varchar NOT NULL, "description" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (true), "userId" varchar, CONSTRAINT "FK_01cd2b829e0263917bf570cb672" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "event"("id", "userCreatorId", "dateCreate", "title", "description", "isActive", "userId") SELECT "id", "userCreatorId", "dateCreate", "title", "description", "isActive", "userId" FROM "temporary_event"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_event"`);
    await queryRunner.query(`DROP TABLE "profile"`);
    await queryRunner.commitTransaction();
    await queryRunner.query('PRAGMA foreign_keys=on');
    await queryRunner.startTransaction();
  }
}
