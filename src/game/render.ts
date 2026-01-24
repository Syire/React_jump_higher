import { World } from "./types";

// Caricamento immagine compatibile con Vite/React
let playerImg: HTMLImageElement | null = null;
function getPlayerImg(): HTMLImageElement {
  if (!playerImg) {
    playerImg = new window.Image();
    // Usa import.meta.url per risolvere il path statico
    playerImg.src = new URL('../assets/tony.png', import.meta.url).href;
  }
  return playerImg;
}

export function render(ctx: CanvasRenderingContext2D, world: World) {
  const { width, height } = world;

  // SFONDO 
  ctx.fillStyle = "#f4f7fb";
  ctx.fillRect(0, 0, width, height);


  // Caricamento immagini piattaforme
  let platformBaseImg: HTMLImageElement | null = null;
  let platformJumpImg: HTMLImageElement | null = null;
  let platformBrokenImg: HTMLImageElement | null = null;
  function getPlatformImg(type: string): HTMLImageElement {
    if (type === "jump") {
      if (!platformJumpImg) {
        platformJumpImg = new window.Image();
        platformJumpImg.src = new URL('../assets/platform_jump.png', import.meta.url).href;
      }
      return platformJumpImg;
    } else if (type === "broken") {
      if (!platformBrokenImg) {
        platformBrokenImg = new window.Image();
        platformBrokenImg.src = new URL('../assets/platform_broken.png', import.meta.url).href;
      }
      return platformBrokenImg;
    } else {
      if (!platformBaseImg) {
        platformBaseImg = new window.Image();
        platformBaseImg.src = new URL('../assets/platforn_base.png', import.meta.url).href;
      }
      return platformBaseImg;
    }
  }

  // PIATTAFORME
  for (const plat of world.platforms) {
    const type = (typeof (plat as any).type === "string" ? (plat as any).type : "base");
    const img = getPlatformImg(type);
    if (img.complete) {
      ctx.drawImage(img, plat.pos.x, plat.pos.y, plat.w, plat.h);
    } else {
      ctx.fillStyle = "#4caf50";
      ctx.fillRect(plat.pos.x, plat.pos.y, plat.w, plat.h);
    }
  }


  // PLAYER
  const p = world.player;
  const img = getPlayerImg();
  if (img.complete) {
    ctx.drawImage(img, p.pos.x, p.pos.y, p.w, p.h);
  } else {
    // fallback: draw rect if image not loaded
    ctx.fillStyle = "#ff5722";
    ctx.fillRect(p.pos.x, p.pos.y, p.w, p.h);
  }

  // HUD 
  ctx.fillStyle = "#222";
  ctx.font = "16px Arial";
  ctx.fillText(`Score: ${world.score}`, 12, 24);

  // GAME OVER 
  if (world.state === "gameover") {
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, 0, width, height);
  }
}
