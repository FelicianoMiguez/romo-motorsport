# CHECKLIST — Antes de pegar el prompt en Claude Code

## 1. Archivos verificados

### Fotos reales (8 archivos) — OK
- [x] frente-taller.jpg (138KB)
- [x] galeria-1.jpg (103KB) — Porsche Cayenne
- [x] galeria-2.jpg (122KB) — Audi S3 (HERO)
- [x] galeria-3.jpg (202KB) — Kit embrague
- [x] galeria-4.jpg (73KB) — Tablero Amarok
- [x] galeria-5.jpg (90KB) — Herramientas
- [x] galeria-6.jpg (109KB) — Honda Fit
- [x] galeria-8.jpg (171KB) — BMW 120
- galeria-7 excluida (no necesaria)

### NanoBanana (8 archivos) — OK
- [x] hero-taller.jpg.png (5.7MB) — Audi en garage cinematográfico
- [x] svc-prevtv.png (6.8MB) — Aceite con embudo naranja
- [x] svc-service.png (6.7MB) — Aceite tono dorado
- [x] svc-frenos.png (6.8MB) — Disco de freno con caliper rojo
- [x] svc-scanner.png (5.9MB) — Tablet diagnóstico
- [x] svc-neumaticos.png (6.6MB) — Rueda en alineador láser
- [x] svc-mecanica.png (7.4MB) — Motor con distribución
- [x] promo-auto.png (6.6MB) — Porsche Cayenne en garage

### Logo — OK
- [x] logo.png (3.3MB) — PNG transparente, letras cursivas rojas/blancas

## 2. Crear el proyecto en Claude Code

### Opción A: Si tenés Claude Code en terminal
1. Abrí la terminal
2. `cd Desktop/RomoMotorSport`
3. Copiá TODO el contenido de `PROMPT-CLAUDE-CODE.md` desde la línea "Creame una landing page..." hasta el final
4. Pegalo en Claude Code como un solo mensaje
5. Claude Code va a leer `CLAUDE.md` automáticamente

### Opción B: Si usás Windsurf
1. Abrí Windsurf
2. Abrí la carpeta `Desktop/RomoMotorSport`
3. Pegá el mismo prompt del archivo `PROMPT-CLAUDE-CODE.md`

## 3. Después de que se cree el proyecto

Copiar las imágenes a la carpeta public del proyecto:
```bash
# Fotos reales
cp romo-fotos/*.jpg romo-motorsport/public/images/

# Logo
cp romo-fotos/logo.png romo-motorsport/public/images/

# NanoBanana
mkdir -p romo-motorsport/public/images/nanobanana
cp romo-fotos/Nanobanana/*.png romo-motorsport/public/images/nanobanana/
```

O pedile a Claude Code que lo haga por vos con:
"Copiá todas las imágenes de romo-fotos/ a public/images/ y las de Nanobanana/ a public/images/nanobanana/"

## 4. Probar local
```bash
cd romo-motorsport
npm run dev
```
Abrir http://localhost:3000

## 5. Deploy a Vercel
```bash
cd romo-motorsport
npx vercel
```
Seguir los pasos. O conectar con GitHub para deploy automático.

## Distribución de imágenes en la landing

| Sección | Imagen | Fuente |
|---------|--------|--------|
| Hero (fondo) | hero-taller.jpg.png | NanoBanana |
| Hero (alternativa) | galeria-2.jpg | Foto real |
| Service Pre-VTV | svc-prevtv.png | NanoBanana |
| Service Completo | svc-service.png | NanoBanana |
| Service Frenos | svc-frenos.png | NanoBanana |
| Service Escaneo | svc-scanner.png | NanoBanana |
| Service Neumáticos | svc-neumaticos.png | NanoBanana |
| Service Mecánica | svc-mecanica.png | NanoBanana |
| Promo banner | promo-auto.png | NanoBanana |
| About/Nosotros | frente-taller.jpg | Foto real |
| Galería 1 | galeria-1.jpg | Foto real (Porsche) |
| Galería 2 | galeria-2.jpg | Foto real (Audi S3) |
| Galería 3 | galeria-3.jpg | Foto real (Embrague) |
| Galería 4 | galeria-8.jpg | Foto real (BMW 120) |
| Galería 5 | galeria-6.jpg | Foto real (Honda Fit) |
| Galería 6 | galeria-5.jpg | Foto real (Herramientas) |
| Galería 7 | galeria-4.jpg | Foto real (Tablero) |
| Navbar logo | logo.png | Logo oficial |
