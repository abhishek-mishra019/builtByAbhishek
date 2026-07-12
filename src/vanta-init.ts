import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

// Keep this around in case any other code expects a global THREE.
(window as any).THREE = THREE;

// Re-create the same VANTA.NET(...) global API the components already use,
// but backed by the npm-imported effect + three module instead of the
// removed global UMD scripts.
(window as any).VANTA = {
  NET: (options: any) => NET({ THREE, ...options }),
};
