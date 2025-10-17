-- CreateTable
CREATE TABLE "autores" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "autores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "libros" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "fecha_publicacion" TIMESTAMP(3),
    "autor_id" INTEGER NOT NULL,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "libros_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "autores_correo_key" ON "autores"("correo");

-- AddForeignKey
ALTER TABLE "libros" ADD CONSTRAINT "libros_autor_id_fkey" FOREIGN KEY ("autor_id") REFERENCES "autores"("id") ON DELETE CASCADE ON UPDATE CASCADE;
