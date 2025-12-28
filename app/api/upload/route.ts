// // app/api/upload/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import { writeFile, mkdir } from 'fs/promises';
// import { join } from 'path';
// import { v4 as uuidv4 } from 'uuid';

// export async function POST(request: NextRequest) {
//   try {
//     const formData = await request.formData();
//     const file = formData.get('file') as File;

//     if (!file) {
//       return NextResponse.json(
//         { error: 'No se recibió ningún archivo' },
//         { status: 400 }
//       );
//     }

//     // Validar que sea imagen
//     if (!file.type.startsWith('image/')) {
//       return NextResponse.json(
//         { error: 'El archivo debe ser una imagen' },
//         { status: 400 }
//       );
//     }

//     // Limitar tamaño (ej: 5MB)
//     if (file.size > 5 * 1024 * 1024) {
//       return NextResponse.json(
//         { error: 'La imagen no debe superar los 5MB' },
//         { status: 400 }
//       );
//     }

//     // Convertir File a Buffer
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);

//     // Generar nombre único
//     const uniqueName = `${uuidv4()}-${file.name.replace(/\s+/g, '-')}`;

//     // Ruta donde guardar (en public/uploads)
//     const uploadDir = join(process.cwd(), 'public', 'uploads', 'animales');

//     // Crear carpeta si no existe
//     await mkdir(uploadDir, { recursive: true });

//     // Ruta completa del archivo
//     const filePath = join(uploadDir, uniqueName);

//     // Guardar archivo
//     await writeFile(filePath, buffer);

//     // Ruta relativa para guardar en DB
//     const relativePath = `/uploads/animales/${uniqueName}`;

//     return NextResponse.json({
//       success: true,
//       filePath: relativePath,
//       fileName: uniqueName,
//       fileSize: file.size,
//       fileType: file.type
//     });

//   } catch (error) {
//     console.error('Error subiendo archivo:', error);
//     return NextResponse.json(
//       { error: 'Error al subir la imagen' },
//       { status: 500 }
//     );
//   }
// }
