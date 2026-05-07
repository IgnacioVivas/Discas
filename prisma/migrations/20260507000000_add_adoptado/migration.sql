-- AlterTable
ALTER TABLE "Animal" ADD COLUMN "adoptado" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "Animal_publicado_tipo_idx" ON "Animal"("publicado", "tipo");
