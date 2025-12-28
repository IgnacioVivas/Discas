-- CreateTable
CREATE TABLE "Animal" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,
    "tamaño" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "discapacidad" TEXT,
    "castrado" BOOLEAN NOT NULL DEFAULT false,
    "vacunado" BOOLEAN NOT NULL DEFAULT false,
    "desparasitado" BOOLEAN NOT NULL DEFAULT false,
    "ubicacion" TEXT,
    "personalidad" TEXT[],
    "requisitosDeAdopcion" TEXT[],
    "imagenCard" TEXT NOT NULL,
    "fotos" TEXT[],
    "publicado" BOOLEAN NOT NULL DEFAULT false,
    "destacado" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nombre" TEXT,
    "password" TEXT NOT NULL,
    "rol" TEXT NOT NULL DEFAULT 'admin',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Animal_tipo_idx" ON "Animal"("tipo");

-- CreateIndex
CREATE INDEX "Animal_discapacidad_idx" ON "Animal"("discapacidad");

-- CreateIndex
CREATE INDEX "Animal_publicado_idx" ON "Animal"("publicado");

-- CreateIndex
CREATE INDEX "Animal_destacado_idx" ON "Animal"("destacado");

-- CreateIndex
CREATE INDEX "Animal_genero_idx" ON "Animal"("genero");

-- CreateIndex
CREATE INDEX "Animal_userId_idx" ON "Animal"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
