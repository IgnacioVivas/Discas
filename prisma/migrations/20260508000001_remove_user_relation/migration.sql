-- DropForeignKey
ALTER TABLE "Animal" DROP CONSTRAINT IF EXISTS "Animal_userId_fkey";

-- DropIndex
DROP INDEX IF EXISTS "Animal_userId_idx";

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN IF EXISTS "userId";
